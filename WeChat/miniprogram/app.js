// app.js
App({
    onLaunch() {
      if(!wx.cloud){
        console.error('请使用');
      }else{
        wx.cloud.init({
        env:'cloud1-6geub8m2473404ce',
        // env:'cloud1-5gkqj9vh973f44be',
        traceUser:true,
        });
      }
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
  
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    },
    globalData: {
      userInfo: null
    }
  })
  