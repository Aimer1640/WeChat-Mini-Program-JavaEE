// pages/addnews/addnews.js
const db=wx.cloud.database();
const _ =db.command;
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
 data: {
  },

onLoad(options){
  console.log(options);
  var sigthId=options.id;
  console.log(sigthId)
  db.collection('sigth').where({
    id:sigthId
  }).get().then(res=>{
    var sigth=res.data[0];
    console.log(sigth)
  //   sigth.data=new Date(sigth.data).toLocaleDateString();
    this.setData({
      sigth:sigth
    })
    wx.setNavigationBarTitle({
      title: this.data.sigth.title,
    })
  })
},

inputtitle: function (event) {
  this.setData({
    title: event.detail.value
  })
},

formSubmit(e){
  console.log(e);
  var sigthorder={
    id:Math.floor(Math.random()*100),
    sigthname:e.detail.value.title,
    teapwd:e.detail.value.title,
    customname:app.globalData.userInfo.nickName,
    state:'已购票',
    num:e.detail.value.num, 
    photo:app.globalData.userInfo.avatarUrl,
  }
  var sigthordercustom={
      title:e.detail.value.title,
      num:e.detail.value.num,
      content:e.detail.value.content,
      author:app.globalData.userInfo.nickName,
      avatarUrl:app.globalData.userInfo.avatarUrl,
      imgsUrl:this.data.imgList,
      date:new Date(),
      status: '已购票',
      step: 1,

    }

  var that=this;
  wx.request({
    url: 'http://localhost:8080/work_war_exploded/CustomAddServlet',
      method: 'GET', //请求方式
      data:sigthorder,
      header: { 
        "content-type":"application/x-www-form-urlencoded"
    },
          success: function(res) {
        // ,JSON.stringify(res.data)
         console.log("获取到的用户信息成功: " + res.data);
         that.setData({
          list : res.data,
        })
      },
      
      fail: function() {
        app.consoleLog("请求数据失败");
      },
  })
  db.collection('SubmissionOrder').add({
    data:sigthordercustom
  })
  wx.reLaunch({
    url: '../PurchaseTickets/PurchaseTickets',
  })
},




})