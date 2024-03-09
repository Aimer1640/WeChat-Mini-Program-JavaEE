// pages/login/login.js
const db=wx.cloud.database();
const _ =db.command;
const app=getApp();
var inputs = {};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: true,
    modalHidden: true,
    modalContent: '',
    inputs: {}
  },
  //input事件
  inputChange: function (e) {
    inputs[e.currentTarget.id] = e.detail.value
  },
  //loading组件的绑定事件
  tapLoading: function () {
    this.setData({
      loadingHidden: true
    })
  },

  loading: function () {
    this.setData({
      loadingHidden: false
    })
  },
  //重置按钮
  formReset: function () {
    inputs = {}
    wx.setStorageSync('username', '')
    wx.setStorageSync('password', '')
  },
  //提交按钮
  formSubmit: function () {
    wx.getUserProfile({
      desc: '获取用户信息',
      success:(res)=>{
        console.log(res);
        app.globalData.userInfo=res.userInfo;
      },
      fail:function(err){
        console.log(err);
      }
    })
    var page = this
    if (inputs['username'] == null || inputs['username'] == '') {
      page.showModal('请输入编号')
      return
    }
    if (inputs['password'] == null || inputs['password'] == '') {
      page.showModal('请输入密码')
      return
    }
    page.loading()
    var that = this;
    wx.request({
      url: 'http://localhost:8080/work_war_exploded/CustomLoginServlet',
      method: 'GET', //请求方式
      header: { 
          "content-type":"application/x-www-form-urlencoded"
      },
      data: {
        username:inputs['username'],
        password:inputs['password']
      },
      success: function(res) {
        // ,JSON.stringify(res.data)
         console.log("获取到的用户信息成功: " + res.data);
         console.log(res.data)
         console.log(res)
         that.setData({
          list : res.data,
        })
         if(res.data == "success") {
 
          wx.hideNavigationBarLoading()

          wx.switchTab({
            url: '../FrontPage/FrontPage',
          })
         } else {
          that.setData({
            loadingHidden: true
          })
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 1500,
            })
         }
      },
      
      fail: function() {
        app.consoleLog("请求数据失败");
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  //提交按钮提示
  showModal: function (msg) {
    this.setData({
      modalHidden: false,
      modalContent: msg
    })
  },
  modalCancel: function () {
    this.setData({
      modalHidden: true
    })
  },
  modalConfirm: function () {
    this.setData({
      modalHidden: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 调用应用实例的方法获取全局数据
    var that = this
    inputs['username'] = wx.getStorageSync('username')
    inputs['password'] = wx.getStorageSync('password') // 这里没有加密安全性较低
    this.setData({
      inputs: inputs
    })
  },

})