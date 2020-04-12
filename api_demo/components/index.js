module.exports = {
  type: 'bottomTab',
  title: 'API Demo',
  async fetch({ args, page }) {
    return [
      {
        title: '组件',
        route: $route('component'),
        image: $assets('component.svg')
      },
      {
        title: '全局函数',
        route: $route('global'),
        image: $assets('global.svg')
      },
      {
        title: 'icons',
        route: $route('icons'),
        image: $icon('mood')
      },
      {
        title: '更多',
        route: $route('more'),
        image: $icon('more_vert')
      }
    ]
  }
}
