Component({
    properties: {
        toastList: {
            type: Array,
            default: []
        }
    },
    data: {
        
    },
    methods: {
        handleClose: function (e) {
            this.triggerEvent('toasthelper', {
                event: e,
                type: "closeTap"
            })
        },
        handleTapMsg: function (e) {
            this.triggerEvent('toasthelper', {
                event: e,
                type: "msgTap"
            })
        },
        handleLongPress: function (e) {
            this.triggerEvent('toasthelper', {
                event: e,
                type: "longPress"
            })
        },
        handleCloseAll: function (e) {
            this.triggerEvent('toasthelper', {
                event: e,
                type: "closeAll"
            })
        }
    }
})