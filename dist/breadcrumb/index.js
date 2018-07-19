Component({
    properties: {
        itemList: {
            type: Array,
            default: []
        }
    },
    methods: {
        handleTap: function (e) {
            console.log(e)
            let key = e.currentTarget.dataset.key
            this.triggerEvent('rvclick', {
                ...e,
                key
            })
        }
    }
})