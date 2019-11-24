module.exports = {
  type: 'folder',
  style: 'simple',
  async fetch() {
    return [{
      title: 'Hello World!',
      style: 'simple'
    }, {
      title: 'icon',
      style: 'icon',
      thumb: $icon('face')
    }]
  }
}
