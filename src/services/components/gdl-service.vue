<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import gdlservice from '../api/gdlservice'

export default {
  name: 'gdl-service',
  props: {
    url: {
      type: String,
      default: ''
    },
    callBack: {
      type: Function,
      default: () => {}
    },
    requestType: {
      type: String,
      default: ''
    },
    requestData: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      error: null,
      loading: false
    }
  },
  watch: {
    url: {
      immediate: true,
      handler (url) {
        if (this.url !== '') {
          this.requestListener()
        }
      }
    }
  },
  methods: {
    requestListener: function() {
      if(this.requestType === 'GET')
        this.getData()
      else if(this.requestType === 'POST')
        this.postData()
      else if(this.requestType === 'PUT')
        this.putData()
    },
    getData: function() {
      gdlservice.getData(this.url).then(response => {
        if(this.callBack)
          this.callBack(response.data)
      }).catch(error => {
        if(this.callBack)
          this.callBack(error)
      }).finally(() => this.loading = false)
    },
    postData: function() {
      gdlservice.create(this.url, this.requestData).then(response => {
        if(this.callBack)
          this.callBack(response.data)
      }).catch(error => {
        if(this.callBack)
          this.callBack(error)
      }).finally(() => this.loading = false)
    },
    putData: function() {
      gdlservice.update(this.url, this.requestData).then(response => {
        if(this.callBack)
          this.callBack(response.data)
      }).catch(error => {
        if(this.callBack)
          this.callBack(error)
      }).finally(() => this.loading = false)
    },
    deleteData: function() {
      gdlservice.delete(this.url).then(response => {
        if(this.callBack)
          this.callBack(response.data)
      }).catch(error => {
        if(this.callBack)
          this.callBack(error)
      }).finally(() => this.loading = false)
    }
  }
}
</script>

<style scoped>

</style>
