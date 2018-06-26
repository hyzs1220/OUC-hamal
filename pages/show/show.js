Page({
  data: {
    scrollTop: 0,
    floorstatus: false
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0,
      floorstatus: false
    })
  },
  scroll: function (e) {
    // 容器滚动时将此时的滚动距离赋值给 this.data.scrollTop
    if (e.detail.scrollTop > 60) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  copyTBL: function (e) {
    var that = this;
    var variableData = e.currentTarget.dataset.variable;
    console.log(variableData);
    wx.setClipboardData({
      data: variableData,
      success: function () {
        // self.setData({copyTip:true}),  
        wx.showToast({
          title: '成功搬运~',
          icon: 'success',
          mask: false,
          duration: 800
        }, )
      }
    })
  },

  onLoad: function (options) {
    var that = this;
    //console.log(options.info);
    wx.showToast({
      title: '嘿咻~加油搬',
      icon: 'loading',
      mask: false,
      duration: 8000
    }, )
    wx.request({
      url: 'https://www.zhengjizhi.xyz/souyunpan/test.php',
      data: {
        name: options.info,
        page:'1'
      },
      //method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
      header: {
        'content-type': 'application/json'
      }, // 设置请求的 header 默认是application/json  
      success: function (res) {
        if (res.data == null) {
          
          wx.navigateBack();   //返回上一个页面
          wx.showToast({
            title: '啥都没搬到~',
            image: '../../img/fail.png',
            mask: false,
            duration: 800
          }, )
        }
        else{
          wx.showToast({
            title: '搬到了~',
            icon: 'success',
            mask: false,
            duration: 800
          }, )
          that.setData({
            info: res.data,//第一个data为固定用法，第二个data是json中的data
          })
        }
      },
      fail: function () {
        // fail
        console.log(res.data)
        wx.showToast({
          title: '请求失败',
          icon: 'loading',
          mask: false,
          duration: 800
        })

      }
  })
}
})