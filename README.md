# RovingUI组件库  

![logo](./example/asset/logo/rovingui-LOGO.png)

## 开发  

```
npm run dev
```
## 组件安装
使用bower来进行安装
```
bower install https://github.com/rovinglight/rovingui-wxapp.git
```
安装完成后，若需在页面中引用
## 组件使用
在要使用的页面的json文件中的usingComponents字段中添加要使用的组件即可在页面中直接使用。

```json
{
  "usingComponents": {
    "rv-button": "../../components/btn/index"
  }
}
```
```html
<rv-button>我是rv-button组件</rv-button>
```
- [rv-button](./src/btn/README.md)