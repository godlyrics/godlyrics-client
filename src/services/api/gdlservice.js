import axios from 'axios'

export default {
  create: (url, data) => axios.post(url, data),
  getData: (url) => {
    return (
      axios.get(url, {
        transformResponse: [
          function (data) {
            return data ? data === 'Result is empty !' ? data : JSON.parse(data) : data
          }]
      })
    )
  },
  update: (url, data) => axios.put(url, data),
  delete: (url) => axios.delete(url)
}
