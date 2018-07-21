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
## 属性及事件

| 属性名       | 类型     | 默认 | 描述                                                                       |
| ----------- | ------- | ---- | ------------------------------------------------------------------------- |
| itemList    | Array   | []   | 接受字符串数组或对象数组（对象中的display字段将展示于面包屑中，key字段则在点击时返回） |
| bindrvclick | Handler |      | 当点击某一个item之后触发，返回参数的detail.key中为所点击item的标识                |