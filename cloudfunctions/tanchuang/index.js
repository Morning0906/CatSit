// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env:'cloud1-4g2m2gy52f9dcd1c'
})
const db=cloud.database();
const tc=db.collection('tanchuang');
const _=db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return tc.where({
      all:null
    }).update({
      data:{
        pd1:true,
        pd2:true,
        pd3:true,
        pd4:true,
        pd5:true,
        pd6:true,
        pd7:true
      }
    })
  }catch{
    res=>{
      console.log(res)
    }
  }
}