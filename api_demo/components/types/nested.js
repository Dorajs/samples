module.exports = {
  type: 'drawer',
  items: [
    {
      title: '-> bottomTab > topTab',
      route: $route('@bottomTab', {
        items: [
          {
            title: 'topTab',
            image: $icon('favorite_border'),
            route: $route('types/topTab')
          },
          {
            title: 'Tab 2',
            image: $icon('feedback'),

            route: $route('empty')
          },
          {
            title: 'Tab 3',
            image: $icon('home'),
            route: $route('empty')
          }
        ]
      })
    },
    {
      title: '> bottomTab',
      route: $route('types/bottomTab')
    },
    {
      title: '> topTab',
      route: $route('types/topTab')
    }
  ]
}
