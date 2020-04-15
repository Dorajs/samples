module.exports = {
  type: 'topTab',
  actions: [
    {
      title: 'tabMode',
      onClick: async function () {
        const option = await $input.select({
          title: '选择 tabMode',
          options: [
            {
              title: 'fixed',
              value: 'fixed'
            },
            {
              title: 'scrollable',
              value: 'scrollable'
            }
          ]
        })
        this.tabMode = option.value
      }
    }
  ],
  items: [
    {
      title: 'Tab 1',
      route: $route('empty')
    },
    {
      title: 'Tab  2',
      route: $route('empty')
    },
    {
      title: 'Tab  3',
      route: $route('empty')
    },
    {
      title: 'Tab  4',
      route: $route('empty')
    }
  ]
}
