module.exports = {
    type: 'folder',
    style: 'simple',
    async fetch() {
        return [{
            title: 'component',
            route: $route('component')
        }, {
            title: 'File system',
            route: $route('file', {
                path: '/'
            })
        }, {
            title: '$ui',
            route: $route('ui')
        }, {
            title: 'icons',
            route: $route('icons')
        }]
    }
}