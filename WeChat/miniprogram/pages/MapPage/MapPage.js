
Page({

  /*页面的初始数据*/
  data: {
    mapId: "mapId",
  },

    //跳转至智能游玩路线页面
    ShowSmartRoutePage: function(){
      wx.navigateTo({
        url: '/pages/SmartRoutePage/SmartRoutePage',
      })
    },

    PurchaseTickets:function(){
      wx.navigateTo({
        url: '/pages/PurchaseTickets/PurchaseTickets',
      })
    },

  /*生命周期函数--监听页面加载*/
  onLoad(options) {
    wx.hideTabBar();
  },

  onLoad: function (options) {
    this.addMarkers();
  },
    //弹窗开关
    open1() {
      this.setData({
        dialog1: true
      });
    },
    close: function() {
      this.setData({
          showDialog: false,
      });
    },
   //添加标记锚点
   addMarkers() {
    const markers = [
     //长隆欢乐世界-急流勇进
   {
      id:0,
      iconPath: "/images/location.png",
      latitude: 22.998121,
      longitude: 113.328454,
      width: 30,  //图片显示宽度
      height: 30,//图片显示高度
      title:'急流勇进',
      name:'急流勇进'
    },
    //长隆欢乐世界-U型滑板
    {
      id: 1,
      iconPath: "/images/location.png",
      latitude: 23.000142,
      longitude: 113.330129,
      width: 30,  
      height: 30,
      title:'U型滑板',
      name:'U型滑板'
    },
    //长隆欢乐世界-自由落体
    {
      id: 2,
      iconPath: "/images/location.png",
      latitude: 22.998259,
      longitude: 113.330523,
      width: 30,
      height: 30,
      title: '自由落体',
      name:'自由落体'
    },
    //长隆欢乐世界-龙卷风暴
    {
      id: 3,
      iconPath: "/images/location.png",
      latitude: 22.999857,
      longitude: 113.332566,
      width: 30,
      height: 30,
      title: '龙卷风暴',
      name:'龙卷风暴'
    }
    ]
    this.setData({
      markers: markers
    })
  },


  // 点击回到原点
  moveTolocation: function () {
    let Id = this.data.mapId
    var mapCtx = wx.createMapContext(Id);
    mapCtx.moveToLocation();
  },



  

})