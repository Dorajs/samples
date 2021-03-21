module.exports = {
  type: 'article',
  title: '欢迎使用 Dora.js，官网：https://dorajs.com/',
  image: 'https://www.wangbase.com/blogimg/asset/201909/bg2019091201.jpg',
  async fetch() {
    const resp = await $axios.get('https://docs.dorajs.com/README.md')
    return {
      content: {
        markdown: resp.data,
        charset: 'utf-8'
      },
    }
  }
}
