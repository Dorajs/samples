module.exports = {
  type: 'article',
  async fetch({ args }) {
    let resp = await $http.get(`https://api.readhub.cn/topic/${args.id}`)
    let data = resp.data
    return {
      content: {
        url: `https://readhub.cn/topic/${args.id}`,
        text: data.summary
      },
      title: data.title,
      time: data.createdAt
    }
  }
}
