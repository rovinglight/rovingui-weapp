import rvToastClass from "../../components/toast/toast"
let rvToast = {}

Page({
    data: {
        
    },
    onLoad: function () {
        rvToast = new rvToastClass(this)
    },
    handleClick: function (e) {
        rvToast.show('test', {
            cb: () => console.log('test')
        })
    },
    clearToast: function () {
        rvToast.clear()
    }
})