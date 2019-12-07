module.exports = {
  type: 'browser',
  uiOptions: {
    toolBar: true,
    statusBar: true
  },
  script: 'dom.js',
  fetch() {
    return {
      url: "https://www.npmjs.com/",
    }
  },
  created() {
    this.actions = [{
      title: "Send Event",
      onClick: () => {
        console.log(this)
        this.runScript('$dora.sendEvent("test", "Hello Event")')
      }
    }, {
      title: "Redirect",
      onClick: async () => {
        let newUrl = await $ui.prompt("Url")
        this.redirect(newUrl)
      }
    }, {
      title: "Get cookies",
      onClick: () => {
        $ui.toast(JSON.stringify(this.cookies))
      }
    }, {
      title: "Set cookies",
      onClick: () => {
        console.log('Set cookies')
        this.cookies = {
          token: '1234567'
        }
        console.log(this.cookies)
        $ui.toast(JSON.stringify(this.cookies))
      }
    }]
  },
  onPageFinished(url) {
    console.log(`onPageFinished: ${url}`)
  },
  onEvent(name, data) {
    if (name == 'test') {
      $ui.toast(`Event: name=${name}, data=${JSON.stringify(data)}`)
    }
    console.log(`Event: name=${name}, data=${JSON.stringify(data)}`)
  }
}
