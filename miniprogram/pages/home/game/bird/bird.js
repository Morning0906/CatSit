const wxBird = require('./wxbird.js');
const app=getApp();
const db=wx.cloud.database();
const cat=db.collection('Cat_Info');
const _=db.command;
Page({
    data: {
        modalHidden: true,
        score: '0'
    },
    onLoad: function (options) {
    },
    onReady: function () {
    },
    onTouchStart: function (e) {
        const {identifier, x, y } = e.touches[0];
        this.movements = [[x, y], [0, 0]];
    },
    onTouchMove: function (e) {
        const {identifier, x, y } = e.touches[0];
        this.movements[1] = [x, y];
    },
    onTouchEnd: function () {
        var x = this.movements[1][0] - this.movements[0][0];
        var y = this.movements[1][1] - this.movements[0][1];
        if ((Math.abs(x) < Math.abs(y)) && y < 0) {
            this.bird.keyup();
        }
    },
    startGame: function () {
        const bird = this.bird
        this.setData({ score: 0, modalHidden: true });
        bird.startGame();
    },
    endGame: function(){
        wx.navigateBack()
    },
    score:function(){
        var that = this;
        wx.showModal({
            title: '分数',
            showCancel:'false',
            content:that.data.score,
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.endGame();
              } 
            }
          })
    },
    onShow: function () {

        const bird = this.bird = new wxBird(
            {
                ctx: wx.createContext(),
                id: 'birdId',
                height: 1624,
                width: 375,
            }
        );
        bird.on('over', packet => {
            this.setData({ score: packet.score, modalHidden: false });
            this.score();
        });
        bird.startGame();
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        cat.where({
            wxhao:app.globalData.wxhao
        }).update({
            data:{
                cash:_.inc(this.data.score*10)
            }
        })
    }
})