module.exports = {
    type: 'folder',
    style: 'simple_list',
    async fetch() {
        return [{
            title: 'File system',
            route: $route.folder('file', {
                path: '/'
            })
        }, {
            title: 'component',
            route: $route.folder('component')
        }, {
            title: '$ui',
            route: $route.folder('ui')
        }]
    }
}