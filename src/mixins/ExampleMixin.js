export default {
  data: () => ({
    count: 0
  }),
  methods: {
    increment () {
      this.count++
    }
  },
  computed: {
    double () {
      return this.count * 2
    }
  }
}
