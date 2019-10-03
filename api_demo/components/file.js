const fs = require('fs')
const path = require('path')
module.exports = {
    type: 'folder',
    style: 'simple_list',
    beforeCreate() {
        console.log(this)
        this.title = 'Files'
        this.subtitle = this.args.path
    },
    fetch() {
        console.log(`list files in : ${this.args.path}`)
        const items = fs.readdirSync(this.args.path).map(name => {
            const file = path.resolve(this.args.path, name)
            const stat = fs.statSync(file)
            return {
                title: name,
                thumb: stat.isDirectory() ? $icon('folder', 'yellow') : $icon('insert_drive_file', 'black'),
                route: stat.isDirectory() ? $route.folder('file', { path: file }) : null
            }
        })
        return items
    }
}