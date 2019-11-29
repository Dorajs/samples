module.exports = {
  type: 'list',
  menus: [{
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
      route: $route('@image', {
        url: 'https://raw.githubusercontent.com/linroid/dora-vscode/master/docs/explorer.png',
        summary: 'Dora 的 VSCode 开发插件',
        title: 'Dora vscode extension',
        link: 'https://github.com/linroid/dora-vscode',
        author: {
          name: 'linroid',
          avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4',
          route: $route('https://github.com/linroid')
        }
      })
    }]
  }
}
