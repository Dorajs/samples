module.exports = {
    type: 'folder',
    style: 'simple_list',
    async fetch() {
        return [{
            title: 'Hello'
        }, {
            title: 'World'
        }]
    }
}