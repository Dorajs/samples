module.exports = {
  type: 'folder',
  style: 'bottom_tab',
  fetch() {
    return [{
        title: '热门话题',
        route: $route('topics', {}),
        image: $icon('cake')
      }, {
        title: '科技动态',
        route: $route('news', { column: 'news' }),
        image: $icon('mood')
      }, {
        title: '开发者',
        route: $route('news', { column: 'technews' }),
        image: $icon('android')
      },
      {
        title: '区块链',
        route: $route('news', { column: 'blockchain' })
      },
      {
        title: '招聘行情',
        route: $route('hire', {}),
        image: $icon('plus_one')
      }

    ]
  },
  onClick(item) {
    $ui.toast(`Clicked ${item.title}`)
  }
}