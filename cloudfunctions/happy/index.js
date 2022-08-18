// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init({
  env:'cloud1-4g2m2gy52f9dcd1c'
})
const db=cloud.database();
const cinfo=db.collection('Cat_Info');
const _=db.command;
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return cinfo.where({
      happy:_.gt(2)
    }).update({
      data:{
        happy:_.inc(-1)
      }
    })
  }catch{
    res=>{
      console.log(res)
    }
  }
}