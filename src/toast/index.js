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
            this.triggerEvent('toastclose', e)
        }
    }
})