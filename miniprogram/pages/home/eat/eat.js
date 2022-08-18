// pages/eat/eat.js
const innerAudioContext = wx.createInnerAudioContext()
const db=wx.cloud.database()
const us = db.collection("Cat_Info")
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mapurl:'',
    gold:0
  },
  onLoad:function(){
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        this.setData({
          gold:res.data[0].cash,
         })
         console.log(this.data.hunger,this.data.cname)
      }
    })
  },
  audioPlay: function () {
    innerAudioContext.play()
  },
  audioPause:function(){
    innerAudioContext.pause()
  },
  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animated=wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = 'cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/背景音乐/84db1685dde5df9dd120610c1cfeffb9.flac'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    innerAudioContext.onPause(
      () =>{
        console.log('停止播放')
      }
    )
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
    this.audioPause()
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
  ToDetail:function(){
    wx.navigateTo({
      url: '/pages/home/eat/maoliang/maoliang',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  back:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  buyptml:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>10) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+10,
              cash:res.data[0].cash-10
            }
          })
          this.audioPause()
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          this.audioPause()
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
      }
      else{
        this.audioPause()
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  },
  buyyzml:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>10) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+10,
              cash:res.data[0].cash-10
            }
          })
          this.audioPause()
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          this.audioPause()
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
      }
      else{
        this.audioPause()
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  },
  buyxyg:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>10) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+10,
              cash:res.data[0].cash-10
            }
          })
          this.audioPause()
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          this.audioPause()
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
      }
      else{
        this.audioPause()
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  },
  buyhyg:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>10) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+10,
              cash:res.data[0].cash-10
            }
          })
          this.audioPause()
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          this.audioPause()
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
      }
      else{
        this.audioPause()
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  },
  buymt:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>10) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+10,
              cash:res.data[0].cash-10
            }
          })
          this.audioPause()
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          this.audioPause()
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
      }
      else{
        this.audioPause()
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  },
  buytls:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>50) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+100,
              cash:res.data[0].cash-50
            }
          })
          this.audioPause()
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          this.audioPause()
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
              }
      else{
        this.audioPause()
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  }
})