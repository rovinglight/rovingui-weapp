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
        rvToast.show(`第${this.data.index}条推送通知`, {
            duration: null,
            onClose: () => console.log('close'),
            onClick: () => console.log('clicked')
        })
        this.setData({
            index: this.data.index + 1
        })
    },
    clearToast: function () {
        rvToast.clear()
    }
})