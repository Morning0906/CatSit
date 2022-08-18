Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    total:10,
    num:3,
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var data={
      total:this.data.total,
      num:this.data.num
    }
    that.drawCircleBg('canvas',data);
  },
  //绘制白色圆形背景
  drawCircleBg: function (prefix, data) {
    var that = this;
    //创建并返回绘图上下文context对象。
    let cxt_arc = wx.createCanvasContext(prefix);
    cxt_arc.setLineWidth(4); //线条的宽度
    cxt_arc.setStrokeStyle('#FFFFFF');//边框颜色
    cxt_arc.setLineCap('round');
    cxt_arc.beginPath();
    // 参数分别：圆心的x坐标；圆心的y坐标；圆半径；起始弧度，单位弧度（在3点钟方向）；终止弧度；弧度的方向是否是逆时针
    cxt_arc.arc(50, 40, 33, 0, 2 * Math.PI, false);//创建一条弧线
    cxt_arc.stroke(); //对当前路径进行描边
    cxt_arc.draw();
    that.drawCirclePg(prefix, data);
  },
  //绘制橙色进度条
  drawCirclePg: function (prefix, data) {
    console.log(data);
    var that = this;
    //创建并返回绘图上下文context对象。
    let cxt_arc = wx.createCanvasContext(prefix + '_p');
    var value = (data.num / data.total) * 2;
    console.log(value);
    cxt_arc.setLineWidth(6);
    cxt_arc.setStrokeStyle('#FFC000');
    cxt_arc.setLineCap('round');
    cxt_arc.beginPath();
    cxt_arc.arc(50, 39, 33, -0.5 * Math.PI, Math.PI * (value - 0.5), false);
    cxt_arc.stroke();
    cxt_arc.draw();
  },
})