// pages/FrontPage/FrontPage.js
const db=wx.cloud.database();
const _ =db.command;
Page({

  /* 页面的初始数据*/
  data: {

  },
  onLoad:function(options){
    db.collection('sigth').orderBy('id','asc').get().then(res=>{
        console.log(res)
        var sigthlist=res.data;
        for(let index=0;index<sigthlist.length;index++){
          sigthlist[index].date=new Date(sigthlist[index].date).toLocaleDateString();
        }
        this.setData({
          sigthlist:sigthlist,
          markers: sigthlist
        })
  
      })
  },

  bindSearchKey(e){
    //   console.log(e)
    this.setData({
      searchKey:e.detail.value
    })
  },
  onNewsSearch(){
    db.collection('sigth').where({
      id:db.RegExp({
        regexp:this.data.searchKey,
        options:'i'
      })
    }).get().then(res=>{
      console.log(res);
      var sigthlist=res.data;
      for(let index=0;index<sigthlist.length;index++){
        sigthlist[index].date=new Date(sigthlist[index].date).toLocaleDateString();
      }
      this.setData({
        sigthlist:sigthlist
      })
    })
  },


toSigth(e){
    console.log(e)
    var sigthId=e.currentTarget.dataset.sigthId;

    // console.log(sigthId)
    wx.navigateTo({
      url: '../SigthDetail/SigthDetail?id='+sigthId,
    })

  },
  //跳转至实时人流量页面
  ShowPassengerFlowPage: function(){
    wx.navigateTo({
      url: '/pages/PassengerFlowPage/PassengerFlowPage',
    })
  },

  //跳转至项目查看页面
  ShowAttractionsListPage: function(){
    wx.navigateTo({
      url: '/pages/AttractionsListPage/AttractionsListPage',
    })
  },

  //跳转至智慧导航页面
  ShowMapPage: function(){
    wx.switchTab({
      url: '/pages/MapPage/MapPage',
    })
  },

  //跳转至营业时间页面
  ShowBusinessHoursPage: function(){
    wx.navigateTo({
      url: '/pages/BusinessHoursPage/BusinessHoursPage',
    })
  },

  //跳转至景区公告页面
  ShowAnnouncementPage: function(){
    wx.navigateTo({
      url: '/pages/AnnouncementPage/AnnouncementPage',
    })
  },

})