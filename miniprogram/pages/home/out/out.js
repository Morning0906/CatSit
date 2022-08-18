// pages/home/out/out.js
const app=getApp();
const db=wx.cloud.database();
const eventer = db.collection('Event');
const innerAudioContext = wx.createInnerAudioContext()
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },
    gotoPage_lib(){
      wx.navigateTo({
        url:'lib/lib',
       })
    },
    gotoPage_green:function(){
      wx.navigateTo({
        url:'green/green',
       })
    },
    gotoPage_two:function(){
      wx.navigateTo({
        url:'two/two',
       })
    },
    gotoPage_three:function(){
      wx.navigateTo({
        url:'three/three',
       })
    },
    gotoPage_lake:function(){
      wx.navigateTo({
        url:'lake/lake',
       })
    },
    gotoPage_love:function(){
      wx.navigateTo({
        url:'love/love',
       })
    },
    gotoPage_stop:function(){
      wx.navigateTo({
        url:'stop/stop',
       })
    },
    gotoPage_back:function(){
      wx.navigateTo({
        url:'/pages/home/index/index',
       })
    },
    gotoPage_tips:function(){
      wx.navigateTo({
        url:'/pages/home/out/tip/tip',
       })
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

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      innerAudioContext.autoplay = true
      innerAudioContext.loop = true
      innerAudioContext.src = 'cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/me/头像/Thomas Greenberg - Dream for Today.mp3'
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
      this.audioPause()
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

    }
})