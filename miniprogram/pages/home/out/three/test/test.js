// pages/home/out/lake/test/test.js
var app = getApp();
var questionList = {
  "001": [
      {
        "question": "——如果时光可以倒流，你想对它说些什么呢？                         ",
      },
      {
        "question": "今天的天气有点冷，学校的树被大风吹的左右晃动，你窝在北三宿舍楼下的车棚里，眯着眼小憩，心想，还好自己被喂的比较胖，肉多比较御寒。",
      },
      {
        "question": "有两位女生路过了车棚，你依稀听到了她们的谈话，然而，谈话的内容却让你再也没有睡意。",
      },
      {
        "question": "“太可怕了，我刚刚看朋友圈看到有同学说，因为天气冷，公主楼有一只小猫跑进了宿舍的烘干机里取暖，被人不小心关在里面了，受伤很严重，浑身是血，现在不见了，大家在到处找它。”",
      },
      {
        "question": "“什么！那也太可怜了，天哪，跑进烘干机里，后果想都不敢想……”",
      },
      {
        "question": "两位女生进了宿舍楼，你已经听不到她们之后的对话，只觉得大脑一片空白。",
      },
      {
        "question": "公主楼的小猫们……你平时虽然去那边比较少，但是学校里的猫猫们彼此之间基本上都是认识的，就算不在一起玩，平时见面也会打个招呼。",
      },
      {
        "question": "你不敢想象会发生这种事，在短暂的大脑空白之后，你迅速朝公主楼那边跑去。",
      },
      {
        "question": "To Be Continued......",
      },
  ],
  "002": [
    {
      "question": "公主楼附近聚集了几只猫猫，你赶紧过去，大家也很着急的样子，你一问才知道，受伤的是一只黄白毛色的小猫。",
    },
    {
      "question": "你见过它，是一只很可爱很漂亮的小猫，比你要小很多，性格也很活泼，虽然没有经常在一起玩，但是你记得它。",
    },
    {
      "question": "你不敢想象这样惨痛的事情会发生在它身上，你也开始在学校里到处寻找小猫的下落。",
    },
    {
      "question": "你四处寻找着，想起了人类喜欢祈祷和许愿。",
    },
    {
      "question": "会有用吗？猫猫的许愿会有用吗？你心里开始默默的祈祷，希望一切没有到最坏的地步。",
    },
    {
      "question": "你找了很久，仍然一无所获，心里的石头有如千斤重，靠着最后一点希望吊在那里。你不停的安慰自己，不会有事的，不会有事的，一定是学校里善良的哥哥姐姐们把它送去救治了，一定会没事的。",
    },
    {
      "question": "夜渐渐深了，你回到公主楼附近，想问问其他小猫有没有找到，却发现大家好像都在沉默。",
    },
    {
      "question": "To Be Continued......",
    },
  ],
  "003": [
    {
      "question": "你这才得知，受伤的小猫已经不幸去世了，寝室的阿姨怕关心它的学生们伤心难过，才一直没有告诉大家。",
    },
    {
      "question": "你觉得大脑一片空白，其实不是没有任何心理准备，但是在知道的那一瞬间，心头还是猛烈的一震，随即而来的，是铺天盖地的悲伤和哀恸。",
    },
    {
      "question": "你不知道自己是怎么走回平时睡觉的车棚里的，你感觉眼睛有点看不清路，你觉得大风吹得你有点冷。好奇怪，明明刚刚到处找的时候，还没觉得有这么冷。",
    },
    {
      "question": "你听到了有猫猫在悲伤的哀叫，或许是它的伙伴，它要怎么接受这样的事实呢？平时一起在公主楼玩耍的伙伴，一起吃东西一起打闹的伙伴，一起晒太阳一起找地方睡觉的伙伴，怎么就突然不在了呢？",
    },
    {
      "question": "你抬头看了看天空，今天是十五，月亮很圆。  可是，有一只小猫却再也看不到晚上的月亮了。",
    },
    {
      "question": "小猫没有错，它只是想在冷天去取一会暖，它并不知道危险，也不知道会发生这么可怕的事情。",
    },
    {
      "question": "不小心把小猫关在里面的女孩子也没有错，她不知道小猫会溜进来，也不知道小猫会躲到烘干机里。",
    },
    {
      "question": "世事无常，很多事情发生的太突然，好像除了接受，什么也做不了。",
    },
    {
      "question": "To Be Continued......",
    },
  ],
  "004": [
    {
      "question": "那天晚上之后，你好几天提不起精神，每天都有些恹恹的，一天到晚都待在北三楼下，也很少去学校别的地方逛。",
    },
    {
      "question": "你也不知道自己怎么了，总觉得心口有什么东西堵着，有些难受。",
    },
    {
      "question": "一个天气很好的午后，你在北三车棚后面的草地里闭着眼小憩。今天是周二，下午并没有很多人经过，周围很安静。",
    },
    {
      "question": "眯了一会儿后，你感到有些困，即将睡着的时候，你忽然听到脚步声靠近，脚步声到你跟前的时候停了下来。",
    },
    {
      "question": "你睁开眼睛，看到一位小姐姐在你面前蹲了下来。你以为她是平时那些，路过的时候爱停下来看看猫咪的学生，就闭上眼准备继续睡觉了。",
    },
    {
      "question": "耳边却传来了她温柔的声音。",
    },
    {
      "question": "To Be Continued......",
    },
  ],
  "005": [
    {
      "question": "“小猫咪，不知道你知不知道前几天公主楼小猫的事情，你跟那只小猫认识吗？是好伙伴吗？”",
    },
    {
      "question": "“不过这也不重要，我今天在学校的小太阳上看到了一篇投稿，是以公主楼小猫的口吻写的一封信。”",
    },
    {
      "question": "“前几天知道这件事后我觉得很难过，今天看到这篇投稿，感觉心里治愈了很多。”",
    },
    {
      "question": "“猫猫也需要更多的关心，我们作为人尚且需要治愈，失去伙伴的小猫们也需要治愈。”",
    },
    {
      "question": "“虽然你听不懂，但是我还是想把它念给你听。”",
    },
    {
      "question": "“来自喵星的一封信——”",
    },
    {
      "question": "“你们好呀，财大的哥哥姐姐，我的名字叫蛋蛋，今天我已经顺利回到母星了~作为公主楼的团宠，这几个月我过得很开心，我很喜欢跟人贴贴，也喜欢对人撒娇。”",
    },
    {
      "question": "“本猫是如此的风流倜傥，吸引了无数的两脚兽，猫条和小鱼干应有尽有，他们应该是嫉妒我，所以让我从帅气的小鲜肉变成了公公猫(我不听我不听我不听)”",
    },
    {
      "question": "“魔都的冬天好冷呀，但哥哥姐姐们的拥抱真的很温暖。都怪我顽皮，贪恋余温跑进了烘干机，结果闯了大祸。”",
    },
    {
      "question": "“我并不责怪那位小姐姐，也不怪任何一个两脚兽，嘿嘿，虽然这位同学确实有一点点粗心啦~”",
    },
    {
      "question": "“因为至今，我依然信任，并喜欢着你们所有人，”",
    },
    {
      "question": "“可是，我还是有一点难过，我还没谈过恋爱(不要说我是公公，哼)，我也很想念地球上的喵星伙伴~”",
    },
    {
      "question": "“不知道他们过得怎么样，有没有人陪他们一起玩，给他们猫条，有没有温暖的小被窝，他们是不是也像我这样顽皮...”",
    },
    {
      "question": "“如果有机会，我一定要悄悄告诉他们，千万不要再去那个可怕的地方，我生命的最后几分钟，真的好痛好痛...”",
    },
    {
      "question": "“再坚持一下，就能活下去了...我绵软着身体，瘫倒在柔软的衣物上，门缓缓地开了 -一是两脚兽来接我了吗?哦，原来是母星的天使，来接我啦...”",
    },
    {
      "question": "“再见啦，两脚兽，再见啦，蓝星。”",
    },
    {
      "question": "“不要为我难过~逝者已矣，生者如斯。”",
    },
    {
      "question": "“我愿意把我的那一份猫粮，慷慨地分给其他喵星人——”",
    },
    {
      "question": "“愿他们不再食不果腹，愿他们都能在风彻刺骨的寒夜，找到一隅栖之地。”",
    },
    {
      "question": "愿他们都能碰到我不曾拥有的铲屎官，愿他们都有一个家~愿他们都没有蛋蛋，可恶啊)”",
    },
    {
      "question":"“我在母星的舰队上朝着蓝星挥挥手，我的一生很短暂，但很有幸，遇见了爱我的你们，这份爱，我无以为报，千言万语，只汇成一句……喵喵喵。”"
    },
    {
      "question":"“10773号，已顺利到达母星，地球地球，收到请回复~”"
    },
    {
      "question":"“——爱你们的小傻瓜。”"
    },
    {
      "question":"小姐姐走后，很久很久，你终于睁开了眼睛。"
    },
    {
      "question":"阳光落在你的身上，暖暖和和的。"
    },
    {
      "question":"今天天气很好，要好好珍惜才是。"
    },
    {
      "question":"The End"
    },
    {
      "question":"PS：本篇剧情源于学校真实事件，最后的信也是小太阳上真实的投稿。如果有冒犯之处，请联系我修改或删除~"
    }
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
