// pages/home/out/lake/test/test.js
var app = getApp();
var questionList = {
  "001": [
      {
        "question": "今天午后的阳光很好，你和小伙伴们在情人坡的草坪上玩耍晒太阳，十分开心。",
      },
      {
        "question": "不一会儿，来了两位小姐姐，坐在了旁边的长椅上。",
      },
      {
        "question": "你听到了她们的谈话。",
      },
      {
        "question": "“谢谢你能有时间听我说话，其实我觉得是我自己太矫情了，但是又不知道怎么排解。”",
      },
      {
        "question": "“没有关系，你说吧，或许说出来就会好很多。”",
      },
      {
        "question": "“其实起因是前段时间过节，我跟认识十年的挚友发了祝福，她不回复我，然后我很emo，就跟她发了好多好多话，她也回复了我很多。”",
      },
      {
        "question": "“是啊，在外面流浪真的很容易挨饿。”",
      },
      {
        "question": "“是这样的，我跟她认识十年了，一直把她当做最好最好的朋友，但是上大学后，只有我主动视频过一两次，大多数谈话也是我主动。”",
      },
      {
        "question": "“我真的感到有点心累，就为了她初中高中对我的好，我现在就一直主动付出，真的值得吗？”",
      },
      {
        "question": "“上个假期，我主动说要约她出来玩，结果她暑假要实习，时间不多，可以多叫几个人一起，我说也可以。”",
      },
      {
        "question": "“有一天晚上我有另一场团建，结束后和别的uu们在街上溜达，就碰到她和她从小到大的朋友单独出来玩。”",
      },
      {
        "question": "“因为我这波团建的uu里也有她不喜欢的一个姑娘，当时我就觉得很尴尬，同时又很伤心，她和她别的朋友单独约出来玩就是不和我约。”",
      },
      {
        "question": "“还有她生日我误把礼物寄到她学校，而她恰好不在学校在别的市实习，感觉她发消息的语气还不太生气，就只说让人帮忙取挺麻烦的。”",
      },
      {
        "question": "“我就还给她道歉，结果回头她就专门发了空间说不要给她寄礼物她不在学校，好像还挺生气的，我隔了好几天才看到，直接就懵了。”",
      },
      {
        "question": "“然而在我对此一无所知的情况下我还给她发了生日的小作文，祝她生日快乐，说我们都相认相知十年了，希望她以后开心快乐，希望她时刻记得自己最重要。”",
      },
      {
        "question": "“这学期来除了我生日那天她给我主动发过信息，还寄了礼物以外，就再没主动联系我给我发信息，大部分都是我主动联络她。”",
      },
      {
        "question": "“每次看到她朋友圈晒她和别人的长篇聊天记录截图，我又感觉到很不舒服。”",
      },
      {
        "question": "“在我emo冲她发火后她给我朋友圈的点赞也就零星两三个，明明她给我俩的共同好友老是点赞。”",
      },
      {
        "question": "“我是不是真的太矫情了，可是我真的很难受，这段友情到底有没有存在的必要，是不是我的心态有问题。”",
      },
      {
        "question": "To Be Continued......",
      },
  ],
  "002": [
    {
      "question": "另一位小姐姐开口说道：“你emo的时候跟她说了什么，她又跟你说了什么呢？”",
    },
    {
      "question": "“我说，不知道为什么我们之间会变成这样，你有什么不满，或者不想跟我做朋友了，都可以说出来。”",
    },
    {
      "question": "“为什么别人的好朋友可以什么都聊，到了我们这里，就是我不主动，你也不主动了呢？”",
    },
    {
      "question": "“是真的太忙了还是已经不想维持这段关系了，能不能告诉我，现在变成这样，我真的很伤心。”",
    },
    {
      "question": "“初中的时候，我给你落了脸子，你一定不会主动找我，我当时就很害怕会有现在这么一天。”",
    },
    {
      "question": "“现在到了大学，就真的开始冷暴力了吗？”",
    },
    {
      "question": "“假期约你出来说话，能一直在手机上发消息，就是不会主动找个话题咱俩聊聊，尴尬到无可救药的地步，我也只好陪你刷手机。”",
    },
    {
      "question": "“给你发完消息，看你回复了就觉得很开心。可是我也希望你能来主动找我一下啊，让我开心一下也好啊。”",
    },
    {
      "question": "“是我这个朋友不值得你给我发一个消息，还是你觉得和我聊天就只有尴尬，别的一无所有，没得聊了。”",
    },
    {
      "question": "“我真的不希望我俩渐行渐远，因为你对我真的很重要。”",
    },
    {
      "question": "“她也回复了我很多，说朋友不是一定要天天聊天来维持的，不是真朋友的话，天天聊天也维持不了。”",
    },
    {
      "question": "“她自己觉得这种相处模式没有什么问题，朋友之间没有必要为了维持关系，天天打流水账。”",
    },
    {
      "question": "“假期那次她自己也没有感受到，下次有这种情况，让我直接说就好了，不要憋在心里，有什么感受直接说出来。”",
    },
    {
      "question": "“她说我不要时刻被她影响，大家都是成年人都是大学生了，每个人每天都有自己的事情要做，不是每个人都能随时随地及时看见消息的。”",
    },
    {
      "question": "“不管是多好的朋友，情感都不一定是靠聊天秒回建立起来的。”",
    },
    {
      "question": "“她还说我有点缺安全感，应该去谈个恋爱才对。”",
    },
    {
      "question": "另一个小姐姐噗嗤笑了，她急忙摆摆手，说：“我没有要笑你的意思，不要误会。”",
    },
    {
      "question": "“没关系。”有烦恼的女生说道，“你觉得是我的问题吗？”",
    },
    {
      "question": "To Be Continued......",
    },
  ],
  "003": [
    {
      "question": "“你觉得她说的有道理吗？有让你心情好受一点吗？”",
    },
    {
      "question": "“我觉得她有在认真回复我，说的话也有道理，我其实好多了。”",
    },
    {
      "question": "“其实道理你都明白的，但你需要一些时间慢慢摆平心态。”",
    },
    {
      "question": "她继续说道：“朋友，并不只有时时刻刻陪你聊天，能够随时随地想你所想的人，也有君子之交淡如水，在关键时刻能够挺身而出的人。”",
    },
    {
      "question": "“朋友也不一定是少说几句话就会疏远的人，而是彼此能够尊重。理解并予以支持的人。”",
    },
    {
      "question": "“没有什么人或事情是你生活和心情的全部，你有些太过于把注意力放在这段关系上了，你应该多把注意力平衡到生活里的其他部分中。”",
    },
    {
      "question": "“确实是会有人对于友情心思更细腻更敏感些，这不是你的错。”",
    },
    {
      "question": "“但是你也可以尝试换个角度想一想，是不是自己过多的关心和在意，反而把自己弄得不开心不快乐了。”",
    },
    {
      "question": "“是我这个朋友不值得你给我发一个消息，还是你觉得和我聊天就只有尴尬，别的一无所有，没得聊了。”",
    },
    {
      "question": "“你朋友说的其实有道理呀，你真的可以交些别的朋友，或者有机会的话去谈个恋爱。而不是一天到晚都关注这段友情。”",
    },
    {
      "question": "女生沉思了一会儿，点了点头。",
    },
    {
      "question": "“是的，我也在反思自己的思维是不是走向了误区，其实朋友之间的相处方式有很多，我不该只按照自己的想法，把一切想的理所当然。”",
    },
    {
      "question": "“对嘛，心态放开一些，生活中还有很多其他事情值得你体会和关注，不是只有友情这一个部分。”",
    },
    {
      "question": "“嗯……我会调整好自己的，也会跟她说开的。谢谢你，其实跟她说出来后真的好很多了，看来什么事情都不能憋在心里。”",
    },
    {
      "question": "“当然啦。走吧，我们去喝奶茶，茶百道出新品了，要不要去尝尝？”",
    },
    {
      "question": "“好！”",
    },
    {
      "question": "两个女孩子渐渐走远了，你爬上了长椅。",
    },
    {
      "question": "终于走了！真是的，就这点事情，还霸占我的地盘这么久！",
    },
    {
      "question": "你不满的哼了一声，在长椅上舒服的趴着，继续晒太阳了。",
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
