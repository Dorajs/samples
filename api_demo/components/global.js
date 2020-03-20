module.exports = {
  fetch() {
    return [
      // global
      {
        title: 'global',
        style: 'category'
      },
      {
        title: '$assets()',
        summary: '$assets(path: string)',
        onClick: () => {
          $ui.toast($assets('nokia.jpeg'))
        }
      },
      {
        title: '$icon()',
        summary: '$icon(name: string, color: string|null)',
        onClick: () => {
          $ui.toast($icon('ic_settings', 'black'))
        }
      },
      {
        title: '$route()',
        summary: '$route(path: string, data: object)',
        onClick: () => {
          $ui.toast(JSON.stringify($route('index', { id: 1 })))
        }
      },

      // $ui
      {
        title: '$ui',
        style: 'category'
      },
      {
        title: 'toast()',
        summary: '$ui.toast(title: string)',
        onClick: () => {
          $ui.toast('Hello World!')
        }
      },
      {
        title: 'alert()',
        summary: '$ui.alert(message: string)',
        onClick: async () => {
          await $ui.alert('Hello World')
          console.log('alert finished')
        }
      },

      // $input
      {
        title: '$input',
        style: 'category'
      },
      {
        title: 'confirm()',
        summary: '$input.confirm(data: object)',
        onClick: async () => {
          let ok = await $input.confirm({
            title: 'Confirmation',
            message: 'Are you sure?',
            okBtn: 'okBtn'
          })
          $ui.toast(`ok=${ok}`)
        }
      }, {
        title: 'prompt()',
        summary: '$input.prompt(data: object)',
        onClick: async () => {
          let name = await $input.prompt({
            title: 'Dora.js prompt',
            hint: 'Input your name',
            value: ''
          })
          $ui.toast(`Hello ${name}`)
        }
      }, {
        title: 'select()',
        summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: 'Dora.js select',
            options: [{
              id: 'option2',
              title: 'Option 1'
            }, {
              id: 'option2',
              title: 'Option 2'
            }]
          })
          $ui.toast(`Selected ${JSON.stringify(selected)}`)
        }
      }, {
        title: 'select() mutliple',
        summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: 'Dora.js select',
            multiple: true,
            options: [{
              id: 'option2',
              title: 'Option 1'
            }, {
              id: 'option2',
              title: 'Option 2'
            }]
          })
          $ui.toast(`Selected ${JSON.stringify(selected)}`)
        }
      },
      // $router
      {
        title: '$router',
        style: 'category'
      },
      {
        title: 'to()',
        summary: '$router.to(route: Route)',
        onClick: () => {
          $router.to($route('index'))
        }
      },

      // $prefs
      {
        title: '$prefs',
        style: 'category'
      },
      {
        title: 'open()',
        summary: '$prefs.open()',
        onClick: () => {
          $prefs.open()
        }
      },
      {
        title: 'get()',
        summary: '$prefs.get(key: string): any',
        onClick: () => {
          this.dump($prefs.get('name'))
        }
      },
      {
        title: 'set()',
        summary: '$prefs.set(key: string, value: any)',
        onClick: () => {
          $prefs.set('name', 'Dora.js')
          this.dump($prefs.get('name'))
        }
      },
      {
        title: 'all()',
        summary: '$prefs.all(): object',
        onClick: () => {
          this.dump($prefs.all())
        }
      },

      // $storage
      {
        title: '$storage',
        style: 'category'
      },
      {
        title: 'get()',
        summary: '$storage.get(key: string): any',
        onClick: () => {
          this.dump($storage.get('author'))
        }
      },
      {
        title: 'put()',
        summary: '$storage.put(key: string, value: any)',
        onClick: () => {
          $storage.put('author', {
            name: 'linroid',
            github: 'https://github.com/linroid'
          })
          this.dump($storage.get('author'))
        }
      },
      {
        title: 'all()',
        summary: '$storage.all(): object',
        onClick: () => {
          this.dump($storage.all())
        }
      },
      // $dora
      {
        title: '$dora',
        style: 'category'
      },
      {
        title: 'addons()',
        summary: '$dora.addons(): Promise<Addon[]>',
        onClick: async () => {
          const addons = await $dora.addons()
          $ui.showCode(JSON.stringify(addons, null, '  '))
        }
      },
      {
        title: 'install()',
        summary: '$dora.install(): Promise<Addon | null>',
        onClick: async () => {
          const result = await $dora.install("npm://@dora.js/unsplash")
          $ui.toast(`install result: ${result}`)
        }
      },
      {
        title: 'uninstall()',
        summary: '$dora.uninstall(uuid: string): Promise<Boolean>',
        onClick: async () => {
          const result = await $dora.uninstall("2f33d8de-c474-4f38-a19b-cf2cab4228cc")
          $ui.toast(`uninstall result: ${result}`)
        }
      },
      {
        title: 'isInstalled()',
        summary: '$dora.isInstalled(uuid: string): Boolean',
        onClick: () => {
          const result = $dora.isInstalled("2f33d8de-c474-4f38-a19b-cf2cab4228cc")
          $ui.toast(`is installed: ${result}`)
        }
      },
      {
        title: 'subscribe()',
        summary: '$dora.subscribe(userId: string): Promise<Boolean>',
        onClick: async () => {
          const result = await $dora.subscribe("linroid")
          $ui.toast(`subscribe result: ${result}`)
        }
      },
      {
        title: 'isSubscribed()',
        summary: '$dora.isSubscribed(userId: string): Boolean',
        onClick: () => {
          const result = $dora.isSubscribed("linroid")
          $ui.toast(`is subscribed: ${result}`)
        }
      }
    ]
  },
  dump(data) {
    $ui.toast(JSON.stringify(data, null, '  '))
  }
}
