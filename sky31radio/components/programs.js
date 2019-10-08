const querystring = require('querystring')
module.exports = {
    style: 'simple',
    async fetch({ page, args }) {
        let params = {
            page: page || 1
        }
        Object.assign(params, args)
        console.log(params)
        let query = querystring.stringify(params)
        let resp = await $http.get(`https://radio.sky31.com/api/program?${query}`)
        let items = resp.data.data.map(program => {
            return {
                id: program.id,
                title: program.title,
                time: program.created_at,
                thumb: program.cover || program.thumbnail,
                route: program.audio ? $route('@audio', {
                    id: program.audio.id,
                    url: program.audio.src
                }) : null
            }
        })
        return {
            nextPage: resp.data.current_page + 1,
            items: items
        }
    }
}