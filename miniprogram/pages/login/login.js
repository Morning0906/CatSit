// pages/login/login.js
const app = getApp();
const db = wx.cloud.database();
const admin = db.collection('User_Info');
const cl = db.collection('cloth');
Page({
  data: {
  },
btnSub(res){
  var wxhao=res.detail.value.wxhao;
  var mima=res.detail.value.mima;
  console.log(wxhao,mima);
  app.globalData.wxhao=wxhao;
  console.log(app.globalData.wxhao);
  admin.get({
    success:res=>{
      let user=res.data;
      console.log(user);
      var is=false;
      for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
        console.log(user[i]);
        if (wxhao == user[i].wxhao) { //用户名存在
          is=true;
          console.log("号码存在")
          if (mima != user[i].mima) {  //判断密码是否正确
            wx.showToast({
              title: '密码错误！！',
              icon: 'none',
              duration: 2500
            })
            break;
          }
          else{
            cl.where({
              wxhao:app.globalData.wxhao
            }).get({
              success:res=>{
                app.globalData.key=res.data[0].key
                console.log("keyzhi",app.globalData.key)
            }})
            console.log('登陆成功！')
            wx.showToast({
              title: '登陆成功！！',
              icon: 'success',
              duration: 2500
            })
    
            wx.navigateTo({
              url: '/pages/home/index/index',
            })
            break;
          }
        }} 
        if(!is){
          wx.showToast({
              title: '注册成功',
              icon: 'none',
              duration: 2500
            })
            admin.add({
              data:{
                  wxhao:wxhao,
                  mima:mima
              }
          }).then(
              res=>{
                  console.log("添加成功",res)
              }
          )
          wx.navigateTo({
            url: '/pages/welcome/welcome',
          })
        }
      }
    })
  }
})
