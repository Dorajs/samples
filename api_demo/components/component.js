module.exports = {
  type: 'list',
  fetch() {
    return [
      {
        title: '组件基础操作',
        summary: '',
        route: $route('component_base')
      },
      {
        title: 'list',
        summary: '列表组件',
        route: $route('types/list')
      },
      {
        title: 'video',
        summary: '视频组件',
        route: $route('types/video')
      },
      {
        title: 'audio',
        summary: '音频组件',
        route: $route('types/audio')
      },
      {
        title: 'article',
        summary: '文章组件',
        route: $route('types/article')
      },
      {
        title: 'image',
        summary: '图片组件',
        route: $route('types/image')
      },
      {
        title: 'webview',
        summary: '浏览器组件',
        route: $route('types/webview')
      },
      {
        title: 'topTab',
        summary: 'topTab 组件',
        route: $route('types/topTab')
      },
      {
        title: 'drawer',
        summary: 'drawer 组件',
        route: $route('types/drawer')
      },
      {
        title: 'bottomTab',
        summary: 'bottomTab 组件',
        route: $route('types/bottomTab')
      }
      ,
      {
        title: '嵌套',
        summary: 'drawer、topTab、bottomTab 等类型互相嵌套',
        route: $route('types/nested')
      }
    ]
  }
}
