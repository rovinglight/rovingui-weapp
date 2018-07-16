module.exports = Behavior({
  properties: {
    loading: Boolean,
    openType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    lang: {
      type: String,
      value: 'en'
    },
    sessionFrom: {
      type: String,
      value: ''
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: String
  },
  methods: {
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact({ detail = {} } = {}) {
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent('getphonenumber', detail);
    },
    binderror({ detail = {} } = {}) {
      this.triggerEvent('error', detail);
    }
  }
});
