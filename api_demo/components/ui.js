module.exports = {
    type: 'folder',
    style: 'simple_list',
    fetch() {
        return [{
            title: '$ui.toast(title: string)',
            method: 'toast'
        }, {
            title: '$ui.alert(title: string, message: string)',
            method: 'alert'
        }, {
            title: '$ui.prompt(title:string, hint: string, value: string)',
            method: 'prompt'
        }, {
            title: '$ui.navTo()',
            method: 'navTo'
        }, {
            title: '$ui.openPrefs()',
            method: 'openPrefs'
        }]
    },
    toast(item) {
        $ui.toast('Hello World!')
    },
    async alert(item) {
        await $ui.alert('Dora Alert', 'Hello World')
        console.log('alert confirmed')
    },
    async prompt(item) {
        let name = await $ui.prompt('Dora Prompt', 'Input your name', '')
        $ui.toast(`Hello ${name}`)
    },
    navTo(item) {
        $ui.navTo($route.folder('index'))
    },
    openPrefs() {
        $ui.openPrefs()
    }
}