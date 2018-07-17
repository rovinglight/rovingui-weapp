# RovingUI组件库  

![logo](./example/asset/logo/rovingui-LOGO.png)
## 概述
[RovingUI](https://github.com/rovinglight/rovingui-wxapp)组件库是由个人在微信小程序开发中所构建的独立组件整合而成的。在组件设计上会偏重动态效果以及阴影的使用。  

现包含按钮(btn)以及栅格(grid)组件，更多组件在来的路上。

## 开发  

```
npm run dev
```
## 安装使用
1. 使用bower来进行安装。
```
bower install https://github.com/rovinglight/rovingui-wxapp.git
```
2. 在要使用的页面的json文件中的usingComponents字段中添加要使用的组件。

```json
{
  "usingComponents": {
    "rv-button": "bower_components/rovingui-wxapp/dist/btn/index"
  }
}
```
3. 在页面中直接使用。
```html
<rv-button>我是rv-button组件</rv-button>
```
## 组件使用演示
组件演示文档中的每一节代码示例都与Demo小程序中的每一节对应。
- 按钮 [rv-button](./src/btn/README.md)
- 栅格 [rv-grid](./src/grid/README.md)
- 面包屑 [rv-breadcrumb](./src/breadcrumb/README.md)

## 贡献
欢迎issue以及PR