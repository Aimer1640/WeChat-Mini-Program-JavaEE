// pages/BusinessHoursPage/BusinessHoursPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad:function(options){
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
       waittime:'09:00-21:00'
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
       waittime:'09:00-21:00'
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
       waittime:'09:00-21:00'
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
       waittime:'10:00-21:00'
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
       waittime:'10:00-21:00'
     },
     ]
     if(wx.getStorageSync('newslist')){
      this.setData({
        markers:wx.getStorageSync('markers'),
        sigth:wx.getStorageSync('markers')
      })
    }else{
      this.setData({
        markers: markers
      })
      wx.setStorageSync('sigth', this.data.markers)
    }
  },
  //跳转对应景点
  toSigth(e){
    console.log(e)
    var sigthId=e.currentTarget.dataset.sigthId;

    console.log(sigthId)
    wx.navigateTo({
      url: '../SigthDetail/SigthDetail?id='+sigthId,
    })

  },
})