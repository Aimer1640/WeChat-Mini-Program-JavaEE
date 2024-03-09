// pages/PurchaseTickets/PurchaseTickets.js
const db = wx.cloud.database()
const _ = db.command
var util = require('../../utils/util.js')
Page({
  data: {
    TabCur: 0,
    navTab: ['可购票', '已购票'],
    orderlist: {},
    phone:'',
    page: 0,
  },
  toSigth(e){
    console.log(e)
    var sigthId=e.currentTarget.dataset.sigthId;
    // console.log(sigthId)
    wx.navigateTo({
      url: '../SigthDetail/SigthDetail?id='+sigthId,
    })

  },
  orderdetail(e){
    console.log(e)
    var orderId=e.currentTarget.dataset.id;
    console.log(orderId)
    wx.navigateTo({
      url: '../OrderDetail/OrderDetail?id='+orderId,
    })
  },
  LoadUnCompletedForm(isReachBottom) {
    
  },

  LoadCompletedForm(isReachBottom) {
    wx.cloud.callFunction({
      name:'getOpenId'
  }).then(res=>{
      console.log(res);
      console.log(res.result.openid)
      
      this.setData({
        openid:res.result.openid
      })
      
  }).catch(err=>{
      console.log(err)
  })
    var page = this.data.page
    wx.showLoading({
      title: '数据加载中...',
    })
    var phone = wx.getStorageSync('phone');
    db.collection('SubmissionOrder').where({
        step: _.gte(1),
        // phone: phone
      }).skip(page).orderBy('date', 'desc')
      .get().then(res => {
        // for (var index in res.data) {
        //   // res.data[index].time = util.formatTime(res.data[index].submitdate)
        //   // res.data[index].completetime = util.formatTime(res.data[index].completedate)
        //   // if (res.data[index].step == 3)
        //   //   res.data[index].btnText = '已购票'
        //   // else
        //   //   res.data[index].btnText = '已完成'
        // }
        var orderlist = this.data.orderlist
        console.log(orderlist)
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

  onLoad: function (options) {
    db.collection('sigth').orderBy('id','asc').get().then(res=>{
      // console.log(res)
      var sigthlist=res.data;
      for(let index=0;index<sigthlist.length;index++){
        sigthlist[index].date=new Date(sigthlist[index].date).toLocaleDateString();
      }
      this.setData({
        sigthlist:sigthlist,
        markers: sigthlist
      })

    })
  if (this.data.TabCur == 0) {
    this.LoadUnCompletedForm(0)
  } else if (this.data.TabCur == 1) {
    this.LoadCompletedForm(0)
  }
  },

  toSubmissionOrder:function(e){
    console.log(e)
    var sigthId=e.currentTarget.dataset.sigthId;
    console.log(sigthId)
    wx.navigateTo({
      url: '../SubmissionOrder/SubmissionOrder?id='+sigthId,
    })
  },

  onShow: function () {
    this.onLoad()
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

  onReachBottom: function () {
    console.log("onReachBottom")
    var page = this.data.page + 20
    this.setData({
      page: page
    })
    if (this.data.TabCur == 0) {
      this.LoadUnCompletedForm(1)
    } else if (this.data.TabCur == 1) {
      this.LoadCompletedForm(1)
    }
  },

  fillform: function (event) {
    wx.navigateTo({
      url: '../orderform/orderform'
    })
  },

  revisefile: function (event) {
    wx.navigateTo({
      url: '../formdetail/formdetail?authority=0&id=' + event.currentTarget.dataset.id
    })
  },

  manageorder:function(event){
      wx.navigateTo({
        url: '../formdetail/formdetail?authority=1&id='+event.currentTarget.dataset.id,
      })
  }
})