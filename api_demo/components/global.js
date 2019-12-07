module.exports = {
  fetch() {
    return [{
      title: '$assets',
      route: $route('@image', {
        summary: "$assets('nokia.jpeg')",
        url: $assets('nokia.jpeg'),
        author: {
          avatar: 'https://images.unsplash.com/profile-1559352348408-f8710c0ac313?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
          name: 'Steve Halama',
          url: 'https://unsplash.com/@steve3p_0'
        }
      })
    }, {
      title: '$ui.toast(title: string)',
      onClick: () => {
        $ui.toast('Hello World!')
      }
    }, {
      title: '$ui.alert( message: string)',
      onClick: async () => {
        await $ui.alert('Hello World')
        console.log('alert finished')
      }
    }, {
      title: '$ui.confirm(title: string, message: string)',
      onClick: async () => {
        let ok = await $ui.confirm('Confirmation', 'Are you sure?')
        $ui.toast(`ok=${ok}`)
      }
    }, {
      title: '$ui.prompt(title: string, hint: string, value: string)',
      onClick: async () => {
        let name = await $ui.prompt('Dora.js Prompt', 'Input your name', '')
        $ui.toast(`Hello ${name}`)
      }
    }, {
      title: '$ui.select(title: string, options: [])',
      onClick: async () => {
        let option = await $ui.select('Dora.js select', [{
          id: 'option2',
          title: 'Option 1'
        }, {
          id: 'option2',
          title: 'Option 2'
        }])
        $ui.toast(`Selected ${option.title}`)
      }
    }, {
      title: '$ui.navTo()',
      onClick: () => {
        $ui.navTo($route('index'))
      }
    }, {
      title: '$ui.openPrefs()',
      onClick: () => {
        $ui.openPrefs()
      }
    }]
  }
}
