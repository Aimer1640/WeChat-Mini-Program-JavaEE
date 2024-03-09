// pages/AttractionsListPage/AttractionsListPage.js
const db=wx.cloud.database();
const _ =db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    navTab: ['游玩', '饮食'],
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

//   onLoad:function(options){
//     const markers = [
//       //长隆欢乐世界-急流勇进
//     {
//        id:1,
//        iconPath: "/images/location.png",
//        latitude: 22.998121,
//        longitude: 113.328454,
//        width: 30,  //图片显示宽度
//        height: 30,//图片显示高度
//        title:'急流勇进',
//        name:'急流勇进',
//        urls:'/images/1.png',
//        sigthimg:'/images/SuperSplash.jpg'
//      },
//      //长隆欢乐世界-U型滑板
//      {
//        id: 2,
//        iconPath: "/images/location.png",
//        latitude: 23.000142,
//        longitude: 113.330129,
//        width: 30,  
//        height: 30,
//        title:'U型滑板',
//        name:'U型滑板',
//        urls:'/images/2.png',
//        sigthimg:'/images/Uskateboard.jpg'
//      },
//      //长隆欢乐世界-自由落体
//      {
//        id: 3,
//        iconPath: "/images/location.png",
//        latitude: 22.998259,
//        longitude: 113.330523,
//        width: 30,
//        height: 30,
//        title: '自由落体',
//        name:'自由落体',
//        urls:'/images/3.png',
//        sigthimg:'/images/Freefall.jpg'
//      },
//      //长隆欢乐世界-龙卷风暴
//      {
//        id: 4,
//        iconPath: "/images/location.png",
//        latitude: 22.999857,
//        longitude: 113.332566,
//        width: 30,
//        height: 30,
//        title: '龙卷风暴',
//        name:'龙卷风暴',
//        urls:'/images/4.png',
//        sigthimg:'/images/Tornadostorm.jpg'
//      },
//      //5
//      {
//        id: 5,
//        iconPath: "/images/location.png",
//        latitude: 22.999857,
//        longitude: 113.332566,
//        width: 30,
//        height: 30,
//        title: '旋转木马',
//        name:'旋转木马',
//        urls:'/images/5.png',
//        sigthimg:'/images/Tornadostorm.jpg'
//      },
//      //6
//      {
//        id: 6,
//        iconPath: "/images/location.png",
//        latitude: 22.999857,
//        longitude: 113.332566,
//        width: 30,
//        height: 30,
//        title: '欢乐摩天轮',
//        name:'欢乐摩天轮',
//        urls:'/images/6.png',
//        sigthimg:'/images/Tornadostorm.jpg'
//      },
//      //7
//      {
//        id: 7,
//        iconPath: "/images/location.png",
//        latitude: 22.999857,
//        longitude: 113.332566,
//        width: 30,
//        height: 30,
//        title: '旋转木马',
//        name:'旋转木马',
//        urls:'/images/7.png',
//        sigthimg:'/images/Tornadostorm.jpg'
//      },
//      //8
//      {
//        id: 8,
//        iconPath: "/images/location.png",
//        latitude: 22.999857,
//        longitude: 113.332566,
//        width: 30,
//        height: 30,
//        title: '魔法城堡',
//        name:'魔法城堡',
//        urls:'/images/8.png',
//        sigthimg:'/images/Tornadostorm.jpg'
//      },
//      ]
//      if(wx.getStorageSync('newslist')){
//       this.setData({
//         markers:wx.getStorageSync('markers'),
//         sigth:wx.getStorageSync('markers')
//       })
//     }else{
//       this.setData({
//         markers: markers
//       })
//       wx.setStorageSync('sigth', this.data.markers)
//     }
//   },

  //跳转对应景点
  toSigth(e){
    console.log(e)
    var sigthId=e.currentTarget.dataset.sigthId;

    console.log(sigthId)
    wx.navigateTo({
      url: '../SigthDetail/SigthDetail?id='+sigthId,
    })

  },


  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      page: 0
    })
    if (this.data.TabCur == 0) {
      this.LoadUnCompletedForm(0)
    } else if (this.data.TabCur == 1) {
      this.LoadCompletedForm(0)
    }
  },

  LoadUnCompletedForm(isReachBottom) {
    var page = this.data.page
    wx.showLoading({
      title: '数据加载中...',
    })
    // var phone = wx.getStorageSync('phone');
    db.collection('sigth').where({
        step: _.lte(2),
        phone: phone
      }).skip(page).orderBy('step', 'asc')
      .orderBy('submitdate', 'desc')
      .get().then(res => {
        for (var index in res.data) {
          res.data[index].time = util.formatTime(res.data[index].submitdate)
          res.data[index].completetime = util.formatTime(res.data[index].completedate)
          if (res.data[index].step == 1)
            res.data[index].btnText = '等待派单'
          else
            res.data[index].btnText = '已派单'
        }
        var orderlist = this.data.orderlist
        if (isReachBottom == 1)
          orderlist = orderlist.concat(res.data)
        else
          orderlist = res.data
        this.setData({
          orderlist: orderlist
        })
        wx.hideLoading()
      })
  },

  LoadCompletedForm(isReachBottom) {
    var page = this.data.page
    wx.showLoading({
      title: '数据加载中...',
    })
    var phone = wx.getStorageSync('phone');
    db.collection('order').where({
        step: _.gte(3),
        phone: phone
      }).skip(page).orderBy('submitdate', 'desc')
      .get().then(res => {
        for (var index in res.data) {
          res.data[index].time = util.formatTime(res.data[index].submitdate)
          res.data[index].completetime = util.formatTime(res.data[index].completedate)
          if (res.data[index].step == 3)
            res.data[index].btnText = '待评价'
          else
            res.data[index].btnText = '已完成'
        }
        var orderlist = this.data.orderlist
        if (isReachBottom == 1)
          orderlist = orderlist.concat(res.data)
        else
          orderlist = res.data
        this.setData({
          orderlist: orderlist
        })
        wx.hideLoading()
      })
  },

})