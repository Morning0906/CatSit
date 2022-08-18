// pages/home/out/lake/test/test.js
var app = getApp();
var questionList = {
  "001": [
      {
        "question": "你今天心情不是很好，因为晚上的时候本来有小姐姐给你倒了很多猫粮，但是被北三楼下的一只“恶霸”大猫给抢了一大半。",
      },
      {
        "question": "你心中忿忿不平，心想，要不是自己体型比它小点，打不过它，不然一定好好捍卫自己的食物！",
      },
      {
        "question": "你没吃饱，又受了小气，不太开心的坐在绿叶食堂的门口，一边脑补着，要是自己更强壮一些，该怎么好好惩治那只恶霸猫猫。",
      },
      {
        "question": "你正脑补到自己高傲霸气的守护在自己的食物面前，而那只恶霸猫猫在一旁用卑微的眼神祈求着你分给它一点食物时，一片阴影笼罩住了你。",
      },
      {
        "question": "你抬头一看，是两位男生停在了你面前。绿叶步行街昏暗的路灯下，你不太看得清他们长什么样，但今天晚上受欺负后，你看谁都觉得不怀好意。",
      },
      {
        "question": "你有些警戒的看着两个男生。其中一个蹲下来摸了摸你的头，一边说着：“它长的也太可爱了！”还拿出手机给你拍了几张照片。",
      },
      {
        "question": "你虽然心情不好，但是这个哥哥好像没有什么恶意，你也就没有溜走，任由他摸你的脑袋。",
      },
      {
        "question": "“小心被它抓到哦。”另一个男生在旁边提醒他，虽然他也蹲下来看你，但是没有伸手过来摸你脑袋。",
      },
      {
        "question": "“没关系的，我会小心的，放心吧。”那个男生回答道。",
      },
      {
        "question": "“小可爱，你现在饿不饿，要不我给你喂点东西吃吧。”那个男生跟你玩了一会儿后，跟另一个男生说：“你在这里等我一下，我回宿舍给它拿点吃的。”",
      },
      {
        "question": "To Be Continued......",
      },
  ],
  "002": [
    {
      "question": "不一会儿后，那个男生回到绿叶餐厅门口，手里多了一小袋吃的。他拆开后，把它放在了离你不远的地上。",
    },
    {
      "question": "你闻到了食物的香味，但是今天的你十分谨慎，你左顾右盼了一会儿，想观察那只恶霸猫猫在不在附近。",
    },
    {
      "question": "那个男生见你不过去吃，以为你没有看到，就伸手指了指地上的吃的。",
    },
    {
      "question": "而你却以为他要剥夺你的食物，今天晚饭被抢的场景历历在目，你不允许这种事情再有第二次发生！",
    },
    {
      "question": "说时迟那时快，你大吼一声，立即扑了过去，手起爪落，在男生的手上划了两道印记。",
    },
    {
      "question": "“？？？”男生瞪大了眼睛，一时没缓过神来。",
    },
    {
      "question": "另一个男生立马站起来，拉着他后退了几步。",
    },
    {
      "question": "“天，让你小心一点，你看被抓了吧！”",
    },
    {
      "question": "“你这只恩将仇报的小猫咪！”那个男生缓过神来，有些气恼的看着你。“我给你喂吃的，你还抓我！”",
    },
    {
      "question": "“好了好了别说了，快去医院打狂犬疫苗吧。”",
    },
    {
      "question": "你感觉自己好像误会了他，但是也就是抓了他两下，也不用这么生气吧。还有什么是狂犬疫苗，自己明明是小猫！",
    },
    {
      "question": "你心里有些不好意思，喵喵叫了两声，以表歉意。",
    },
    {
      "question": "“你还叫，你你你，你真是太过分了！”说完，两个男生就急匆匆的走了。",
    },
    {
      "question": "自己也没有那么过分吧！你不明白他为什么对自己那么生气，但是吃饱饭最重要，于是你美滋滋的把地上的食物给吃掉了。",
    },
    {
      "question": "你饱餐一顿后舒舒服服的去睡觉了，睡前你还想着，如果下次遇见他，一定对他态度好一些！",
    },
    {
      "question": "To Be Continued",
    },
  ],
  "003": [
    {
      "question": "一个星期后，你坐在绿叶餐厅前，终于再一次见到了他。",
    },
    {
      "question": "他朝你蹲下来，只是不再像上次离得那么近。脸上的表情还是有些小生气。",
    },
    {
      "question": "“你这只忘恩负义的小猫，你知不知道，你害得我去医院打了五次针！”他瞪着你抱怨道。",
    },
    {
      "question": "你无辜的看着他，摇着尾巴喵喵叫了两声。",
    },
    {
      "question": "“哎，谁让你长的这么可爱。”他一边说着，一边从包里拿出了一袋小鱼干。",
    },
    {
      "question": "“我不跟你抢吃的，你这次可不许再抓我了啊！”他撕开包装袋，小心翼翼将食物倒在了离你比较远的地方，然后迅速起身，走到了一边。",
    },
    {
      "question": "我哪有那么坏！你心想。上次是误会，误会！你又叫了两声，以表示自己不是故意的。然后走到食物面前，开心的吃了起来。",
    },
    {
      "question": "“这样才对嘛。”男生松了一口气，脸上露出了欣慰的笑容。“以后也不许乱抓人了哦！”",
    },
    {
      "question": "The End",
    },
    {
      "question":"PS：距离产生美~大家在跟学校的猫猫玩耍或喂食的时候，一定注意不要被它们抓到哦！"
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
  eError: function () {
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
