// pages/home/comunity/index.js
const innerAudioContext = wx.createInnerAudioContext()
Page({
  data: {
    imageArray: [
      {
        id: 1,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/1.jpg?sign=ce47fdedc0ea6a3377b7d9d53652b802&t=1639241402',
        title: '北三楼下的漂亮小猫',
      },
      {
        id: 2,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/2.jpg?sign=3fa4540ec169ccf1911d780d56983f73&t=1639304868',
        title: '新食堂附近刚出生不久的小奶猫'
      },
      {
        id: 3,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/3.jpg?sign=42224401b9f9503d92747ed86a7c8c0a&t=1639304894',
        title: '科研大楼附近霸占大石头的猫猫'
      },
      {
        id: 4,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/4.jpg?sign=9c88a4f84fcc60ef81b4255d0b5b56e7&t=1639304908',
        title: '武川门口公交车站的猫猫'
      },
      {
        id: 5,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/5.jpg?sign=f28b741a9d4bcf06d308a335962d9469&t=1639304921',
        title: '科研大楼附近霸占长椅的猫猫'
      },
      {
        id: 6,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/6.jpg?sign=6f9da4407ad30cfdadeca2ee5ce85081&t=1639304940',
        title: '北三楼下美美享受食物的猫猫'
      },
      {
        id: 7,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/7.jpg?sign=9889583be50b76185f23d5f0280fc0c5&t=1639304959',
        title: '聚众闹事的猫猫'
      },
      {
        id: 8,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/8.jpg?sign=2f0b41e808a5c3b8b9fd0e845c6a4ccd&t=1639304982',
        title: '在三轮车上睡得很熟的猫猫'
      },
      {
        id: 9,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/9.jpg?sign=f05f068021838c9258890e4b0b688a1c&t=1639305073',
        title: '猫猫转头',
      },
      {
        id: 10,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/10.jpg?sign=ea3fdc42a40aeaa3ce857e25f7191925&t=1639305110',
        title: '吃相一致的两只猫猫',
      },
      {
        id: 11,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/11.jpg?sign=795fdd3bebd5e26795e703903bad9496&t=1639306486',
        title: '凑在一起吃东西的两只猫猫',
      },
      {
        id: 12,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/12.jpg?sign=7a9279c28b620ed3aab78552962605e5&t=1639305151',
        title: '你们在看什么呀',
      },
      {
        id: 13,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/13.jpg?sign=9a2c270b64f25ee6c72d939a40b4c92b&t=1639305167',
        title: '图书馆门口的小猫',
      },
      {
        id: 14,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/14.jpg?sign=7fbdf8f8663c9636e3f08f3aa7b7bd77&t=1639305179',
        title: '猫猫观察',
      },
      {
        id: 15,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/15.jpg?sign=689d3bf4d9eb6a1a431b3746ac8fa400&t=1639305197',
        title: '麻烦路过的给孩子掖一下被子',
      },
      {
        id: 16,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/16.jpg?sign=7d02b2fdedee6962fb34602b1284129a&t=1639305214',
        title: '麻烦关一下灯，谢谢',
      },
      {
        id: 17,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/17.jpg?sign=6e09bea07438088526d9c6e64c1ec0ab&t=1639305228',
        title: '哪位善良的人类给我们布置了小窝',
      },
      {
        id: 18,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/18.jpg?sign=7a0190c7ad6acf92de29655e0442f2a8&t=1639305244',
        title: '灰白相间的漂亮小猫',
      },
      {
        id: 19,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/19.jpg?sign=7af72357e676e9aa40659c14b5607c46&t=1639305261',
        title: '情人坡旁晒太阳睡午觉的小猫',
      },
      {
        id: 20,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/20.jpg?sign=55eda92846ff6e04992cf8be7142390d&t=1639305279',
        title: '我是猫大爷',
      },
      {
        id: 21,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/21.jpg?sign=847ead6803b191be9b1becc4092a84d1&t=1639305296',
        title: '内向的小奶猫',
      },
      {
        id: 22,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/22.jpg?sign=d3f25964e65dffe7fb90aa0356df7b03&t=1639305307',
        title: '跑到面包房里睡觉的小猫',
      },
      {
        id: 23,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/23.jpg?sign=cdbd6a254143e21267a9147269dcb6b5&t=1639305323',
        title: '挤作一团的小猫',
      },
      {
        id: 24,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/24.jpg?sign=0806f45762d992dcba5e3a9d5df4f5de&t=1639305339',
        title: '女生宿舍栏杆上的小猫',
      },
      {
        id: 25,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/25.jpg?sign=541fab9880d232f3a3162351d229351f&t=1639305356',
        title: '潜入武川宿舍阳台的小猫',
      },
      {
        id: 26,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/26.jpg?sign=6c570b4df0d25cde18c3a6e833b00581&t=1639305372',
        title: '我是一只会垃圾分类的小猫',
      },
      {
        id: 27,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/27.jpg?sign=fe6e6f4dcb8cb4d2875b777daa464809&t=1639342993',
        title: '身为财大的猫猫怎么不识字呢！',
      },
      {
        id: 28,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/28.jpg?sign=1c47ccad966ead065479e75292657849&t=1639343130',
        title: '艺术中心附近的白猫',
      },
      {
        id: 29,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/29.jpg?sign=ead6d0aef091880075f9ae7478b876b2&t=1639343162',
        title: '我要离你远点',
      },
      {
        id: 30,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/30.jpg?sign=935493be26250acf6302d8312147750f&t=1639343182',
        title: '一只会偷走逗猫棒的小恶猫',
      },
      {
        id: 31,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/31.jpg?sign=9b49f554d0b45463065496bd5a9aba20&t=1639343200',
        title: '喜欢爬上屋顶导致被人以为困在上面的调皮猫',
      },
      {
        id: 32,
        src: 'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/32.jpg?sign=d65017e533fb8a294e2d5203da3bb3b0&t=1639343218',
        title: '猫猫瘫倒',
      },
    ],
    showTopImage: false,
  },
  onPageScroll(event) {
    /* 利用两个条件，防止重复的进行setData操作 */
    if (event.scrollTop > 300 && this.data.showTopImage == false) {
      this.setData({
        showTopImage: true
      })
    } else if (event.scrollTop < 300 && this.data.showTopImage == true) {
      this.setData({
        showTopImage: false
      })
    }
  },
  onShow: function () {
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = 'cloud://cloud1-4g2m2gy52f9dcd1c.636c-cloud1-4g2m2gy52f9dcd1c-1308762687/背景音乐/中山真斗 (なかやま まさと) - 手つかずの感情 (未曾经历的感情) [mqms2].mp3'
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
  onUnload: function () {
    this.audioPause()
  },
  skipTop() {
    /* 返回顶部 */
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
    this.setData({
      showTopImage: false
    });
  },
  onReachBottom: function () {
    let temporaryArray = this.data.imageArray;
    temporaryArray.push(...this.data.imageArray);
    this.setData({
      imageArray: temporaryArray
    })
  },
  toimg: function (e) {
    let imgid = e.currentTarget.dataset['imgid'];
    wx.navigateTo({
      url: 'img/img?imgid='+imgid,
    })
  }
})