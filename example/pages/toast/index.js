import rvToastFactory from "../../components/toast/toast"
let rvToast = {}

Page({
    data: {
        index: 0
    },
    onLoad: function () {
        rvToast = rvToastFactory(this)
    },
    handleClick: function (e) {
        let type = e.target.dataset.type
        let display = e.target.dataset.display
        const config = {
            default: {},
            lastOneSec: {
                duration: 1000
            },
            permanent: {
                duration: null
            },
            callbackOnClose: {
                onClose: () => {
                    rvToast.show("我是关闭后触发的回调")
                }
            },
            callbackOnClick: {
                onClick: () => {
                    rvToast.show("我是点击时触发的回调")
                }
            }
        }
        rvToast.show(display, config[type])
        this.setData({
            index: this.data.index + 1
        })
    },
    clearToast: function () {
        rvToast.clear()
    }
})