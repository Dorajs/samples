module.exports = {
  fetch() {
    return [
      // $ui
      {
        title: '$ui',
        style: 'category'
      },
      {
        title: '显示一个 Toast 消息',
        summary: '$ui.toast(title: string)',
        onClick: () => {
          $ui.toast('Hello World!')
        }
      },
      {
        title: '显示一个弹窗警告',
        summary: '$ui.alert(message: string)',
        onClick: async () => {
          await $ui.alert('Hello World')
          console.log('alert finished')
        }
      },
      {
        title: '打开浏览器',
        summary: '$ui.browser(url: string)',
        onClick: () => {
          $ui.browser('https://www.npmjs.com/')
        }
      },
      {
        title: '查看一个 npm 用户',
        summary: '$ui.viewUser(userId: string)',
        onClick: () => {
          $ui.viewUser('linroid')
        }
      },
      // $input
      {
        title: '$input',
        style: 'category'
      },
      {
        title: '显示一个确认弹窗',
        summary: '$input.confirm(params: ConfirmParams)',
        onClick: async () => {
          let ok = await $input.confirm({
            title: 'Confirmation',
            message: 'Are you sure?',
            okBtn: 'okBtn'
          })
          $ui.toast(`ok=${ok}`)
        }
      },
      {
        title: '请求输入文本',
        summary: '$input.text(params: InputParams)',
        onClick: async () => {
          let name = await $input.prompt({
            title: '输入姓名',
            hint: '姓名',
            value: ''
          })
          $ui.toast(`Hello ${name}`)
        }
      },
      {
        title: '请求输入数字',
        summary: '$input.text(params: InputParams)',
        onClick: async () => {
          let age = await $input.number({
            title: '输入年龄',
            hint: '年龄',
            value: ''
          })
          $ui.toast(`年龄: ${age}`)
        }
      },
      {
        title: '请求输入密码',
        summary: '$input.password(params: InputParams)',
        onClick: async () => {
          let age = await $input.password({
            title: '输入密码',
            hint: '密码',
            value: ''
          })
          $ui.toast(`密码: ${age}`)
        }
      },
      {
        title: '进行单项选择',
        summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: 'Dora.js select',
            options: [
              {
                id: 'option2',
                title: 'Option 1'
              },
              {
                id: 'option2',
                title: 'Option 2'
              }
            ]
          })
          $ui.toast(`Selected ${JSON.stringify(selected)}`)
        }
      },
      {
        title: '进行多项选择',
        summary: '$input.select(data: object)',
        onClick: async () => {
          let selected = await $input.select({
            title: 'Dora.js select',
            multiple: true,
            options: [
              {
                id: 'option2',
                title: 'Option 1'
              },
              {
                id: 'option2',
                title: 'Option 2'
              }
            ]
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
        title: '跳转指定路由',
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
        title: '打开配置页',
        summary: '$prefs.open()',
        onClick: () => {
          $prefs.open()
        }
      },
      {
        title: '获取一个配置值',
        summary: '$prefs.get(key: string): any',
        onClick: () => {
          this.dump($prefs.get('name'))
        }
      },
      {
        title: '设置一个配置',
        summary: '$prefs.set(key: string, value: any)',
        onClick: () => {
          $prefs.set('name', 'Dora.js')
          this.dump($prefs.get('name'))
        }
      },
      {
        title: '获取所有配置',
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
        title: '获取一个值',
        summary: '$storage.get(key: string): any',
        onClick: () => {
          this.dump($storage.get('author'))
        }
      },
      {
        title: '设置一个值',
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
        title: '删除一个值',
        summary: '$storage.remove(key: string)',
        onClick: () => {
          $storage.remove('author')
          this.dump($storage.get('author'))
        }
      },
      {
        title: '获取所有存储值',
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
        title: '获取已安装的扩展列表',
        summary: '$dora.addons(): Promise<Addon[]>',
        onClick: async () => {
          const addons = await $dora.addons()
          $ui.showCode(JSON.stringify(addons, null, '  '))
        }
      },
      {
        title: '安装一个扩展',
        summary: '$dora.install(url: Url): Promise<Addon | null>',
        onClick: async () => {
          const result = await $dora.install('npm://@dora.js/unsplash')
          $ui.toast(`install result: ${result}`)
        }
      },
      {
        title: '卸载一个扩展',
        summary: '$dora.uninstall(uuid: string): Promise<boolean>',
        onClick: async () => {
          const addons = await $dora.addons()
          const item = await $input.select({
            title: '卸载哪一个？',
            options: addons.map(addon => ({
              title: addon.displayName,
              uuid: addon.uuid
            }))
          })
          const result = await $dora.uninstall(item.uuid)
          $ui.toast(`uninstall result: ${result}`)
        }
      },
      {
        title: '判断是否安装指定扩展',
        summary: '$dora.isInstalled(uuid: string): boolean',
        onClick: () => {
          const result = $dora.isInstalled(
            '2f33d8de-c474-4f38-a19b-cf2cab4228cc'
          )
          $ui.toast(`is installed: ${result}`)
        }
      },
      {
        title: '订阅一个用户',
        summary: '$dora.subscribe(userId: string): Promise<boolean>',
        onClick: async () => {
          const result = await $dora.subscribe('linroid')
          $ui.toast(`subscribe result: ${result}`)
        }
      },
      {
        title: '检查是否订阅了这个用户',
        summary: '$dora.isSubscribed(userId: string): boolean',
        onClick: () => {
          const result = $dora.isSubscribed('linroid')
          $ui.toast(`is subscribed: ${result}`)
        }
      },
      // permission
      {
        title: '权限申请',
        style: 'category'
      },
      {
        title: '申请权限',
        summary: '$permission.request(family: string)',
        onClick: async () => {
          const result = await $permission.request('sdcard')
          $ui.toast(`申请结果: ${result}`)
        }
      },

      // // downloder
      // {
      //   title: '$downloader',
      //   style: 'category'
      // },
      // {
      //   title: '下载文件',
      //   summary: '$downloader.add(params: DownloadParams)',
      //   onClick: () => {
      //     $downloader.add({
      //       url:
      //         'http://r.cnpmjs.org/@dora.js/api-demo/download/@dora.js/api-demo-1.4.0.tgz',
      //       filename: 'api-demo-1.4.0.dora'
      //     })
      //   }
      // },
      // global
      {
        title: 'global',
        style: 'category'
      },
      {
        title: '生成 assets 目录下的文件 Url',
        summary: '$assets(path: string)',
        onClick: () => {
          $ui.toast($assets('nokia.jpeg'))
        }
      },
      {
        title: '生成一个内置图标 Url',
        summary: '$icon(name: string, color: string|null)',
        onClick: () => {
          $ui.toast($icon('ic_settings', 'black'))
        }
      },
      {
        title: '生成一个路由',
        summary: '$route(path: string, data: object)',
        onClick: () => {
          $ui.toast(JSON.stringify($route('index', { id: 1 })))
        }
      }
    ]
  },
  dump(data) {
    $ui.toast(JSON.stringify(data, null, '  '))
  }
}
