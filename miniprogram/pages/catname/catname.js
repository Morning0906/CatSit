// pages/catname/catname.js
let app = getApp();
const db = wx.cloud.database();
const cl=db.collection('cloth');
const catname=db.collection('catname');
const tc=db.collection('tanchuang');
function randomRange(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;}
Page({
    data: {
        randname:""
    },
    input(e){
        this.setData({
            randname:e.detail.value
        })
    },
    rand(){
       var num= randomRange(1,10);
       catname.where({
           ID:num
       }).get({
           success:res=>{
               this.setData({
                randname:res.data[0].name
               })
           }
       })
},
    bdsmit(res){
        var mizi=res.detail.value.name;
        db.collection('Cat_Info').add({
            data:{
                wxhao:app.globalData.wxhao,
                happy:80,
                hunger:100,
                cat_name:mizi,
                cash:300
            }
        })
        cl.add({
            data:{
                key: 0,
        isbuy1:1,
        isbuy2:1,
        isbuy3:1,
        isbuy4:1,
        isbuy5:1,
        isbuy6:1,
        buybtn1:false,
        put1: false,
        buybtn2:false,
        put2:false,
        buybtn3:false,
        put3:false,
        buybtn4:false,
        put4: false,
        buybtn5:false,
        put5:false,
        buybtn6:false,
        put6:false,
        wxhao:app.globalData.wxhao
            }
        })
        tc.add({
            data:{
        wxhao:app.globalData.wxhao,
        pd1:true,
        pd2:true,
        pd3:true,
        pd4:true,
        pd5:true,
        pd6:true,
        pd7:true,
        js1:false,
        js2:false,
        js3:false,
        js4:false,
        js5:false,
        js6:false,
        js7:false
            }
        })

        wx.navigateTo({
            url: '/pages/home/index/index',
          })
    },
    onLoad: function (options) {
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
})