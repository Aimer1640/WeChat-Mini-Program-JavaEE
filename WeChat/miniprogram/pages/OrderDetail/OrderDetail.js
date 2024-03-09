// pages/OrderDetail/OrderDetail.js
const db = wx.cloud.database()
const _ = db.command
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        var orderId=options.id;
        console.log(orderId)
        db.collection('SubmissionOrder').where({
          _id:orderId
        }).get().then(res=>{
          var order=res.data[0];
        //   sigth.data=new Date(sigth.data).toLocaleDateString();
          this.setData({
            order:order
          })
          console.log(order)
          
        })
    },
    complete:function(options){
        console.log(options);
        var orderId=options.id;
        console.log(orderId)

        var that = this;
        wx.request({
          url: 'http://localhost:8080/work_war_exploded/TeacherModServlet',
          method: 'GET', //请求方式
          data: {
            teano:'333',
             title:"已完成",
             cpp:2,
             teasex:'2',
             salary:2,
             birthday:'2'
            },
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

        db.collection('SubmissionOrder').where({
          _id:orderId
        }).update({
          data:{
            // comment:"!!！"
            step:2,
            status:"已完成"
          },
          success:res=>{
            console.log(res);
            wx.showToast({
              title: '完成订单！',
            })
            // ,
            // wx.navigateBack({
            //     delta: 1,
            //   })
          },
          fail:err=>{
            console.log(err);
            wx.showToast({
              title: '提交失败！',
            })
          }
          
        })
    },

    cancel:function(options){
        console.log(options);
        var orderId=options.id;
        console.log(orderId)
        db.collection('SubmissionOrder').where({
          _id:orderId
        }).remove({
            success:res=>{
              console.log(res);
              wx.showToast({
                title: '删除成功！',
              })
            },
            fail:err=>{
            //   console.log(err);
              wx.showToast({
                title: '不支持退单！',
              })
            //   wx.navigateBack({
            //     delta: 1,
            //   })
            }
            
          })
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})