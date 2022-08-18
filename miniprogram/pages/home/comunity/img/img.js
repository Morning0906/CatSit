// pages/home/out/lake/test/test.js
var app = getApp();
var questionList = {
  "1": [
      {
        "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/1.jpg?sign=ce47fdedc0ea6a3377b7d9d53652b802&t=1639241402',
      },
  ],
  "2": [
    {
      "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/2.jpg?sign=3fa4540ec169ccf1911d780d56983f73&t=1639304868',
    },
],
"3": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/3.jpg?sign=42224401b9f9503d92747ed86a7c8c0a&t=1639304894',
  },
],
"4": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/4.jpg?sign=9c88a4f84fcc60ef81b4255d0b5b56e7&t=1639304908',
  },
],
"5": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/5.jpg?sign=f28b741a9d4bcf06d308a335962d9469&t=1639304921',
  },
],
"6": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/6.jpg?sign=6f9da4407ad30cfdadeca2ee5ce85081&t=1639304940',
  },
],
"7": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/7.jpg?sign=9889583be50b76185f23d5f0280fc0c5&t=1639304959',
  },
],
"8": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/8.jpg?sign=2f0b41e808a5c3b8b9fd0e845c6a4ccd&t=1639304982',
  },
],
"9": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/9.jpg?sign=f05f068021838c9258890e4b0b688a1c&t=1639305073',
  },
],
"10": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/10.jpg?sign=ea3fdc42a40aeaa3ce857e25f7191925&t=1639305110',
  },
],
"11": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/12.jpg?sign=8a0782a9f1cdbc4d266e84e67353af81&t=1639305125',
  },
],
"12": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/12.jpg?sign=7a9279c28b620ed3aab78552962605e5&t=1639305151',
  },
],
"13": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/13.jpg?sign=9a2c270b64f25ee6c72d939a40b4c92b&t=1639305167',
  },
],
"14": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/14.jpg?sign=7fbdf8f8663c9636e3f08f3aa7b7bd77&t=1639305179',
  },
],
"15": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/15.jpg?sign=689d3bf4d9eb6a1a431b3746ac8fa400&t=1639305197',
  },
],
"16": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/16.jpg?sign=7d02b2fdedee6962fb34602b1284129a&t=1639305214',
  },
],
"17": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/17.jpg?sign=6e09bea07438088526d9c6e64c1ec0ab&t=1639305228',
  },
],
"18": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/18.jpg?sign=7a0190c7ad6acf92de29655e0442f2a8&t=1639305244',
  },
],
"19": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/19.jpg?sign=7af72357e676e9aa40659c14b5607c46&t=1639305261',
  },
],
"20": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/20.jpg?sign=55eda92846ff6e04992cf8be7142390d&t=1639305279',
  },
],
"21": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/21.jpg?sign=847ead6803b191be9b1becc4092a84d1&t=1639305296',
  },
],
"22": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/22.jpg?sign=d3f25964e65dffe7fb90aa0356df7b03&t=1639305307',
  },
],
"23": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/23.jpg?sign=cdbd6a254143e21267a9147269dcb6b5&t=1639305323',
  },
],
"24": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/24.jpg?sign=0806f45762d992dcba5e3a9d5df4f5de&t=1639305339',
  },
],
"25": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/25.jpg?sign=541fab9880d232f3a3162351d229351f&t=1639305356',
  },
],
"26": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/26.jpg?sign=6c570b4df0d25cde18c3a6e833b00581&t=1639305372',
  },
],
"27": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/27.jpg?sign=fe6e6f4dcb8cb4d2875b777daa464809&t=1639342993',
  },
],
"28": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/28.jpg?sign=1c47ccad966ead065479e75292657849&t=1639343130',
  },
],
"29": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/29.jpg?sign=ead6d0aef091880075f9ae7478b876b2&t=1639343162',
  },
],
"30": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/30.jpg?sign=935493be26250acf6302d8312147750f&t=1639343182',
  },
],
"31": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/31.jpg?sign=9b49f554d0b45463065496bd5a9aba20&t=1639343200',
  },
],
"32": [
  {
    "question":'https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/comunity/32.jpg?sign=d65017e533fb8a294e2d5203da3bb3b0&t=1639343218',
  },
],
}
var questionList2 = {
  "1": [
      {
        "question":'北三楼下的漂亮小猫',
      },
  ],
  "2": [
    {
      "question":'新食堂附近刚出生不久的小奶猫',
    },
],
"3": [
  {
    "question":'科研大楼附近霸占大石头的猫猫',
  },
],
"4": [
  {
    "question":'武川门口公交车站的猫猫',
  },
],
"5": [
  {
    "question":'科研大楼附近霸占长椅的猫猫',
  },
],
"6": [
  {
    "question":'北三楼下美美享受食物的猫猫',
  },
],
"7": [
  {
    "question":'聚众闹事的猫猫',
  },
],
"8": [
  {
    "question":'在三轮车上睡得很熟的猫猫',
  },
],
"9": [
  {
    "question":'猫猫转头',
  },
],
"10": [
  {
    "question":'吃相一致的两只猫猫',
  },
],
"11": [
  {
    "question":'凑在一起吃东西的两只猫猫',
  },
],
"12": [
  {
    "question":'你们在看什么呀',
  },
],
"13": [
  {
    "question":'图书馆门口的小猫',
  },
],
"14": [
  {
    "question":'猫猫观察',
  },
],
"15": [
  {
    "question":'麻烦路过的给孩子掖一下被子',
  },
],
"16": [
  {
    "question":'麻烦关一下灯，谢谢',
  },
],
"17": [
  {
    "question":'哪位善良的人类给我们布置了小窝',
  },
],
"18": [
  {
    "question":'灰白相间的漂亮小猫',
  },
],
"19": [
  {
    "question":'情人坡旁晒太阳睡午觉的小猫',
  },
],
"20": [
  {
    "question":'我是猫大爷',
  },
],
"21": [
  {
    "question":'内向的小奶猫',
  },
],
"22": [
  {
    "question":'跑到面包房里睡觉的小猫',
  },
],
"23": [
  {
    "question":'挤作一团的小猫',
  },
],
"24": [
  {
    "question":'女生宿舍栏杆上的小猫',
  },
],
"25": [
  {
    "question":'潜入武川宿舍阳台的小猫',
  },
],
"26": [
  {
    "question":'我是一只会垃圾分类的小猫',
  },
],
"27": [
  {
    "question":'身为财大的猫猫怎么不识字呢！',
  },
],
"28": [
  {
    "question":'艺术中心附近的白猫',
  },
],
"29": [
  {
    "question":'我要离你远点',
  },
],
"30": [
  {
    "question":'一只会偷走逗猫棒的小恶猫',
  },
],
"31": [
  {
    "question":'喜欢爬上屋顶导致被人以为困在上面的调皮猫',
  },
],
"32": [
  {
    "question":'猫猫瘫倒',
  },
],
}
Page({
  data: {
    index: 0,  // 题目序列
    chooseValue: [], // 选择的答案序列
    totalScore: 100, // 总分
    wrongList: [], // 错误的题目集合
  },
  onLoad: function (options) {
    console.log(options);
    wx.setNavigationBarTitle({ title: options.imgid }) // 动态设置导航条标题

    this.setData({
      questionList: questionList[options.imgid],  // 拿到图片数据
      questionList2: questionList2[options.imgid],  // 拿到文字数据
      imgid: options.imgid 
    })
  },
  
  nextSubmit: function () {
    // 判断是不是最后一页
    if (this.data.index < this.data.questionList.length - 1) {
      // 渲染下一页
      this.setData({
        index: this.data.index + 1
      })
    } else {
      // 跳转到地点首页
      wx.navigateTo({
        url: '/pages/home/out/three/three' 
})
    }
  },
})
