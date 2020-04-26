const fs = require('fs')
module.exports = {
  type: 'list',
  fetch() {
    console.log(process.cwd())
    let json = fs.readFileSync('assets/icons.json')
    let icons = JSON.parse(json)
    return icons.map(name => {
      return {
        id: name,
        title: name,
        style: 'icon',
        image: $icon(name, this.color()),
        onClick: (item) => {
          $clipboard.text = `$icon('${item.id}', '${this.color()}')`
          $ui.toast('已复制到剪切板')
        }
      }
    })
  },
  beforeCreate() {
    console.log($storage.all())
    this.actions = [{
      title: 'Set color',
      onClick: async (menu) => {
        console.log(menu)
        console.log(this)
        let color = await $input.prompt({
          title: 'Set color',
          hint: 'color',
          value: this.color()
        })
        $storage.put('icon_color', color)
        this.refresh()
      },
      asAction: true
    }]
  },
  color() {
    return $storage.get('icon_color') || 'black'
  }
}
