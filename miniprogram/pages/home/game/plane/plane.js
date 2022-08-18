const WxFly = require("./wxplain.js");
const app=getApp();
const img=require("./images.js");
const db=wx.cloud.database();
const cat=db.collection('Cat_Info');
const _=db.command;
Page({
    data: {
        modalHidden: "modal_hide",
        score: '0'
    },
    onLoad: function (options) {
        /*wx.getImageInfo({
          src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/images/images/out2/plane/bg.jpg?sign=0404b615bba7610d8f289b7221f21375&t=1639303121',
        success:res=>{
                img["bg"].src=res.path;
        }
        })*/
    },
    onReady: function () {
        // 页面渲染完成
    },
    startGame: function () {
        const fly = this.fly;
        this.setData({ score: 0, modalHidden: "modal_hide" });
        fly.startGame();
        
    },
    hide:function(){
        var that = this;
        wx.showModal({
            title: '分数',
            content: score,
            cancelText: false,
            success: function (res) {
              if (res.confirm) {
                console.log('确定'),
                that.endGame;
              } 
            }
          })
    },
    endGame: function(){
        wx.redirectTo({
            url: '../practice_index',
          })
    },
    move: function (event) {
        const fly = this.fly;
        var x = event.touches[0].x;
        var y = event.touches[0].y;
        fly.touchmove(x, y);
    },
    click: function () {
        const fly = this.fly;
        fly.touchclick();
    },
    onShow: function () {
        const fly = this.fly = new WxFly(
            {
                ctx: wx.createContext(),
                id: 'plainId',
                height: 750,
                width: 375,
            });
        fly.on('over', packet => {
            this.setData({ score: packet.score, modalHidden: "" });
        });
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        cat.where({
            wxhao:app.globalData.wxhao
        }).update({
            data:{
                cash:_.inc(this.data.score/10)
            }
        })
    }
})