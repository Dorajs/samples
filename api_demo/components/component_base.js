module.exports = {
  type: 'list',
  allowBookmark: true,
  searchRoute: $route('search'),
  items: [
    {
      style: 'label',
      title: '修改标题',
      onClick: async function () {
        const newTitle = await $input.text({
          title: '输入标题',
          hint: '标题'
        })
        if (newTitle) {
          this.title = newTitle
        }
      }
    },
    {
      style: 'label',
      title: '修改副标题',
      onClick: async function () {
        const newSubtitle = await $input.text({
          title: '输入副标题',
          hint: '副标题'
        })
        if (newSubtitle) {
          this.subtitle = newSubtitle
        }
      }
    },
    {
      style: 'label',
      title: '是否允许收藏',
      onClick: async function () {
        const option = await $input.select({
          title: '允许添加收藏？',
          options: [
            {
              title: '允许',
              value: true
            },
            {
              title: '不允许',
              value: false
            }
          ]
        })
        if (option) {
          this.allowBookmark = option.value
        }
      }
    },
    {
      style: 'label',
      title: '结束组件',
      onClick: async function () {
        this.finish()
      }
    },
    {
      style: 'label',
      title: '刷新组件数据',
      onClick: async function () {
        this.refresh()
      }
    }
  ],
  beforeCreate() {
    console.log('before create')
  },
  fetch() {
    console.log('fetch')
  },
  created() {
    console.log('created')
  },
  activated() {
    console.log('activated')
  },
  inactivated() {
    console.log('inactivated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
