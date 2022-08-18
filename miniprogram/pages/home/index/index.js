const innerAudioContext = wx.createInnerAudioContext()
const back = wx.getBackgroundAudioManager();
const app=getApp();
const db=wx.cloud.database();
const cinfo=db.collection('Cat_Info');
const _=db.command;
const cl = db.collection('cloth');
Page({
    /**
     * 页面的初始数据
     */
    data: {    
      key:0,
    },
//1、外出接口
    gotoPage_one:function(){
      wx.navigateTo({
        url:'/pages/home/out/out',
      })
    },
//2、小游戏接口
    gotoPage_two:function(){
      wx.navigateTo({
        url:'/pages/home/game/practice_index',
      })
    },
//3、换衣服接口
    gotoPage_three:function(){
      wx.navigateTo({
        url:'/pages/home/cloth/cloth',
      })
    },
//4、吃饭接口
    gotoPage_four:function(){
      wx.navigateTo({
        url:'/pages/home/eat/eat',
      })
    },
//5、我的接口
    gotoPage_five:function(){
      wx.navigateTo({
        url:'/pages/home/me/me',
      })
    },

//6、我的接口
gotoPage_six:function(){
  wx.navigateTo({
    url:'/pages/home/comunity/index',
  })
},
    /**
     * 生命周期函数--监听页面加载
     */
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (options) {
      innerAudioContext.autoplay = true
      innerAudioContext.loop = true
      innerAudioContext.src = 'cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/背景音乐/中山真斗 (なかやま まさと)-ぷわぷわり (轻飘飘).mp3'
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
      cl.where({
      wxhao:app.globalData.wxhao
      }).get({
        success:res=>{
          this.setData({
            key:app.globalData.key
          })
        }
      })
    },
    //7、引导接口
  gotoPage_seven:function(){
    wx.navigateTo({
      url:'/pages/home/guide/guide',
    })
  },
    onLoad: function () {
      cl.where({
        wxhao:_.eq(app.globalData.wxhao)
      }).get().then(res=>{
          var dt=res.data[0]
          this.setData({
              key: dt.key,
      })
      })
      cinfo.where({
        wxhao:app.globalData.wxhao
      }).get({
        success:res=>{
          if(res.data[0].happy<30){
            wx.showModal({
              title: '猫猫心情低落',
              content: '请带你的猫猫出去逛逛吧',
            })
          }
          if(res.data[0].hunger<20){
            wx.showModal({
              title: '猫猫正在挨饿',
              content: '请购买猫粮喂你的猫猫吧',
            })
          }
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