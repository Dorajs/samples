module.exports = {
  type: 'list',
  translucent: true,
  async fetch({ page }) {
    let quality = $prefs.get('quality')
    let photos = await unsplash.photos.listPhotos(page || 1, 15, "latest")
      .then(res => res.json())
    return {
      nextPage: (page || 1) + 1,
      items: photos.map((item) => {
        let image_url = item.urls.regular;
        if (quality == 'full') {
          image_url = item.urls.full
        } else if (quality == 'raw') {
          image_url = item.urls.raw
        }
        return {
          title: item.description,
          route: $route('@image', {
            url: image_url,
            color: item.color,
            aspect: (item.width * 1.0 / item.height).toFixed(3),
          }),
          style: 'gallery',
          summary: item.description || item.alt_description,
          author: {
            name: item.user.name,
            avatar: item.user.profile_image.medium,
            route: $route(item.user.links.html)
          },
          thumb: item.urls.small,
          color: item.color,
          aspect: (item.width * 1.0 / item.height).toFixed(3)
        }
      })
    }
  }
}
