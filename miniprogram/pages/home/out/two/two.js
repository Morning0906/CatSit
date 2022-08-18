// pages/home/out/three/three.js
const app = getApp();
const db = wx.cloud.database();
const tc= db.collection('tanchuang');
const cinfo = db.collection('Cat_Info');
const innerAudioContext = wx.createInnerAudioContext()
const _=db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pd7:false,
  },

  modalCandel: function() {
    // do something
    this.setData({
      pd7:false,
      modalHidden:true
    }),
    cinfo.where({
      wxhao:app.globalData.wxhao
    }).update({
      data:{
        happy:_.inc(5)
      }
    })
  },

modalConfirm: function() {
    // do something
    this.setData({
      modalHidden:true,
      pd7: false
    }),
    cinfo.where({
      wxhao:app.globalData.wxhao
    }).update({
      data:{
        happy:_.inc(5)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.createtext()
      tc.where({
        wxhao:app.globalData.wxhao
      }).get({success:res=>{
        console.log(res.data[0])
        this.setData({
          pd7:res.data[0].pd7
        })
      }
      })
  },


  gettext(){
      this.createtext()
  },

  createtext() {
      let text2 = ''; 
      let text = new Array( '有两位小姐姐逗你玩了一会，你感到很开心。', '在教学楼附近交到了新的猫咪伙伴，跟它玩得很开心。', '你看到了几个男生刚下课，准备去打球，你心想他们可真是不怕冷，产生了敬佩之情。');
      let index = Math.floor(Math.random() * 3);
      text2 = text[index];
      this.setData({
          text2
        })  
      },

      toTestPage: function (e) {
        let testId = e.currentTarget.dataset['testid'];
        if(testId=="004"){
                tc.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if(!res.data[0].js7){
                      wx.showModal({
                        title: '是否购买付费章节',
                        content: '消耗300金币',
                        success: function (res) {
                          if (res.confirm) {
                            console.log('确定')
                            cinfo.where({
                              wxhao:app.globalData.wxhao
                            }).get({
                              success:res=>{
                                if(res.data[0].cash>=300){
                                  cinfo.where({
                                    wxhao:app.globalData.wxhao
                                  }).update({
                                    data:{
                                      cash:_.inc(-300)
                                    }
                                  })
                                  tc.where({
                                    wxhao:app.globalData.wxhao
                                  }).update({
                                    data:{
                                      js7:true
                                    }
                                  })
                                  wx.navigateTo({
                                    url: '../two/test/test?testId='+testId
                                  })
                                }
                                else{
                                  wx.showModal({
                                    content: '金币不够'})
                                }
                              }
                            })
                          } else {
                            console.log('取消')
                    }
                  }
                })
              
            }
            else{wx.navigateTo({
              url: '../two/test/test?testId='+testId
            })}
          }
        })}
      else{
        wx.navigateTo({
          url: '../two/test/test?testId='+testId
        })
      }},

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
    innerAudioContext.src = 'cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/背景音乐/V.A. - キセキ.mp3'
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
    tc.where({
      wxhao:app.globalData.wxhao
    }).update({
      data:{
        pd7:this.data.pd7
      }
    })
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