// pages/home/out/lake/test/test.js
var app = getApp();
var questionList = {
  "001": [
      {
        "question": "今天是周三，你在教学楼附近闲逛，你其实很喜欢来教学楼附近，会听到不同老师讲课的声音，会看到同学们上课时的各种神态，你觉得很有趣。",
      },
      {
        "question": "你趴在一楼一间教室的窗台上，这间教室今天下午没有人上课，刚刚进来了一个女生，应该是来自习的，长的很可爱，脸上挂着笑，今天似乎心情很好。",
      },
      {
        "question": "她在这间空教室里找了前排的一个位置坐下，你在看着她，她也发现了窗台边趴着的你，朝你甜甜的笑了一下。",
      },
      {
        "question": "接着，她戴上了一只耳朵的耳机，开始一边听歌一边看书学习。",
      },
      {
        "question": "她心情似乎真的很好，嘴里还小声的哼起了歌。哼了一小会后，她摘下耳机，转过头四处环绕看了看，确定没有人后，这才又戴上了耳机，继续轻轻的哼歌",
      },
      {
        "question": "你虽然不知道她学习投不投入，但是你可以肯定，她听歌是很投入的，因为她还会跟随节拍点头摇晃，你觉得她哼的歌还不错，至少好像是完整的调子。",
      },
      {
        "question": "你觉得她还挺可爱的，也就没有离开，继续趴在窗台上享受来自小姐姐的歌曲。",
      },
      {
        "question": "To Be Continued......",
      },
  ],
  "002": [
    {
      "question": "突然，你看到有一个男生从教室的后门进来了，坐在了最后一排。",
    },
    {
      "question": "最重要的是！前排的女孩子根本没有发现！她还沉浸在她欢乐轻松的音乐世界里，嘴里仍然哼着歌。",
    },
    {
      "question": "虽然你是一只小猫，但是你也是知道人类是需要脸面的，你觉得你应该提醒一下那位可爱的小姐姐。",
    },
    {
      "question": "你喵喵叫了两声，但是她戴着耳机并没有听到，你又往前走了几步，想引起她的注意，她也没有看到。",
    },
    {
      "question": "你放弃了，你继续趴了下来，果然，猫猫管不了人类的事情。不管了，反正希望她之后不要后悔。",
    },
    {
      "question": "几分钟过去了，奇怪的是，后排进来的那位男生居然没有去前面提醒她，也没有因为这间教室有哼歌声而离开，他静静的坐在后面，竟然就这样认真的学习了起来。",
    },
    {
      "question": "人类真是捉摸不透。你心想。",
    },
    {
      "question":"你就这样趴在窗台上，一男一女一猫就这样神奇又和谐的在一起待了一节课。"
    },
    {
      "question": "To Be Continued......",
    },
  ],
  "003": [
    {
      "question": "下课铃一响，女生伸了个懒腰，拿起桌上的水杯，准备出去接水。在起身的一瞬间，她转头看到了坐在后排的男生。",
    },
    {
      "question": "你看到她整个人瞬间石化，所有的动作都停滞了，整间教室的空气十分安静。",
    },
    {
      "question": "你摇了摇自己的猫猫脑袋，在心里叹气，唉，我都好心提醒过你了，你看你不听吧，现在好了，你们人类把这叫啥来着，社什么，对对对，社死，你看你现在社死了吧！",
    },
    {
      "question": "只见那个女生原地静止呆滞了好几秒后，神色有些痛苦的闭上了眼睛，似乎不愿意相信现在发生的事实，不一会后她又睁开了眼，可能是终于决定面对这个事实。",
    },
    {
      "question": "她放下了水杯，开始收拾桌面的东西，应该是准备火速逃离这个社死现场。",
    },
    {
      "question": "只要我跑的够快，尴尬的就不是我。你觉得她心里可能是这么想的。",
    },
    {
      "question": "她没有发现，后面的男生已经抬起头来开始看着她。",
    },
    {
      "question": "过了一会儿，她收拾好自己的东西，低着头准备跑路，走到讲台准备到门口的时候，听到了后排男生传来的声音。",
    },
    {
      "question": "To Be Continued......",
    },
  ],
  "004": [
    {
      "question": "“同学等一下。”男生站了起来，向女生走去。",
    },
    {
      "question": "女生尴尬的转过头来，神情有点复杂。",
    },
    {
      "question": "“歌哼得不错，可以交个朋友吗？”男生笑着问她。",
    },
    {
      "question": "你愣住了，心想，你们人类还有这种操作的吗？？？",
    },
    {
      "question": "女生显然也愣住了，她看着男生，好一会儿没有反应。",
    },
    {
      "question": "“可以加个微信吗？”男生抬起手晃了晃自己的手机。",
    },
    {
      "question":"“啊……啊好的好的……”"
    },
    {
      "question":"你皱起了眉头，赶紧跳下窗台走了。真是的，怎么还开始伤害到我这只单身喵了呢。没意思！真是没意思！"
    },
    {
      "question":"走了几步后，你忍不住转头最后瞄了他们一眼。两个人还笑的挺开心的。算了算了，总有一天我也会遇见梦中情猫的！"
    },
    {
      "question": "TheEnd",
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
    wx.setNavigationBarTitle({ title: options.testId }) // 动态设置导航条标题

    this.setData({
      questionList: questionList[options.testId],  // 拿到答题数据
      testId: options.testId // 课程ID
    })
  },
  /*
  * 单选事件
  */
  radioChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.chooseValue[this.data.index] = e.detail.value;
    console.log(this.data.chooseValue);
  },
  /*
  * 多选事件
  */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.data.chooseValue[this.data.index] = e.detail.value.sort();
    console.log(this.data.chooseValue);
  },
  /*
  * 下一题/提交 按钮
  */
  nextSubmit: function () {
    // 判断是不是最后一页
    if (this.data.index < this.data.questionList.length - 1) {
      // 渲染下一页
      this.setData({
        index: this.data.index + 1
      })
    } else {
      // 跳转到地点首页
      wx.navigateBack()

    }
  },
  /*
  * 错题处理
  */
  chooseError: function () {
    var trueValue = this.data.questionList[this.data.index]['true'];
    var chooseVal = this.data.chooseValue[this.data.index];
    console.log('选择了' + chooseVal + '答案是' + trueValue);
    if (chooseVal.toString() != trueValue.toString()) {
      this.data.wrongList.push(this.data.index);
      this.setData({
        totalScore: this.data.totalScore - this.data.questionList[this.data.index]['scores']  // 扣分操作
      })
    }
  }
})
