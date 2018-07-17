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
### 属性及事件

| 属性名                | 类型     | 默认         | 描述                                       |
| -------------------- | ------- | ------------ | ------------------------------------------ |
| loading              | Boolean | false        | 按钮是否在加载状态                         |
| openType             | String  | -            | 同原生button组件open-type属性              |
| appParameter         | String  | -            | 同原生button组件app-parameter属性          |
| hoverStopPropagation | Boolean | false        | 同原生button组件hover-stop-propagation属性 |
| hoverStartTime       | Number  | 20           | 同原生button组件hover-start-time属性       |
| hoverStayTime        | Number  | 70           | 同原生button组件hover-stay-time属性        |
| lang                 | String  | en           | 同原生button组件lang属性                   |
| sessionFrom          | String  | -            | 同原生button组件session-form属性           |
| sendMessageTitle     | String  | 当前标题      | 同原生button组件send-message-title属性     |
| sendMessagePath      | String  | 当前分享路径   | 同原生button组件send-message-path属性      |
| sendMessageImg       | String  | 截图          | 同原生button组件send-message-img属性       |
| showMessageCard      | Boolean | false        | 同原生button组件send-message-card属性      |
| bindrvclick          | Handler |              | 按钮在被点击时触发                          |
| bindgetuserinfo      | Handler |              | 同原生button组件bindgetuserinfo            |
| bindcontact          | Handler |              | 同原生button组件bindcontact                |
| bindgetphonenumber   | Handler |              | 同原生button组件bindgetphonenumber         |
| binderror            | Handler |              | 同原生button组件binderror                  |

[原生button组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)