# 徽标 rv-badge
## 安装
```json
{
  "usingComponents": {
    "rv-button": "path/to/bower_components/rovingui-wxapp/dist/badge/index"
  }
}
```

## 使用
### 数字徽标
```html
<rv-badge count="{{5}}">
    <view class="grey-box" />
</rv-badge>
```
### 小点徽标
```html
<rv-badge>
    <view class="grey-box" />
</rv-badge>
```
### 独立使用
```html
<rv-badge type="inline" count="{{5}}" />
```

### 属性及事件

| 属性名 | 类型   | 默认    | 描述                               |
| ------ | ------ | ------- | ---------------------------------- |
| type   | String | default | 定义badge类型，可选inline和default |
| count  | Number | -       | 定义badge中显示的数字              |