import rvToastFactory from "../../components/toast/toast"
let rvToast = {}

Page({
  data: {
    showGithubPage: false
  },
  onLoad: function () {
    rvToast = rvToastFactory(this)
  },
  onShow: function() {

  },
  onShareAppMessage: function (res) {
    return {
      title: 'RovingUI组件库',
      path: '/pages/main/index'
    }
  },
  navigateTo: function (e) {
    let pageUrl = e.target.dataset.url
    wx.navigateTo({
      url: pageUrl
    })
  },
  showGithubPage: function () {
    this.setData({
      showGithubPage: true
    })
  },
  closeGithubPage: function () {
    this.setData({
      showGithubPage: false
    })
  },
  copyUrl: function () {
    wx.setClipboardData({
      data: "https://github.com/rovinglight/rovingui-weapp",
      success: function () {
        rvToast.show("已将RovingUI的Github地址藏进了你的剪贴板。")
      }
    })
  }
})
