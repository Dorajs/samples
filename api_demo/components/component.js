module.exports = {
  type: 'list',
  async fetch() {
    return [{
      title: 'list',
      route: $route('types/list')
    }, {
      title: 'video',
      route: $route('types/video')
    }, {
      title: 'audio',
      route: $route('types/audio')
    }, {
      title: 'article',
      route: $route('types/article')
    }, {
      title: 'image',
      route: $route('types/image')
    }, {
      title: 'webview',
      route: $route('types/webview')
    }]
  }
}
