module.exports = {
  type: 'topTab',
  tabMode: 'fixed',
  fetch() {
    return [{
        title: '热门话题',
        route: $route('topics', {}),
        thumb: $icon('cake')
      }, {
        title: '科技动态',
        route: $route('news', { column: 'news' }),
        thumb: $icon('mood')
      }, {
        title: '开发者',
        route: $route('news', { column: 'technews' }),
        thumb: $icon('android')
      },
      {
        title: '区块链',
        route: $route('news', { column: 'blockchain' })
      }
    ]
  },
  onClick(item) {
    $ui.toast(`Clicked ${item.title}`)
  }
}
