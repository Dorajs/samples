const fs = require('fs')
module.exports = {
  style: 'simple',
  fetch() {
    let json = fs.readFileSync('assets/icons.json')
    let icons = JSON.parse(json)
    return icons.map(name => {
      return {
        id: name,
        title: name,
        image: $icon(name, this.color()),
        onClick: this.copy
      }
    })
  },
  created() {
    console.log($storage.all())
    this.menus = [{
      title: 'Set color',
      onClick: this.setColor,
      asAction: true
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