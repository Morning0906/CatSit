// pages/home/eat/ptml/ptml.js
const innerAudioContext = wx.createInnerAudioContext()
const db=wx.cloud.database()
const us = db.collection("Cat_Info")
const app=getApp();
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animated=wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })
  },
  rotate: function () {
    this.animated.rotate(Math.random()*1800-900).step()
    this.setData({
      animated:this.animated.export()
    })
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

  },
  buy:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)
        console.log("剩余元",res.data[0].cash)
        if (res.data[0].hunger<100){
        if (res.data[0].cash>30) {
          console.log("剩余元",res.data[0].cash)
          us.where({
            wxhao:app.globalData.wxhao
          }).update({
            data:{
              hunger:res.data[0].hunger+50,
              cash:res.data[0].cash-30
            }
          })
          wx.showToast({
            title: '购买成功！',
            icon: 'success',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
        else{
          wx.showToast({
            title: '钱不够啦！',
            icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
            duration: 2000,      //停留时间
          })
        }
      }
      else{
        wx.showToast({
          title: '猫猫已经饱啦！',
          icon:'error',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
          duration: 2000,      //停留时间
        })
      }
      }
    })
  },
  back:function(){
    wx.navigateBack({
      delta: 1
    })
  }
})