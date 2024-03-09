// pages/PassengerFlowPage/PassengerFlowPage.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '测试下面legend的红色区域不应被裁剪',
      left: 'center'
    },
    legend: {
      data: ['A', 'B', 'C'],
      top: 50,
      left: 'center',
      backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }, {
      name: 'C',
      type: 'line',
      smooth: true,
      data: [10, 30, 31, 50, 40, 20, 10]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
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
       playnum:'30',
       EWT:'20'
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
       playnum:'27',
       EWT:'25'
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
       playnum:'5',
       EWT:'15'
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
       playnum:'1',
       EWT:'5'
     },
     //5
     {
       id: 5,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '5555',
       name:'5555',
       urls:'/images/5.png',
       sigthimg:'/images/Tornadostorm.jpg',
       playnum:'27',
       EWT:'25'
     },
     //6
     {
       id: 6,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '6666',
       name:'6666',
       urls:'/images/6.png',
       sigthimg:'/images/Tornadostorm.jpg',
       playnum:'13',
       EWT:'10'
     },
     //7
     {
       id: 7,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '7777',
       name:'7777',
       urls:'/images/7.png',
       sigthimg:'/images/Tornadostorm.jpg',
       playnum:'17',
       EWT:'20'
     },
     //8
     {
       id: 8,
       iconPath: "/images/location.png",
       latitude: 22.999857,
       longitude: 113.332566,
       width: 30,
       height: 30,
       title: '8888',
       name:'8888',
       urls:'/images/8.png',
       sigthimg:'/images/Tornadostorm.jpg',
       playnum:'5',
       EWT:'10'
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