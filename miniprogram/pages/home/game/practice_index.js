const innerAudioContext = wx.createInnerAudioContext()
Page({
  data: {
  },
  gotopage_index:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  
  gotopage_plane:function(){
    wx.navigateTo({
      url: 'plane/plane',
    })
  },

  gotopage_fp:function(){
    wx.navigateTo({
      url: 'catchess/catchess',
    })
  },

  gotopage_bird:function(){
      wx.navigateTo({
        url: 'bird/bird',
      })
  },
  onShow: function () {
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = 'https://636c-cloud1-4g2m2gy52f9dcd1c-1308762687.tcb.qcloud.la/%E8%83%8C%E6%99%AF%E9%9F%B3%E4%B9%90/%E7%99%BE%E7%9F%B3%E5%85%83%20(hyakkoku%20hajime)%20-%20%E7%8C%AA%E7%AA%81%E7%8C%9B%E9%80%B2%20(%E5%8B%87%E5%BE%80%E7%9B%B4%E5%89%8D)%20%5Bmqms2%5D.mp3?sign=843a9d342e93078c4fad61958d838b4b&t=1639402167'
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
  onUnload: function () {
    this.audioPause()
  },
  /**
   * 用户点击右上角分享
   */
  onLoad(){
    
  },
  onShareAppMessage: function () {
  }
});