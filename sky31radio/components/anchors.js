module.exports = {
    style: 'icon',
    async fetch() {
        let resp = await $http.get('https://radio.sky31.com/api/anchor')
        return resp.data.map(anchor => {
            return {
                id: anchor.id,
                title: anchor.nickname,
                time: anchor.created_at,
                thumb: anchor.avatar,
                number: anchor.program_count,
                route: $route('programs', {
                    user_id: anchor.id
                })
            }
        })
    }
}