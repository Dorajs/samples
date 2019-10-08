module.exports = {
    type: 'folder',
    style: 'simple',
    async fetch() {
        return [{
            title: 'folder',
            route: $route('types/folder')
        }, {
            title: 'video',
            route: $route('@video', {
                url: 'http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/gear5/prog_index.m3u8',
                thumb: 'https://goss.veer.com/creative/vcg/veer/800water/veer-310433275.jpg'
            })
        }, {
            title: 'audio',
            route: $route('types/audio')
        }, {
            title: 'article',
            route: $route('@article', {
                url: 'https://dorajs.com/',
                title: 'Dora 官网'
            })
        }, {
            title: 'image',
            route: $route('@image', {
                url: 'https://raw.githubusercontent.com/linroid/dora-vscode/master/docs/explorer.png',
                summary: 'Dora 的 VSCode 开发插件',
                title: 'Dora vscode extension',
                link: 'https://github.com/linroid/dora-vscode',
                author: {
                    name: 'linroid',
                    avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4',
                    route: $route('https://github.com/linroid')
                }
            })
        }, {
            title: 'this.title',
            onClick: 'updateTitle'
        }, {
            title: 'this.subtitle',
            onClick: 'updateSubtitle'
        }]
    },
    created() {
        this.menus = [{
            id: 'refresh',
            title: 'Update title',
            onClick: 'updateTitle',
            asAction: true
        }]
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