// getApp()获取到小程序全局唯一的 App 实例，是全部页面共享的。
const app = getApp();
// console.log('app', app);

// Page() 注册一个页面。
Page({
  data: {
    msg1: '123',
    obj: {
      a: 1
    }
  },
  // 以下是页面的生命周期
  /**
   * @method 监听页面加载
   */
  onLoad() {
    console.log('-------onLoad--------');
    // console.log(this);
    // getCurrentPages() 获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。
    // 不要在 App.onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成
    const currentPages = getCurrentPages();
    // console.log('currentPages', currentPages)
  },
  /**
     * @method 监听页面显示
     */
  onShow() {
    // console.log('-------onShow--------');
  },
  /**
   * @method 监听页面初次渲染完成
   */
  onReady() {
    // console.log('-------onReady--------');
  },
  /**
   * @method 监听页面隐藏
   */
  onHide() {
    // console.log('-------onHide--------');
  },
  /**
   * @method 生命周期回调—监听页面卸载
   */
  onUnload() {
    // console.log('-------onUnload--------');
  },
  /**
   * @method 监听用户下拉动作 无效？？？？
   */
  onPullDownRefresh() {
    // console.log('-------onPullDownRefresh--------');
    // wx.showToast({
    //   title: 'onPullDownRefresh',
    //   icon: 'none',
    // })
  },
  /**
   * @method 页面滚动触发事件的处理函数
   */
  onPageScroll() {
    // console.log('-------onPageScroll--------');
    // wx.showToast({
    //   title: 'onPageScroll',
    //   icon: 'none',
    // })
  },
  /**
   * @method 页面上拉触底事件的处理函数  无效？？？？
   */
  onReachBottom() {
    // console.log('-------onReachBottom--------');
    // wx.showToast({
    //   title: 'onReachBottom',
    //   icon: 'none',
    // })
  },
  /**
   * @method 用户点击右上角转发
   */
  onShareAppMessage() {
    // console.log('-------onShareAppMessage--------');
  },
  /**
   * @method 页面尺寸改变时触发
   */
  onResize() {
    // console.log('-------onResize--------');
  },
  /**
   * @method 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap(options) {
    // console.log('-------onTabItemTap--------');
    // console.log(options);
  },
  setFn(){
    // setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
    // 注意：
    // 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
    // 仅支持设置可 JSON 化的数据。
    // 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
    // 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。
    this.data.obj.a = 2;
    this.setData({
      msg1: 'kamehameha',
      obj: {
        a: 123
      },
    }, function () {
      console.log('BOOOOOOOM!!!');
    })
    console.log(this.data.msg1);
    console.log(this.data.obj);
  },
})