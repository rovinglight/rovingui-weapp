# 按钮 rv-button
## 安装
```json
{
  "usingComponents": {
    "rv-button": "path/to/bower_components/rovingui-wxapp/dist/btn/index"
  }
}
```
## 使用

### 默认按钮
```html
<view>
    默认按钮
    <rv-button>默认按钮</rv-button>
    <rv-button type="primary">Primary</rv-button>
    <rv-button type="warn">Warn</rv-button>
</view>
```
### 扁平按钮
```html
<view>
    扁平按钮
    <rv-button flat>默认按钮</rv-button>
    <rv-button type="primary" flat>Primary</rv-button>
    <rv-button type="warn" flat>Warn</rv-button>
</view>
```
### Mini按钮
```html
<view>
    <view>Mini 按钮</view>
    <view class="rv-row rv-row-space-between">
        <view class="rv-col-7">
            <rv-button size="mini" flat>默认按钮</rv-button>
        </view>
        <view class="rv-col-7">
            <rv-button size="mini" type="primary" flat>Primary</rv-button>
        </view>
        <view class="rv-col-7">
            <rv-button size="mini" type="warn" flat>Warn</rv-button>
        </view>        
    </view>
    <view class="rv-row rv-row-space-between">
        <view class="rv-col-7">
            <rv-button size="mini">默认按钮</rv-button>
        </view>
        <view class="rv-col-7">
            <rv-button size="mini" type="primary">Primary</rv-button>        
        </view>
        <view class="rv-col-7">
           <rv-button size="mini" type="warn">Warn</rv-button> 
        </view>
    </view>
</view>
```
### Loading
按钮接受一个Boolean类型的loading参数，当loading为true时button进入加载状态。
```html
<view>
    Loading
    <rv-button type="warn" loading="{{true}}" bindclick="handleClick">
        点击来进入加载状态
    </rv-button>
</view>
```