Page({
  data: {
    evenList: ["首页", "应用列表", "个人信息", "设置"],
    oddList: ["首页", "应用列表", "个人信息"]
  },

  onLoad: function () {

  },

  onShow: function() {

  },
  handleClick: function (e) {
    console.log(e)
    let list = this.data.breadcrumbList
    list.pop()
    this.setData({
      breadcrumbList: list
    })
  }
})
