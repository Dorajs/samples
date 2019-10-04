module.exports = {
    type: 'folder',
    style: 'simple',
    fetch() {
        return [{
            title: '$ui.toast(title: string)',
            method: 'toast'
        }, {
            title: '$ui.alert(title: string, message: string)',
            method: 'alert'
        }, {
            title: '$ui.confirm(title: string, message: string)',
            method: 'confirm'
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
    toast() {
        $ui.toast('Hello World!')
    },
    async alert() {
        await $ui.alert('Dora Alert', 'Hello World')
        console.log('alert finished')
    },
    async confirm() {
        let ok = await $ui.confirm('Confirmation', 'Are you sure?')
        $ui.toast(`ok=${ok}`)
    },
    async prompt() {
        let name = await $ui.prompt('Dora Prompt', 'Input your name', '')
        $ui.toast(`Hello ${name}`)
    },
    navTo() {
        $ui.navTo($route.folder('index'))
    },
    openPrefs() {
        $ui.openPrefs()
    }
}