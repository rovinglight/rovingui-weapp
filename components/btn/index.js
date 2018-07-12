Component({
    properties: {

    },
    data: {
        ripple: [],
        isHolding: false
    },
    methods: {
        handleTap: function (e) {
            console.log(this.properties)
            let coordinate = {
                ...e.detail,
                key: e.timeStamp
            }
            this.generateRipple(coordinate)
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