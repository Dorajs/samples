module.exports = {
    type: 'folder',
    style: 'simple',
    async fetch() {
        return [{
            title: 'Hello'
        }, {
            title: 'World'
        }]
    }
}