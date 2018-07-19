const TOAST_LIST = "_rv_toast_list"

class rvToast {
    constructor (pageCtx) {
        this.pageCtx = pageCtx
        pageCtx.toastHelper = this.eventDistribution.bind(this)
        this.cbList = []
    }
    eventDistribution (payload) {
        let detail = payload.detail
        let type = detail.type
        let key = detail.event.currentTarget.dataset.key
        switch (type) {
            case "closeTap": {
                this.closeHandler(key)
                break
            }
            case "msgTap": {
                this.clickHandler(key)
                break
            }
            case "longPress": {
                this.pressHandler(key)
                break
            }
            case "closeAll": {
                this.clear()
                break
            }
        }
    }
    closeHandler (key) {
        let toastList = this.pageCtx.data[TOAST_LIST]
        toastList = toastList.filter(toast => toast.key !== key)
        this.pageCtx.setData({
            [TOAST_LIST]: toastList
        })
        let callBack = this.cbList.find(item => item.key === key)
        callBack.onClose && callBack.onClose()
    }
    clickHandler (key) {
        
    }
    pressHandler (key) {
        let toastList = this.pageCtx.data[TOAST_LIST]
        toastList = toastList.map((toast, index) => {
            if (toast.key !== key) {
                return toast
            }
            toast.closeAllShow = !Boolean(toast.closeAllShow)
            return toast
        })
        this.pageCtx.setData({
            [TOAST_LIST]: toastList
        })
    }
    show (message, config) {
        let toastList = this.pageCtx.data[TOAST_LIST] || []
        let date = new Date()
        let key = date.valueOf()
        let onClose = config.onClose
        let onClick = config.onClick
        let duration = config.duration === null ? null : config.duration || 4500
        toastList.push({
            key,
            message
        })
        this.pageCtx.setData({
            [TOAST_LIST]: toastList
        })
        this.cbList.push({
            key,
            onClose,
            onClick
        })
        if (duration) {
            setTimeout(() => {
                this.closeHandler(null, key)
            }, duration)
        }
    }
    clear () {
        this.pageCtx.setData({
            [TOAST_LIST]: []
        })
    }
}

module.exports = rvToast