module.exports = {
  type: 'list',
  async fetch({ page }) {
    let resp = await $http.get(`https://api.readhub.cn/topic?lastCursor=${page || ''}&pageSize=${this.pageSize}`)
    let list = resp.data.data
    let items = list.map(data => {
      return {
        id: data.id,
        time: data.createdAt,
        title: data.title,
        style: 'article',
        summary: data.summary,
        route: $route('topic_detail', {
          id: data.id
        })
      }
    })
    let nextPage = null
    if (list.length > 0) {
      nextPage = list[list.length - 1].order
    }
    return {
      nextPage: nextPage,
      items: items
    }
  }
}
