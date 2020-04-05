module.exports = {
  type: 'list',
  async fetch() {
    return [{
      title: 'list',
      summary: '列表组件',
      route: $route('types/list')
    }, {
      title: 'video',
      summary: '视频组件',
      route: $route('types/video')
    }, {
      title: 'audio',
      summary: '音频组件',
      route: $route('types/audio')
    }, {
      title: 'article',
      summary: '文章组件',
      route: $route('types/article')
    }, {
      title: 'image',
      summary: '图片组件',
      route: $route('types/image')
    }, {
      title: 'webview',
      summary: '浏览器组件',
      route: $route('types/webview')
    }]
  }
}
