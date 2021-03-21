module.exports = {
  type: 'list',
  fetch() {
    return [{
      title: 'File system',
      route: $route('file', {
        path: `/`
      })
    }]
  }
}
