// pages/home/me/me.js
const innerAudioContext = wx.createInnerAudioContext()
const db=wx.cloud.database()
const cat = db.collection("Cat_Info")
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cname:'',
    gold:0,
    hunger:0,
    happy:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cat.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        this.setData({
          hunger:res.data[0].hunger,
          gold:res.data[0].cash,
          happy:res.data[0].happy,      
          cname:res.data[0].cat_name
         })
         console.log(this.data.hunger,this.data.cname)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  founder:function(){
    wx.navigateTo({
      url: '/pages/founder/founder'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/背景音乐/栗コーダーカルテット-帝国のマーチ- ダース・ベイダーのテーマ (帝国进行曲).mp3'
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
  audioPlay: function () {
    innerAudioContext.play()
  },
  audioPause:function(){
    innerAudioContext.pause()
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
  getinfo:function(){
    console.log("按钮正确")
    us.where({
      wxhao:app.globalData.wxhao
    }).get({
      success:res=>{
        console.log(res)

      }
    })
  },
})