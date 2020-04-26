module.exports = {
  type: 'bottomTab',
  title: 'API Demo',
  items: [
    {
      title: '组件',
      route: $route('component'),
      image: $assets('component.svg')
    },
    {
      title: '全局 API',
      route: $route('api'),
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
