const WonderfulBingWallpaper = require('wonderful-bing-wallpaper')
const wbw = new WonderfulBingWallpaper({
  size: 10,
  local: 'zh-CN'
})
module.exports = {
  type: 'list',
  translucent: true,
  async fetch({ args, page }) {
    let json = await wbw.getWallpapers()
    let wallpapers = wbw.humanizeWallpapers(json)
    console.log(wallpapers)
    return wallpapers.map(item => {
      return {
        title: item.bsTitle,
        image: item.humanizeUrl,
        style: 'gallery',
        summary: item.copyright,
        route: $route('@image', {
          url: item.humanizeUrl,
          title: item.bsTitle
        })
      }
    })
  },
  onClick(item) {
    $ui.toast(`Clicked ${item.title}`)
  }
}
