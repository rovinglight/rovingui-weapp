
Page({
  data: {
    
  },
  onLoad: function () {

  },
  onShow: function() {

  },
  navigateTo: function (e) {
    let pageUrl = e.target.dataset.url
    wx.navigateTo({
      url: pageUrl
    })
  }
})
