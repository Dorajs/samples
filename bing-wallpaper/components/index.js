const WonderfulBingWallpaper = require('wonderful-bing-wallpaper')
const wbw = new WonderfulBingWallpaper({
  size: 10,
  local: 'zh-CN'
})
module.exports = {
  type: 'list',
  async fetch({ args }) {
    let json = await wbw.getWallpapers()
    let wallpapers = wbw.humanizeWallpapers(json)
    console.log(wallpapers)
    return wallpapers.map(item => {
      return {
        title: item.bsTitle,
        thumb: item.humanizeUrl,
        style: 'gallery',
        summary: item.copyright,
        route: $route('@image', {
          url: item.humanizeUrl
        })
      }
    })
  },
  onClick(item) {
    $ui.toast(`Clicked ${item.title}`)
  }
}
