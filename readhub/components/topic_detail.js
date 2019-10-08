module.exports = {
    type: 'article',
    async fetch({ args }) {
        let resp = await $http.get(`https://api.readhub.cn/topic/${args.id}`)
        let data = resp.data
        return {
            url: `https://readhub.cn/topic/${args.id}`,
            link: `https://readhub.cn/topic/${args.id}`,
            content: data.summary,
            title: data.title,
            time: data.createdAt
        }
    }
}