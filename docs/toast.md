# 提醒框 rv-toast
rv-toast为页面内组件，故所有toast仅在当前Page中显示，切换页面后即不可见。
## 安装
1. 在页面的json配置文件中引入rv-toast组件
```json
{
  "usingComponents": {
    "rv-toast": "path/to/bower_components/rovingui-wxapp/dist/toast/index"
  }
}
```
2. 在页面的js文件中引入rvToast，并在onLoad中进行初始化
```js
import rvToastFactory from "path/to/bower_components/rovingui-wxapp/dist/toast/toast"
let rvToast = {}

Page({
    onLoad: function () {
        rvToast = rvToastFactory(this)
    }
})
```
3. 在wxml文件中插入 ```rv-toast``` 组件，确保 ```rv-toast``` 位于页面最外层，否则可能会有不可预知的问题。toastList以及bindtoasthelper为必需，属性值如下填写便可，```data._rv_toast_list``` 以及 ```toastHelper``` 会在第二步中赋给页面。
```html
<rv-toast toastList="{{_rv_toast_list}}" bindtoasthelper="toastHelper" />
```
## 使用 
### 默认提醒框
```js
rvToast.show("默认Toast")
```
### 提醒框延时
```js
rvToast.show("1秒后自动关闭", {
    duration: 1000
})
```
```js
rvToast.show("常驻Toast", {
    duration: null
})
```
### 回调函数
```js
rvToast.show("关闭时触发", {
    onClose: () => {
        rvToast.show("我是关闭后触发的回调")
    }
})
```
```js
rvToast.show("点击时触发", {
    onClick: () => {
        rvToast.show("我是点击时触发的回调")
    }
})
```
### 关闭所有
除了调用 ```rvToast``` 的 ```clear``` 方法外，还可以长按某个提醒框来清空所有Toast。
```js
rvToast.clear()
```

### 接受参数

```rvToast.show(msg[, config])```中 ```config``` 接受的参数

| 属性名   | 类型    | 默认 | 描述                                                              |
| -------- | ------- | ---- | ----------------------------------------------------------------- |
| duration | Number  | 4500 | Toast的持续时间，过后自动关闭，设置成 ```null``` 后不会自动关闭。 |
| onClick  | Handler | -    | Toast文字部分被点击时触发的回调。                                |
| onClose  | Handler | -    | Toast关闭时触发的回调，自动关闭或手动关闭皆会触发。               |