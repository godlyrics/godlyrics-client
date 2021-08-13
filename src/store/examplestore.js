export default {
  state: {
    example: 0
  },
  mutation: {
    updateExample (state, exampleData) {
      state.example = exampleData
    }
  }
}
