module.exports = {
    type: 'folder',
    style: 'bottom_tab',
    fetch() {
        return [{
                title: '热门话题',
                route: $route.folder('topics', {}),
                thumb: $icon('cake')
            }, {
                title: '科技动态',
                route: $route.folder('news', { column: 'news' }),
                thumb: $icon('mood')
            }, {
                title: '开发者',
                route: $route.folder('news', { column: 'technews' }),
                thumb: $icon('android')
            },
            {
                title: '区块链',
                route: $route.folder('news', { column: 'blockchain' })
            },
            {
                title: '招聘行情',
                route: $route.folder('hire', {}),
                thumb: $icon('plus_one')
            }

        ]
    },
    onClick(item) {
        $ui.toast(`Clicked ${item.title}`)
    }
}