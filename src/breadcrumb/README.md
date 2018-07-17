# 安装
```json
"usingComponents": {
    "rv-breadcrumb": "path/to/bower_components/rovingui-wxapp/dist/breadcrumb/index"
}
```
# 使用
## 偶数级路径
```html
<rv-breadcrumb itemList="{{evenList}}" bindrvclick="handleClick" />
```
```js
Page({
  data: {
    evenList: ["首页", "应用列表", "个人信息", "设置"]
  },
  handleClick: function (e) {
    console.log(e.detail.key) //被点击item值
  }
})
```
## 奇数级路径
```html
<rv-breadcrumb itemList="{{oddList}}" bindrvclick="handleClick" />
```
```js
Page({
  data: {
    oddList: ["首页", "应用列表", "个人信息"]
  },
  handleClick: function (e) {
    console.log(e.detail.key) //被点击item值
  }
})
```
## 传入对象数组
```html
<rv-breadcrumb itemList="{{oddList}}" bindrvclick="handleClick" />
```
```js
Page({
  data: {
    objList: [
      {display: "首页", key: "index"},
      {display: "应用列表", key: "appCenter"},
      {display: "个人信息", key: "userInfo"}
    ]
  },
  handleClick: function (e) {
    console.log(e.detail.key) //被点击item的key值
  }
})
```