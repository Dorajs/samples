module.exports = {
  type: 'video',
  title: '示例视频',
  danmuScheduler: null,
  fetch() {
    return {
      url: 'http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/gear5/prog_index.m3u8',
      thumb: 'https://goss.veer.com/creative/vcg/veer/800water/veer-310433275.jpg'
    }
  },
  startDanmaku() {
    console.log('startDanmaku')
    var seq = 0
    this.danmuScheduler = setInterval(() => {
      seq++;
      this.addDanmaku({
        nick: '测试消息',
        content: `Danmaku ${seq}`
      })
    }, 100)
  },
  stopDanmaku() {
    console.log('stopDanmaku')
    clearInterval(this.danmuScheduler)
  },
  sendDanmaku(message) {
    $ui.toast(`send ${message}`)
  }
}
