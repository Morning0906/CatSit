const app= getApp();
const db = wx.cloud.database();
const cl = db.collection('cloth');
const us = db.collection("Cat_Info")
const innerAudioContext = wx.createInnerAudioContext()
const _=db.command;
Page({
    data: {
        key:0,
        isbuy1: 0,
        isbuy2: 0,
        isbuy3: 0,
        isbuy4: 0,
        isbuy5: 0,
        isbuy6: 0,
        isbuybutton1: false,
        isputonbutton1: false,
        isbuybutton2: false,
        isputonbutton2: false,
        isbuybutton3: false,
        isputonbutton3: false,
        isbuybutton4: false,
        isputonbutton4: false,
        isbuybutton5: false,
        isputonbutton5: false,
        isbuybutton6: false,
        isputonbutton6: false,
        score: '',
    },
    clear:function(){
        this.setData({
            key:0
        });
    },
    goto_index:function(){
        wx.navigateBack()
    },
    onShow: function (options) {
      innerAudioContext.autoplay = true
      innerAudioContext.loop = true
      innerAudioContext.src = "cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/背景音乐/PAX JAPONICA GROOVE - So Long, Days.mp3"
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
 //购买1
    buybutton1:function(){
      this.setData({
        isbuybutton1: true
    });
        var that = this;
        wx.showModal({
            title: '是否购买',
            content: '消耗300金币',
            success: function (res) {
              if (res.confirm) {
                us.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if (res.data[0].cash>=300) {
                      that.buy1();
                      us.where({
                        wxhao:app.globalData.wxhao
                      }).update({
                        data:{
                          cash:_.inc(-300)
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
                      this.ba1();
                    }
                  }
                })
              } else {
                console.log('取消')
                that.back1();
              }
            }
          })
    },
    putonbutton1:function(){
        this.setData({
            isputonbutton1: true
        });
        var that = this;
        wx.showModal({
            title: '是否穿上',
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.putoncloth1();
              } else {
                console.log('取消')
                that.back1();
              }
            }
          })
    },
    ba1:function(){
      this.setData({
        isbuy1:0
      })
    },
    back1:function(){
        this.setData({
            isbuybutton1: false,
            isputonbutton1: false
        });
    },
    buy1:function(){
        this.setData({
            isbuybutton1: false,
            isbuy1: 1,
        });
        var s = this.score;
        s = s-300;
        return s;
    },
    putoncloth1:function(){
        this.setData({
            key: 1,
            isputonbutton1: false
        });
    },

    //购买2
    buybutton2:function(){
        this.setData({
            isbuybutton2: true
        });
        var that = this;
        wx.showModal({
            title: '是否购买',
            content: '消耗300金币',
            success: function (res) {
              if (res.confirm) {
                us.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if (res.data[0].cash>=300) {
                      that.buy2();
                      us.where({
                        wxhao:app.globalData.wxhao
                      }).update({
                        data:{
                          cash:_.inc(-300)
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
                      this.ba2();
                    }
                  }
                })
                console.log('确定')
              } else {
                console.log('取消')
                that.back2();
              }
            }
          })
    },
    putonbutton2:function(){
        this.setData({
            isputonbutton2: true
        });
        var that = this;
        wx.showModal({
            title: '是否穿上',
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.putoncloth2();
              } else {
                console.log('取消')
                that.back2();
              }
            }
          })
    },
    ba2:function(){
      this.setData({
        isbuy2:0
      })
    },
    back2:function(){
        this.setData({
            isbuybutton2: false,
            isputonbutton2: false
        });
    },
    buy2:function(){
        this.setData({
            isbuybutton2: false,
            isbuy2: 1
        });
    },
    putoncloth2:function(){
        this.setData({
            key: 2,
            isputonbutton2: false
        });
    },

    //购买3
    buybutton3:function(){
        this.setData({
            isbuybutton3: true
        });
        var that = this;
        wx.showModal({
            title: '是否购买',
            content: '消耗300金币',
            success: function (res) {
              if (res.confirm) {
                us.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if (res.data[0].cash>=300) {
                      that.buy3();
                      us.where({
                        wxhao:app.globalData.wxhao
                      }).update({
                        data:{
                          cash:_.inc(-300)
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
                      this.ba3();
                    }
                  }
                })
                console.log('确定')
              }  else {
                console.log('取消')
                that.back3();
              }
            }
          })
    },
    putonbutton3:function(){
        this.setData({
            isputonbutton3: true
        });
        var that = this;
        wx.showModal({
            title: '是否穿上',
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.putoncloth3();
              } else {
                console.log('取消')
                that.back3();
              }
            }
          })
    },
    ba3:function(){
      this.setData({
        isbuy3:0
      })
    },
    back3:function(){
        this.setData({
            isbuybutton3: false,
            isputonbutton3: false
        });
    },
    buy3:function(){
        this.setData({
            isbuybutton3: false,
            isbuy3: 1
        });
    },
    putoncloth3:function(){
        this.setData({
            key: 3,
            isputonbutton3: false
        });
    },

    //购买4
    buybutton4:function(){
        this.setData({
            isbuybutton4: true
        });
        var that = this;
        wx.showModal({
            title: '是否购买',
            content: '消耗300金币',
            success: function (res) {
              if (res.confirm) {
                us.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if (res.data[0].cash>=300) {
                      that.buy4();
                      us.where({
                        wxhao:app.globalData.wxhao
                      }).update({
                        data:{
                          cash:_.inc(-300)
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
                      this.ba4();
                    }
                  }
                })
                console.log('确定')
              }  else {
                console.log('取消')
                that.back4();
              }
            }
          })
    },
    putonbutton4:function(){
        this.setData({
            isputonbutton4: true
        });
        var that = this;
        wx.showModal({
            title: '是否穿上',
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.putoncloth4();
              } else {
                console.log('取消')
                that.back4();
              }
            }
          })
    },
    ba4:function(){
      this.setData({
        isbuy4:0
      })
    },
    back4:function(){
        this.setData({
            isbuybutton4: false,
            isputonbutton4: false
        });
    },
    buy4:function(){
        this.setData({
            isbuybutton4: false,
            isbuy4: 1
        });
    },
    putoncloth4:function(){
        this.setData({
            key: 4,
            isputonbutton4: false
        });
    },

    //购买5
    buybutton5:function(){
        this.setData({
            isbuybutton5: true
        });
        var that = this;
        wx.showModal({
            title: '是否购买',
            content: '消耗300金币',
            success: function (res) {
              if (res.confirm) {
                us.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if (res.data[0].cash>=300) {
                      that.buy5();
                      us.where({
                        wxhao:app.globalData.wxhao
                      }).update({
                        data:{
                          cash:_.inc(-300)
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
                      this.ba5();
                    }
                  }
                })
                console.log('确定')
              }  else {
                console.log('取消')
                that.back5();
              }
            }
          })
    },
    putonbutton5:function(){
        this.setData({
            isputonbutton5: true
        });
        var that = this;
        wx.showModal({
            title: '是否穿上',
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.putoncloth5();
              } else {
                console.log('取消')
                that.back5();
              }
            }
          })
    },
    ba5:function(){
      this.setData({
        isbuy5:0
      })
    },
    back5:function(){
        this.setData({
            isbuybutton5: false,
            isputonbutton5: false
        });
    },
    buy5:function(){
        this.setData({
            isbuybutton5: false,
            isbuy5: 1
        });
    },
    putoncloth5:function(){
        this.setData({
            key: 5,
            isputonbutton5: false
        });
    },

    //购买6
    buybutton6:function(){
        this.setData({
            isbuybutton6: true
        });
        var that = this;
        wx.showModal({
            title: '是否购买',
            content: '消耗300金币',
            success: function (res) {
              if (res.confirm) {
                us.where({
                  wxhao:app.globalData.wxhao
                }).get({
                  success:res=>{
                    if (res.data[0].cash>=300) {
                      that.buy6();
                      us.where({
                        wxhao:app.globalData.wxhao
                      }).update({
                        data:{
                          cash:_.inc(-300)
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
                      this.ba6();
                    }
                  }
                })
                console.log('确定')
              } else {
                console.log('取消')
                that.back6();
              }
            }
          })
    },
    putonbutton6:function(){
        this.setData({
            isputonbutton6: true
        });
        var that = this;
        wx.showModal({
            title: '是否穿上',
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.putoncloth6();
              } else {
                console.log('取消')
                that.back6();
              }
            }
          })
    },
    ba6:function(){
      this.setData({
        isbuy6:0
      })
    },
    back6:function(){
        this.setData({
            isbuybutton6: false,
            isputonbutton6: false
        });
    },
    buy6:function(){
        this.setData({
            isbuybutton6: false,
            isbuy6: 1
        });
    },
    putoncloth6:function(){
        this.setData({
            key: 6,
            isputonbutton6: false
        });
    },

    onLoad: function (options) {
        cl.get({
            success:res=>{
                var dt=res.data[0]
                this.setData({
                    key: dt.key,
        isbuy1: dt.isbuy1,
        isbuy2: dt.isbuy2,
        isbuy3: dt.isbuy3,
        isbuy4: dt.isbuy4,
        isbuy5: dt.isbuy5,
        isbuy6: dt.isbuy6,
        isbuybutton1: dt.buybtn1,
        isputonbutton1: dt.put1,
        isbuybutton2: dt.buybtn2,
        isputonbutton2: dt.put2,
        isbuybutton3: dt.buybtn3,
        isputonbutton3: dt.put3,
        isbuybutton4: dt.buybtn4,
        isputonbutton4: dt.put4,
        isbuybutton5: dt.buybtn5,
        isputonbutton5: dt.put5,
        isbuybutton6: dt.buybtn6,
        isputonbutton6: dt.put6
                })
            }
        })
    },

    onUnload:function(){
      this.audioPause()
        cl.where({
            wxhao:app.globalData.wxhao
        }).update({
            data:{
            key: this.data.key,
            isbuy1: this.data.isbuy1,
        isbuy2: this.data.isbuy2,
        isbuy3: this.data.isbuy3,
        isbuy4: this.data.isbuy4,
        isbuy5: this.data.isbuy5,
        isbuy6: this.data.isbuy6,
        buybtn1: this.data.isbuybutton1,
        put1: this.data.isputonbutton1,
        buybtn2:this.data.isbuybutton2,
        put2:this.data.isputonbutton2,
        buybtn3:this.data.isbuybutton3,
        put3:this.data.isputonbutton3,
        buybtn4:this.data.isbuybutton4,
        put4: this.data.isputonbutton4,
        buybtn5:this.data.isbuybutton5,
        put5:this.data.isputonbutton5,
        buybtn6:this.data.isbuybutton6,
        put6:this.data.isputonbutton6
        }
    })
        app.globalData.key=this.data.key
    }
})