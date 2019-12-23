module.exports = {
  type: 'bottomTab',
  title: 'API Demo',
  async fetch({ args, page }) {
    return [
      {
        title: '组件',
        route: $route('component'),
        thumb: $assets('component.svg')
      },
      {
        title: '全局函数',
        route: $route('global'),
        thumb: $assets('global.svg')
      },
      {
        title: 'icons',
        route: $route('icons'),
        thumb: $icon('mood')
      },
      {
        title: '更多',
        route: $route('more'),
        thumb: $icon('more_vert')
      }
    ]
  }
}
