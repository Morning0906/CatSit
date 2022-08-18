
const imageSrc = "../../../../images/plane/";  //图片url前缀

var gameImg = {
    "bg": {
        "src": imageSrc + "bg.png",
        "width": 375,
        "height": 812   
    },
    "loading1": {
        "src": imageSrc + "loading1.png",
        "width": 157,
        "height": 52
    },
    "loading2": {
        "src": imageSrc + "loading2.png",
        "width": 157,
        "height": 52
    },
    "loading3": {
        "src": imageSrc + "loading3.png",
        "width": 157,
        "height": 52
    },
    "logo": {
        "src": imageSrc + "logo.png",
        "width": 367,
        "height": 117
    },
    "bomb": {
        "src": imageSrc + "bomb.png",
        "width": 67,
        "height": 68
    },
    "cartridge": {
        "src": imageSrc + "cartridge.png",
        "width": 22,
        "height": 22
    },
    "cartridge_power": {
        "src": imageSrc + "cartridge_power.png",
        "width": 22,
        "height": 22
    },
    "die1": {
        "src": imageSrc + "die1.png",
        "width": 48,
        "height": 48
    },
    "die2": {
        "src": imageSrc + "die3.png",
        "width": 58,
        "height": 58
    },
    "me": {
        "src": imageSrc + "me.png",
        "width": 98,
        "height": 137
    },
    "me_2": {
        "src": imageSrc + "me_2.png",
        "width": 98,
        "height": 122
    },
    "me_die1": {
        "src": imageSrc + "me_die1.png",
        "width": 98,
        "height": 137
    },
    "me_die2": {
        "src": imageSrc + "me_die2.png",
        "width": 98,
        "height": 137
    },
    "me_die3": {
        "src": imageSrc + "me_die3.png",
        "width": 97,
        "height": 137
    },
    "me_die4": {
        "src": imageSrc + "me_die4.png",
        "width": 98,
        "height": 137
    },
    "plain1": {
        "src": imageSrc + "plain1.png",
        "width": 44,
        "height": 50
    },
    "plain1_die1": {
        "src": imageSrc + "plain1_die1.png",
        "width": 44,
        "height": 50
    },
    "plain1_die2": {
        "src": imageSrc + "plain1_die2.png",
        "width": 44,
        "height": 50
    },
    "plain1_die3": {
        "src": imageSrc + "plain1_die3.png",
        "width": 44,
        "height": 50
    },
    "plain2": {
        "src": imageSrc + "plain2.png",
        "width": 82,
        "height": 93
    },
    "plain2_die1": {
        "src": imageSrc + "plain2_die1.png",
        "width": 82,
        "height": 93
    },
    "plain2_die2": {
        "src": imageSrc + "plain2_die2.png",
        "width": 82,
        "height": 93
    },
    "plain2_die3": {
        "src": imageSrc + "plain2_die3.png",
        "width": 82,
        "height": 93
    },
    "plain2_die4": {
        "src": imageSrc + "plain2_die4.png",
        "width": 82,
        "height": 93
    },
    "plain2_hurt": {
        "src": imageSrc + "plain2_hurt.png",
        "width": 78,
        "height": 95
    },
    "plain3": {
        "src": imageSrc + "plain3.png",
        "width": 100,
        "height": 100
    },
    "plain3_2": {
        "src": imageSrc + "plain3_2.png",
        "width": 100,
        "height": 100
    },
    "plain3_die1": {
        "src": imageSrc + "plain3_die1.png",
        "width": 100,
        "height": 100
    },
    "plain3_die2": {
        "src": imageSrc + "plain3_die2.png",
        "width": 100,
        "height": 100
    },
    "plain3_die3": {
        "src": imageSrc + "plain3_die3.png",
        "width": 100,
        "height": 100
    },
    "plain3_die4": {
        "src": imageSrc + "plain3_die4.png",
        "width": 99,
        "height": 100
    },
    "plain3_die5": {
        "src": imageSrc + "plain3_die5.png",
        "width": 100,
        "height": 100
    },
    "plain3_die6": {
        "src": imageSrc + "plain3_die6.png",
        "width": 96,
        "height": 124
    },
    "plain3_hurt": {
        "src": imageSrc + "plain3_hurt.png",
        "width": 100,
        "height": 100
    },
    "prop1": {
        "src": imageSrc + "prop1.png",
        "width": 75,
        "height": 98
    },
    "prop2": {
        "src": imageSrc + "prop2.png",
        "width": 85,
        "height": 101
    }}
module.exports = gameImg;

//const imageSrc = "../../../../images/out2/plane/";  //图片url前缀
/*function path(a){
    wx.getImageInfo({
      src: a,
      success:function(res){
          return res.path
      },
      fail:function(res){
          console.log(res)
      }
    });
}*/
/*var gameImg = {
    "bg": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/bg.PNG?sign=ee8c68537685b3d0e18c7e9b5076d2ce&t=1639344847",
        "width": 375,
        "height": 812 
    },
    "loading1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/loading1.PNG?sign=bbe9d9bbe4e384cff9ee335e18e8ffeb&t=1639344864",
        "width": 157,
        "height": 52
    },
    "loading2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/loading2.PNG?sign=2ebb8a954d7785b87355f161e89372b9&t=1639344875",
        "width": 157,
        "height": 52
    },
    "loading3": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/loading3.PNG?sign=b9c6aaeb11b8b31d85dfb4dd231d0187&t=1639344885",
        "width": 157,
        "height": 52
    },
    "logo": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/logo.PNG?sign=f485c2339037b535d00e9aa45151d477&t=1639344898",
        "width": 367,
        "height": 117
    },
    "bomb": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/bomb.PNG?sign=6346ab73146c9f80b8e6962b1dcef692&t=1639344916s",
        "width": 67,
        "height": 68
    },
    "cartridge": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/cartridge.PNG?sign=caf8923a35f52b39d3ad4bf0e8b0db47&t=1639344982",
        "width": 22,
        "height": 22
    },
    "cartridge_power": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/cartridge_power.PNG?sign=9756f0bb056d5b94400202e46ce74da1&t=1639344996",
        "width": 24,
        "height": 24
    },
    "die1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/die1.PNG?sign=41108a17cb4484d6eee08caba55c6c22&t=1639345007",
        "width": 48,
        "height": 48
    },
    "die2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/die2.PNG?sign=7013790e2f985f5418855779eeecad01&t=1639345017",
        "width": 58,
        "height": 58
    },
    "me": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/me.PNG?sign=595dd759ef198c3f468904b94199e881&t=1639345032",
        "width": 78,
        "height": 110
    },
    "me_2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/me_2.PNG?sign=1e6d65eb12a0e8657117a17560a6cf17&t=1639345047",
        "width": 78,
        "height": 110
    },
    "me_die1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/me_die1.PNG?sign=e5c7d617ce49ca4f348df13cb9319bc6&t=1639345057",
        "width": 78,
        "height": 110
    },
    "me_die2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/me_die2.PNG?sign=0d79ec54de794930694ae6446913edee&t=1639345071",
        "width": 78,
        "height": 110
    },
    "me_die3": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/me_die3.PNG?sign=fbfed59743bbce9a05d02472f9565bfc&t=1639345148",
        "width": 78,
        "height": 110
    },
    "me_die4": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/me_die4.PNG?sign=c89fcb400bd864b6eca95929d2325a1b&t=1639345160",
        "width": 78,
        "height": 110
    },
    "plain1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain1.PNG?sign=342932a7660f65b49db9f63b6356d969&t=1639345172",
        "width": 55,
        "height": 63 
    },
    "plain1_die1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain1_die1.PNG?sign=92802ee3f01ca6f50ca3f070c2701f35&t=1639345184",
        "width": 55,
        "height": 63
    },
    "plain1_die2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain1_die2.PNG?sign=a4638017dda2d05e8d8203d6d9339923&t=1639345195",
        "width": 55,
        "height": 63
    },
    "plain1_die3": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain1_die3.png?sign=ce13b5dab980dd821c7c6f292fe46d14&t=1639345209",
        "width": 59,
        "height": 36
    },
    "plain2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain2.PNG?sign=567ba4205e8ef969f100efb4812580f1&t=1639345225",
        "width": 82,
        "height": 93
    },
    "plain2_die1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain2_die1.PNG?sign=9f5f7bf922aa68230146c8c37f316761&t=1639345236",
        "width": 82,
        "height": 93
    },
    "plain2_die2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain2_die2.PNG?sign=927361dcd616fc2f57305ff099064f5c&t=1639345248",
        "width": 82,
        "height": 93
    },
    "plain2_die3": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain2_die3.PNG?sign=975ad9c414d578f3bb2387765ca4223b&t=1639345260",
        "width": 82,
        "height": 93
    },
    "plain2_die4": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain2_die4.png?sign=b5b970a08a9e5248e48d63421d9685a9&t=1639345274",
        "width": 82,
        "height": 93
    },
    "plain2_hurt": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain2_hurt.PNG?sign=270e2f374dc589dacd5b87cf73f8577e&t=1639345291",
        "width": 78,
        "height": 95
    },
    "plain3": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3.PNG?sign=8b34ca7773721ada1040870f6e2adeae&t=1639345303",
        "width": 100,
        "height": 100
    },
    "plain3_2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_2.PNG?sign=cbf975b07a6c2219d58141b2178c111e&t=1639345315",
        "width": 100,
        "height": 100
    },
    "plain3_die1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_die1.PNG?sign=10ed5a5c4d41283aa5da5e087a67d70c&t=1639345335",
        "width": 100,
        "height": 100
    },
    "plain3_die2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_die2.PNG?sign=c9ccc41d30279a91d816c42f726bce82&t=1639345347",
        "width": 100,
        "height": 100
    },
    "plain3_die3": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_die3.PNG?sign=40c221ee185f980da32b1cc563db369a&t=1639345359",
        "width": 100,
        "height": 100
    },
    "plain3_die4": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_die4.PNG?sign=8ec3b6a965270e20a8ab90a5c20f7e9a&t=1639345371",
        "width": 99,
        "height": 100
    },
    "plain3_die5": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_die5.PNG?sign=4da4a249050b604c0129002a33790239&t=1639345387",
        "width": 100,
        "height": 100
    },
    "plain3_die6": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_die6.png?sign=61a38644744cd76c1621be73842990ca&t=1639345398",
        "width": 96,
        "height": 124
    },
    "plain3_hurt": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/plain3_hurt.PNG?sign=79ad28ebae97363e1f435db81eff8492&t=1639345409",
        "width": 100,
        "height": 100
    },
    "prop1": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/prop1.PNG?sign=ed510bfe84cc3bce067a51e2e0358b12&t=1639345419",
        "width": 75,
        "height": 98
    },
    "prop2": {
        "src": "https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/game/plane/prop1.PNG?sign=ed510bfe84cc3bce067a51e2e0358b12&t=1639345419",
        "width": 85,
        "height": 101
    }}
module.exports = gameImg;*/