# 通用CSS样式
## 安装
推荐在app.wxss中进行引用👇
```css
@import "path/to/bower_components/rovingui-wxapp/dist/helper/index.wxss"
```

## 使用
### 渐变背景
渐变色来自[uigradients.com](https://uigradients.com/#MidnightCity)，rv-bg仅包含背景色，示例中的边框样式需另外设置。
```html
<view class="rv-bg-instagram">
    rv-bg-instagram 🤘🏻
</view>
<view class="rv-bg-flare">
    rv-bg-flare 🤘🏻
</view>
<view class="rv-bg-orange">
    rv-bg-orange 🤘🏻
</view>
<view class="rv-bg-html">
    rv-bg-html 🤘🏻
</view>
<view class="rv-bg-firewatch">
    rv-bg-firewatch 🤘🏻
</view>
<view class="rv-bg-telegram">
    rv-bg-telegram 🤘🏻
</view>
<view class="rv-bg-facebook">
    rv-bg-facebook 🤘🏻
</view>
<view class="rv-bg-deepspace">
    rv-bg-deepspace 🤘🏻
</view>
```

### 分隔 Divider

无分割线，仅作空间上的分隔
``` html
<view class="rv-divider" />
```
有分割线
```html
<view class="rv-divider rv-divider-line" />
```

### 字体大小

```html
<text class="rv-font-12">rv-font-12</text>
<text class="rv-font-14">rv-font-14</text>
<text class="rv-font-16">rv-font-16</text>
<text class="rv-font-18">rv-font-18</text>
```