module.exports = {
    style: 'icon',
    async fetch() {
        let resp = await $http.get('https://radio.sky31.com/api/album')
        return resp.data.map(album => {
            return {
                id: album.id,
                title: album.name,
                time: album.created_at,
                thumb: album.cover,
                route: $route('programs', {
                    album_id: album.id
                })
            }
        })
    }
}