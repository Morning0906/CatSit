//index.js
//获取应用实例
const app = getApp();
var chess = require('./chess.js');
var Chessman = chess.Chessman;
var ChessmanState = chess.ChessmanState;
var Tile = chess.Tile;
var Performance = chess.Performance;
var GameManager = require('./GameManager.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      chessboard: [],
      player1: null,
      player2: null,
      currentPlayer: null,
      message: "",
      over: false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: './logs/logs'
    })
  },
  onLoad: function () {
      this.GameManager = new GameManager();

      this.setData({
          chessboard: this.GameManager.setup(),
          player1: this.GameManager.player1,
          player2: this.GameManager.player2,
          currentPlayer: this.GameManager.getCurrentPlayer(),
          message: "请玩家1开始"
      });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


    startGame: function (e) {
        this.setData({
            chessboard: this.GameManager.setup(),
            player1: this.GameManager.player1,
            player2: this.GameManager.player2,
            currentPlayer: this.GameManager.getCurrentPlayer(),
            message: "请玩家1开始"
        });
    },

    endGame:function(){
      wx.redirectTo({
        url: '../practice_index',
      })

    },

    gameOver:function(){
      this.setData({
        over: true
      });
    },

    choose: function (e) {
      console.log("-----------------------------");
        this.setData({
            message: ""
        });

      var location = e.currentTarget.dataset.location;
      var chessman = this.GameManager.getChessman(location);
      //如果点击的位置有棋子
      if (this.GameManager.existChessman(location)) {
          if (this.GameManager.existChoose()) {
              //已经选择一个棋子，又选择棋子时，走到这里

              if (!chessman.isFree()) {//选中的这个棋子还没有翻开
                  this.setData({
                      message: "牌没有翻开!"
                  });
                  return;
              }

              if (chessman.isChoose()) {
                  this.GameManager.cancelChooseChessman(location);

                  this.setData({
                      chessboard: this.GameManager.chessboard
                  })
              } else {
                  if (this.GameManager.eat(location)) {
                      this.setData({
                          chessboard: this.GameManager.chessboard,
                          player1: this.GameManager.player1,
                          player2: this.GameManager.player2,
                          currentPlayer: this.GameManager.getCurrentPlayer()
                      })
                  } else {
                      this.setData({
                          message: this.GameManager.message
                      })
                  }
              }
          } else {
              //没有任何棋子处于选择状态，用户选择棋子时，走到这里

              if (chessman.isClosed()) {//将要执行翻开操作
                  var playerChanged = this.GameManager.openChessman(location);
                  if (playerChanged) {
                      this.setData({
                          chessboard: this.GameManager.chessboard,
                          player1: this.GameManager.player1,
                          player2: this.GameManager.player2,
                          currentPlayer: this.GameManager.getCurrentPlayer()
                      })
                  } else {
                      this.setData({
                          chessboard: this.GameManager.chessboard,
                          currentPlayer: this.GameManager.getCurrentPlayer()
                      })
                  }
              } else if (chessman.isOpen()) {//选择棋子
                  this.GameManager.chooseChessman(location);

                  this.setData({
                      chessboard: this.GameManager.chessboard,
                      message: this.GameManager.message
                  })
              } else if (chessman.isChoose()) {//棋子处于选择状态时，不会走到这里

              } else if (chessman.isDead()) {

              }
          }

      } else {// 没有棋子不会进到这里

      }
        console.log("位置：" + location[0] + "-" + location[1]);
        console.log("状态：" + chessman.state);
        console.log("显示状态：" + chessman.show);
    },

    move: function (e) {
        this.setData({
            message: ""
        });

      var location = e.currentTarget.dataset.location;
        console.log("棋盘-位置：" + location[0] + "-" + location[1]);
        if (this.GameManager.existChoose()) {
            console.log("上个-位置：" + this.GameManager.lastChoose[0] + "-" + this.GameManager.lastChoose[1]);
            this.GameManager.moveTo(location);
            this.setData({
                chessboard: this.GameManager.chessboard,
                currentPlayer: this.GameManager.getCurrentPlayer()
            })
        } else {
            this.setData({
                message: this.GameManager.message
            })
        }
    }
})
