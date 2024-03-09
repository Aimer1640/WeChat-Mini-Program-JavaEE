Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    numberList:[]
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  //mysql云函数调用
  connectMysql(){
    wx.cloud.callFunction({
      name: 'mysql', // 云函数集的名称
      success: (res) => {
        console.log(res.result);
        this.setData({
          
          numberList:res.result
        })
      },
      fail: (err) => {
        // 失败回调
      },
      compelet: () => {
        // 必然回调
      }
  })
},

  //打开意见反馈页
  showfeedback: function(){
          wx.navigateTo({
            url: '/pages/feedback/feedback',
          })
    }
    
})
