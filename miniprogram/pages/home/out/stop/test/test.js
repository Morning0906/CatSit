// pages/home/out/lake/test/test.js
var app = getApp();
var questionList = {
  "001": [
      {
        "question": "今天下午，你在学校的驿站附近闲逛。",
      },
      {
        "question": "最近是购物节，取包裹的人很多，快递堆满了驿站，回收快递盒的大台子都挪到外面了。",
      },
      {
        "question": "你来到回收快递盒的台子旁，挠着地上被丢弃的纸盒玩，你觉得很有趣。",
      },
      {
        "question": "你听到门口好像有人在理论。",
      },
      {
        "question": "“我的快递真的不见了！”",
      },
      {
        "question": "To Be Continued······",
      },
  ],
  "002": [
    {
      "question": "你看到两个人在离门口不远的地方说话，一个是男学生，一个穿着驿站的工作服，应该是工作人员。",
    },
    {
      "question": "你听到男学生说：“我拿着我的取件码，找了很久都没有找到快递，刚刚你也跟着我一起找了十多分钟，确实是没有找到对吧！”",
    },
    {
      "question": "工作人员说：“可能是被人拿走了，我去看下监控。”",
    },
    {
      "question": "“连快递都要偷，素质也太差了！”男生怒气冲冲。",
    },
    {
      "question": "“是是是。”",
    },
    {
      "question": "“这种小偷抓到了，我要给他按在地上打一顿才行！”",
    },
    {
      "question": "“是是是。”",
    },
    {
      "question": "工作人员一边调监控，脸上也有些紧张，毕竟学生丢快递的话，驿站也要负责的。",
    },
    {
      "question": "在调监控的过程中，男生还在旁边一直谴责那个偷快递的小贼，用自己毕生所学过的骂人的话，狠狠的批判小偷。",
    },
    {
      "question": "过了几分钟后，工作人员说：“找到了！就是这个人拿的！”",
    },
    {
      "question": "To Be Continued······",
    },
  ],
  "003": [
    {
      "question": "“好！让我看看是哪个XX。”男生摩拳擦掌。",
    },
    {
      "question": "工作人员也松了一口气，开始专心看那段监控。",
    },
    {
      "question": "“嗯？这人的书包怎么跟你一样？”",
    },
    {
      "question": "“……”",
    },
    {
      "question": "“嗯？这人……怎么长的也和你一样？”",
    },
    {
      "question": "“……”",
    },
    {
      "question": "“你是不是昨天拿快递，没有扫码出库？”",
    },
    {
      "question": "“……”",
    },
    {
      "question": "“对不起对不起，我的错我的错，抱歉抱歉，打扰了打扰了，谢谢你谢谢你……”",
    },
    {
      "question": "然后，你看到那个男生火速的逃离了现场。",
    },
    {
      "question": "人类的记性真不好，你心里想着，摇了摇脑袋。然后继续玩你的纸板去了。",
    },
    {
      "question": "咦，刚刚的纸板去哪里了？",
    },
    {
      "question": "The End",
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
