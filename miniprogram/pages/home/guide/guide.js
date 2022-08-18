const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
Page({

  data: {
    canUseHeight: 0,
    btnHeight: app.globalData.isIPX ? 98 : 64,
  },

  backout:function(
  ){
    wx.navigateBack()
  },

  onLoad: function(options) {
    // 获取不同设备高度，以实现垂直居中
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          canUseHeight: res.windowHeight - this.data.btnHeight
        })
      },
    })
  },


  onCopyWechat: function() {
    wx.setClipboardData({
      data: 'abcmeego',
      success(res) {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
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
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.audioPause()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },
  onShareAppMessage: function() {
    return {
      title: '打工人计算器',
      path: '/pages/index/index',
      imageUrl: '/images/other/share_img.png'
    }
  },


})