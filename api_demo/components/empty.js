module.exports = {
  type: 'article',
  fetch() {
    return {
      content: {
        text: 'Hello world!'
      }
    }
  }
}
