module.exports = {
  type: 'list',
  actions: [{
    id: 'update_menu',
    title: 'Menu',
    onClick: async () => {
      let newTitle = await $ui.prompt('Update title', 'new title', this.title)
      this.title = newTitle
    },
    asAction: false
  }],
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
