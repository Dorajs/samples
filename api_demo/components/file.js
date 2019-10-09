const fs = require('fs')
const path = require('path')
module.exports = {
    type: 'folder',
    style: 'simple',
    beforeCreate() {
        console.log(this)
        this.title = 'Files'
        this.subtitle = this.route.args.path
    },
    fetch({args}) {
        console.log(`list files in : ${args.path}`)
        const items = fs.readdirSync(args.path).map(name => {
            const file = path.resolve(args.path, name)
            const stat = fs.statSync(file)
            return {
                title: name,
                image: stat.isDirectory() ? $icon('folder', 'yellow') : $icon('insert_drive_file', 'black'),
                route: stat.isDirectory() ? $route('file', { path: file }) : null
            }
        })
        return items
    }
}