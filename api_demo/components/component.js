module.exports = {
    type: 'folder',
    style: 'simple_list',
    async fetch() {
        return [{
            title: 'folder',
            route: $route.folder('types/folder')
        }, {
            title: 'video',
            route: $route.folder('types/video')
        }, {
            title: 'audio',
            route: $route.folder('types/audio')
        }, {
            title: 'article',
            route: $route.folder('types/article')
        }, {
            title: 'image',
            route: $route.folder('types/image')
        }, {
            title: 'this.title',
            method: 'updateTitle'
        }, {
            title: 'this.subtitle',
            method: 'updateSubtitle'
        }]
    },
    created() {
        this.menus = [
            {
                id: 'refresh',
                title: 'Update title',
                method: 'updateTitle',
                expand: true
            }
        ]
    },
    async updateTitle() {
        let newTitle = await $ui.prompt('Update title', 'new title', this.title)
        this.title = newTitle
    },
    async updateSubtitle() {
        let newSubtitle = await $ui.prompt('Update title', 'new subtitle', this.subtitle || '')
        this.subtitle = newSubtitle
    }
}