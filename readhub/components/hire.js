module.exports = {
    type: 'folder',
    style: 'article',
    async fetch({ page }) {
        let resp = await $http.get(`https://api.readhub.cn/jobs?lastCursor=${page || ''}&pageSize=${this.pageSize}`)
        let list = resp.data.data
        let items = list.map(data => {
            let cities = Object.keys(data.cities).join('、')
            let jobCnt = 0
            Object.keys(data.cities).forEach(key => {
                jobCnt += data.cities[key]
            })
        
            return {
                id: data.id,
                time: data.publishDate,
                title: data.jobTitle,
                link: data.mobileUrl,
                author: {
                    name: data.authorName
                },
                summary: `${cities} 等地共更新了 ${jobCnt} 个职位，待遇集中在 ${data.salaryLower}-${data.salaryUpper}k, 一般要求 ${data.experienceLower}-${data.experienceUpper} 年经验`,
                route: $route('jobs', {
                    id: data.id,
                    jobs: data.jobsArray
                })
            }
        })
        let nextPage = null
        if (list.length > 0) {
            let publishDate = list[list.length - 1].publishDate
            nextPage = Date.parse(publishDate)
        }
        return {
            nextPage: nextPage,
            items: items
        }
    }
}