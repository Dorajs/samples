module.exports = {
    type: 'folder',
    style: 'simple',
    async fetch() {
        return [{
            title: 'component',
            route: $route.folder('component')
        }, {
            title: 'File system',
            route: $route.folder('file', {
                path: '/'
            })
        }, {
            title: '$ui',
            route: $route.folder('ui')
        }, {
            title: 'icon',
            route: $route.folder('icons')
        }]
    }
}