module.exports = {
  type: 'top_tab',
  async fetch() {
    return [{
      title: '节目',
      route: $route('programs')
    }, {
      title: '专题',
      route: $route('albums')
    }, {
      title: '主播',
      route: $route('anchors')
    }]
  },
  onClick(item) {
    $ui.toast(`Clicked ${item.title}`)
  }
}
