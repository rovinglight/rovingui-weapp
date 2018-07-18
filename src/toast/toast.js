const TOAST_LIST = "_rv_toast_list"

class rvToast {
    constructor (pageCtx) {
        this.pageCtx = pageCtx
        pageCtx.handleToastClose = this.closeHandler.bind(this)
        this.cbList = []
    }
    closeHandler (e, toastKey) {
        let key = toastKey || e.detail.currentTarget.dataset.key
        let toastList = this.pageCtx.data[TOAST_LIST]
        toastList = toastList.filter(toast => toast.key !== key)
        this.pageCtx.setData({
            [TOAST_LIST]: toastList
        })
        let callBack = this.cbList.find(item => item.key === key)
        callBack.onClose && callBack.onClose()
    }
    show (message, config) {
        let toastList = this.pageCtx.data[TOAST_LIST] || []
        let date = new Date()
        let key = date.valueOf()
        let onClose = config.onClose
        let onClick = config.onClick
        let duration = config.duration === null ? null : config.duration || 4500
        console.log(duration)
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