const nativeButtonBehavior = require('./native-button-behaviors')

Component({
    externalClasses: ['ext-class'],
    behaviors: [nativeButtonBehavior],
    properties: {
        disabled: {
            type: Boolean,
            value: false
        },
        size: {
            type: String,
            value: 'default'
        },
        type: {
            type: String,
            value: 'default'
        },
        flat : {
            type: Boolean,
            value: false
        }
    },
    data: {
        ripple: [],
        isHolding: false
    },
    methods: {
        handleTap: function (e) {
            if (!this.data.disabled && !this.properties.loading) {
                let x = e.detail.x - e.target.offsetLeft
                let y = e.detail.y - e.target.offsetTop
                let coordinate = {
                    x: x,
                    y: y,
                    key: e.timeStamp
                }
                this.generateRipple(coordinate)
                this.triggerEvent('click')
            }
        },
        handleTouchStart: function (e) {
            this.setData({
                isHolding: true
            })
        },
        handleTouchEnd: function (e) {
            this.setData({
                isHolding: false
            })
        },
        generateRipple: function (coordinate) {
            let rippleList = this.data.ripple
            rippleList.push(coordinate)
            this.setData({
                ripple: rippleList
            })
            setTimeout(() => {
                rippleList = this.data.ripple
                rippleList = rippleList.filter(((ripple) => ripple.key !== coordinate.key))
                this.setData({
                    ripple: rippleList
                })
            }, 190)
        }
    }
})