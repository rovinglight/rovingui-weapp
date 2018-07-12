
Page({
  data: {
    loading: false
  },

  onLoad: function () {

  },

  onShow: function() {
  },
  handleTap: function (e) {
    let loading = this.data.loading
    this.setData({
      loading: !loading
    })
  }
})
