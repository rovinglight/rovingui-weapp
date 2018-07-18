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
        callBack.cb && callBack.cb()
    }
    show (message, config) {
        let toastList = this.pageCtx.data[TOAST_LIST] || []
        let date = new Date()
        let key = date.valueOf()
        let cb = config.cb
        let duration = config.duration
        toastList.push({
            key,
            message
        })
        this.pageCtx.setData({
            _rv_toast_list: toastList
        })
        this.cbList.push({
            key,
            cb
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