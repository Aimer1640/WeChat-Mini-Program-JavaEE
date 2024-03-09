// pages/SigthDetail/SigthDetail.js
const db=wx.cloud.database();
const _ =db.command;
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    onLoad(options){
        console.log(options);
        var sigthId=options.id;
        console.log(sigthId)
        db.collection('sigth').where({
          id:sigthId
        }).get().then(res=>{
          var sigth=res.data[0];
        //   sigth.data=new Date(sigth.data).toLocaleDateString();
          this.setData({
            sigth:sigth
          })
          wx.setNavigationBarTitle({
            title: this.data.sigth.title,
          })
        })
    },


    
})