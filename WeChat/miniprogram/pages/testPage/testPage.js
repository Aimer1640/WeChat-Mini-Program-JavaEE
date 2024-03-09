// pages/testPage/testPage.js
Page({
  /*页面的初始数据*/
  data: {
    mapId: "mapId",
    showDialog:false,
    polyline: [{
      points: [{
        latitude: 22.998121,
        longitude: 113.328454
        }, {
          latitude: 23.000142,
          longitude: 113.330129
        }, {
          latitude: 22.998259,
          longitude: 113.330523
        },{
          latitude: 22.999857,
          longitude: 113.332566
        }
      ],
      d_name:[{id:0,}],
      color:"rgb(0, 125, 104)",//线条的颜色
      width: 3,//宽度
      arrowLine: true,//是否带箭头
      model:false
    }],
  },
  
  onLoad: function (options) {
    this.addMarkers();
  },
  
   //添加标记锚点
   addMarkers() {
    const markers = [
      //长隆欢乐世界-急流勇进
    {
       id:1,
       iconPath: "/images/location.png",
       latitude: 22.998121,
       longitude: 113.328454,
       width: 30,  //图片显示宽度
       height: 30,//图片显示高度
       title:'急流勇进',
       name:'急流勇进',
       urls:'/images/1.png',
       sigthimg:'/images/SuperSplash.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'09:00-21:00',
       WaittingCustomers:350,
       TotalWaittingTime:20
     },
     //长隆欢乐世界-U型滑板
     {
       id: 2,
       iconPath: "/images/location.png",
       latitude: 23.000142,
       longitude: 113.330129,
       width: 30,  
       height: 30,
       title:'U型滑板',
       name:'U型滑板',
       urls:'/images/2.png',
       sigthimg:'/images/Uskateboard.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'09:00-21:00',
       WaittingCustomers:250,
       TotalWaittingTime:10
     },
     //长隆欢乐世界-自由落体
     {
       id: 3,
       iconPath: "/images/location.png",
       latitude: 22.998259,
       longitude: 113.330523,
       width: 30,
       height: 30,
       title: '自由落体',
       name:'自由落体',
       urls:'/images/3.png',
       sigthimg:'/images/Freefall.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'09:00-21:00',
       WaittingCustomers:150,
       TotalWaittingTime:5
     },
     //长隆欢乐世界-龙卷风暴
     {
       id: 4,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '龙卷风暴',
       name:'龙卷风暴',
       urls:'/images/4.png',
       sigthimg:'/images/Tornadostorm.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'10:00-21:00',
       WaittingCustomers:250,
       TotalWaittingTime:10
     },
     //5
     {
       id: 5,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '旋转木马',
       name:'旋转木马',
       urls:'/images/5.png',
       sigthimg:'/images/Tornadostorm.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'10:00-21:00'
     },
     //6
     {
       id: 6,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '欢乐摩天轮',
       name:'欢乐摩天轮',
       urls:'/images/6.png',
       sigthimg:'/images/Tornadostorm.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'10:00-21:00'
     },
     //7
     {
       id: 7,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '旋转木马',
       name:'旋转木马',
       urls:'/images/7.png',
       sigthimg:'/images/Tornadostorm.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'10:00-21:00'
     },
     //8
     {
       id: 8,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '魔法城堡',
       name:'魔法城堡',
       urls:'/images/8.png',
       sigthimg:'/images/Tornadostorm.jpg',
       imgsUrl: ["/images/SuperSplash.jpg", "/images/Uskateboard.jpg", "/images/Freefall.jpg"],
       waittime:'10:00-21:00',
       WaittingCustomers:250,
       TotalWaittingTime:10
     },
     ]
    this.setData({
      markers: markers
    })
  },
  //弹窗获取景点信息
   handleMarkerTap(e){
    this.setData({
      hidepopup:false
    }),
    console.log(e);
    console.log(e.detail.markerId)

    const marker=this.data.markers.find(item=>item.id==e.detail.markerId);
    console.log(marker)
    marker && this.setData({
      currentMarker:marker,
      showDialog:true
    })
  },

  // 点击回到原点
  moveTolocation: function () {
    let Id = this.data.mapId
    var mapCtx = wx.createMapContext(Id);
    mapCtx.moveToLocation();
  },

  //弹窗开关
  open1() {
    this.setData({
        dialog1: true
    });
  },
  close: function() {
    this.setData({
        dialog1: false,
    });
  },

  ToRoutePage:function(){
    wx.navigateTo({
      url: '/pages/RoutePage/RoutePage',
    })
  },

})