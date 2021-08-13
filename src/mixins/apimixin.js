export default {
  data: () => ({
    callBack: null,
    currentUrl: '',
    requestData: {},
    requestType: ''
  }),
  methods: {
    getData: function(path, callBack) {
      if (path) {
        this.requestType = 'GET'
        this.callBack = (data) => {
          this.currentUrl = ''
          if (data && callBack)
            callBack(data)
        }
        this.currentUrl = process.env.API_URL_GDL + path
      }
    },
    postData: function(path, data, callBack) {
      if (path) {
        this.requestType = 'POST'
        this.requestData = data

        this.callBack = (data) => {
          this.currentUrl = ''
          if (data && callBack)
            callBack(data)
        }
        this.currentUrl = process.env.API_URL_GDL + path
      }
    },
    putData: function(path, data, callBack) {
      if (path) {
        this.requestType = 'PUT'
        this.requestData = data

        this.callBack = (data) => {
          this.currentUrl = ''
          if(data && callBack)
            callBack(data)
        }
        this.currentUrl = process.env.API_URL_GDL + path
      }
    },
    deleteData: function(path, callBack) {
      if (path) {
        this.requestType = 'DELETE'
        this.callBack = (data) => {
          this.currentUrl = ''
          if (data && callBack)
            callBack(data)
        }
        this.currentUrl = process.env.API_URL_GDL + path
      }
    }
  }
}
