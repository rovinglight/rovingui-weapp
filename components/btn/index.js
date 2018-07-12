Component({
    externalClasses: ['ext-class'],
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
        raised : {
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
            console.log(e)
            if (!this.data.disabled) {
                let x = e.detail.x - e.target.offsetLeft
                let y = e.detail.y - e.target.offsetTop
                let coordinate = {
                    x: x,
                    y: y,
                    key: e.timeStamp
                }
                this.generateRipple(coordinate)
            }
            console.log(JSON.parse(JSON.stringify(this.data.ripple)))
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
                console.log(JSON.parse(JSON.stringify(this.data.ripple)))
            }, 190)
        }
    }
})