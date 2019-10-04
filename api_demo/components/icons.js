const fs = require('fs')
module.exports = {
    style: 'simple',
    fetch() {
        let json = fs.readFileSync('assets/icons.json')
        let icons = JSON.parse(json)
        return icons.map(name => {
            return {
                id: name,
                title: `$icon('${name}', '${this.color()}')`,
                thumb: $icon(name, this.color()),
                method: 'copy'
            }
        })
    },
    created() {
        console.log($storage.all())
        this.menus = [{
            title: 'Set color',
            method: 'setColor',
            expand: true
        }]
    },
    copy(item) {
        $clipboard.text = `$icon('${item.id}', '${this.color()}')`
        $ui.toast('已复制到剪切板')
    },
    color() {
        return $storage.get('icon_color') || 'black'
    },
    async setColor() {
        let color = await $ui.prompt('Set color', 'color', this.color())
        $storage.put('icon_color', color)
        this.refresh()
    },
}