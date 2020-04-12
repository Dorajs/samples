module.exports = {
  type: "list",
  translucent: true,
  actions: [{
    title: '官网',
    route: $route('https://unsplash.com/')
  }],

  async fetch({ page }) {
    page = page || 1
    let quality = $prefs.get('quality')
    let photos = await unsplash.photos
      .listPhotos(page, 15, "latest")
      .then(res => res.json())
    return {
      nextPage: page + 1,
      items: photos.map(photo => {
        return this.convert(photo, quality)
      })
    }
  },

  convert(photo, quality) {
    return {
      title: photo.title,
      route: $route('@image', {
        url: photo.urls[quality]
      }),
      style: 'gallery',
      summary: photo.description || photo.alt_description,
      author: {
        name: photo.user.name,
        avatar: photo.user.profile_image.small,
        route: $route(photo.user.links.html)
      },
      image: photo.urls.small,
      color: photo.color,
      aspect: photo.width / photo.height
    }
  }
}
