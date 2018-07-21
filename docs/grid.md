# 栅格 rv-grid
## 安装
栅格是以样式类的形式来进行应用的，故不必通过页面json文件来进行设置。推荐在app.wxss中进行引用。
```css
@import "path/to/bower_components/rovingui-wxapp/dist/grid/index.wxss"
```
## 使用
rv-grid为24栅格系统，借鉴[ant design](https://ant.design/components/grid-cn/)的栅格系统，仅保留Flex布局。
### 基础栅格
```html
<view>
    <view>基础栅格</view>
    <view class="rv-row">
        <view class="rv-col-12">rv-col-12</view>
        <view class="rv-col-12">rv-col-12</view>
    </view>
    <view class="rv-row">
        <view class="rv-col-8">rv-col-8</view>
        <view class="rv-col-8">rv-col-8</view>
        <view class="rv-col-8">rv-col-8</view>
    </view>
    <view class="rv-row">
        <view class="rv-col-6">rv-col-6</view>
        <view class="rv-col-6">rv-col-6</view>
        <view class="rv-col-6">rv-col-6</view>
        <view class="rv-col-6">rv-col-6</view>
    </view>
</view>
```
### 左右偏移
```html
<view>
    <view>左右偏移</view>
    <view class="rv-row">
        <view class="rv-col-8">rv-col-8</view>
        <view class="rv-col-8 rv-offset-8">rv-offset-8</view>
    </view>
    <view class="rv-row">
        <view class="rv-col-6 rv-offset-6">rv-offset-6</view>
        <view class="rv-col-6 rv-offset-6">rv-offset-6</view>
    </view>
    <view class="rv-row">
        <view class="rv-col-12 rv-offset-6">rv-offset-6</view>
    </view>
</view>
```
### 栅格排序
```html
<view>
    <view>栅格排序</view>
    <view class="rv-row">
        <view class="rv-col-18 rv-push-6">rv-push-6</view>
        <view class="rv-col-6 rv-pull-18">rv-pull-18</view>
    </view>
</view>
```
### Flex布局
```html
<view>
    <view>Flex布局</view>
    <view class="sub-text">子元素左对齐：rv-row-start</view>
    <view class="rv-row rv-row-start">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
    <view class="sub-text">子元素居中：rv-row-center</view>
    <view class="rv-row rv-row-center">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
    <view class="sub-text">子元素右对齐：rv-row-end</view>
    <view class="rv-row rv-row-end">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
    <view class="sub-text">子元素间填充：rv-row-space-between</view>
    <view class="rv-row rv-row-space-between">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
    <view class="sub-text">子元素四周填充：rv-row-space-around</view>
    <view class="rv-row rv-row-space-around">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
</view>
```
### Flex对齐
```html
<view>
    <view>Flex 对齐</view>
    <view class="sub-text">Align Top</view>
    <view class="rv-row rv-row-center rv-row-top">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
    <view class="sub-text">Align Center</view>
    <view class="rv-row rv-row-space-between rv-row-middle">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
    <view class="sub-text">Align Bottom</view>
    <view class="rv-row rv-row-space-around rv-row-bottom">
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
        <view class="rv-col-4">rv-col-4</view>
    </view>
</view>
```
### Flex排序
```html
<view>
    <view>Flex 排序</view>
    <view class="rv-row">
        <view class="rv-col-6 rv-order-4">rv-order-4</view>
        <view class="rv-col-6 rv-order-3">rv-order-3</view>
        <view class="rv-col-6 rv-order-2">rv-order-2</view>
        <view class="rv-col-6 rv-order-1">rv-order-1</view>
    </view>
</view>
```