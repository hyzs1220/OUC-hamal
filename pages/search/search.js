Page({
  data: {
    keyWord:""
  },
  
  keyWordInput: function (e) {
    this.setData({
      keyWord: e.detail.value
    })
  },
  goToShow: function (e) {
    var that = this;
    var info = that.data.keyWord;
    wx.navigateTo({
      url: '../show/show?info=' + info
    });
  }
})