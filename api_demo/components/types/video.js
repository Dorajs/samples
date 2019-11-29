module.exports = {
  type: 'video',
  title: '示例视频',
  fetch() {
    return {
      url: 'http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/gear5/prog_index.m3u8',
      thumb: 'https://goss.veer.com/creative/vcg/veer/800water/veer-310433275.jpg'
    }
  }
}
