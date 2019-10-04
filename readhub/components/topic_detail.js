module.exports = {
    type: 'article',
    async fetch() {
        let resp = await $http.get(`https://api.readhub.cn/topic/${this.args.id}`)
        let data = resp.data
        return {
            url: `https://readhub.cn/topic/${this.args.id}`,
            link: `https://readhub.cn/topic/${this.args.id}`,
            content: data.summary,
            title: data.title,
            time: data.createdAt
        }
    }
}