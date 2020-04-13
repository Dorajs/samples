const fs = require('fs')

module.exports = {
  type: 'list',
  style: 'simple',
  actions: [
    {
      id: 'update_menu',
      title: 'Update title',
      onClick: async function () {
        let newTitle = await $input.prompt({
          title: 'Update title',
          hint: 'new title',
          value: this.title
        })
        this.title = newTitle
      }
    }
  ],
  async fetch() {
    return [
      // label
      {
        title: '样式: label',
        style: 'category'
      },
      {
        title: 'Label 1',
        style: 'label'
      },
      {
        title: 'Label 2',
        style: 'label'
      },
      {
        title: 'Label 3',
        style: 'label'
      },
      {
        title: 'Label 4',
        style: 'label'
      },
      // chips
      {
        title: '样式: chips',
        style: 'category'
      },
      {
        title: 'Chips title',
        style: 'chips',
        actions: [
          {
            title: 'Action 1'
          },
          {
            title: 'Action 2'
          },
          {
            title: 'Action 3'
          },
          {
            title: 'Action 4'
          }
        ]
      },
      // simple
      {
        title: '样式：simple',
        style: 'category'
      },
      {
        title: 'Hello World!',
        style: 'simple'
      },
      {
        title: 'Hello World!',
        style: 'simple',
        summary: '一个简单的样式'
      },
      {
        title: 'Hello World!',
        style: 'simple',
        image: $icon('face', 'black'),
        summary: '一个简单的样式'
      },
      // icon
      {
        title: '样式：icon',
        style: 'category'
      },
      {
        title: 'icon',
        style: 'icon',
        image: $icon('face', 'red')
      },
      {
        title: 'icon',
        style: 'icon',
        image: $icon('code')
      },
      {
        title: 'icon',
        style: 'icon',
        image: $icon('build', 'green')
      },
      // vod
      {
        title: '样式：vod',
        style: 'category'
      },
      {
        title: '冰雪奇缘2',
        style: 'vod',
        thumb:
          'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        label: '喜剧,动画,冒险',
        summary:
          '为什么艾莎（伊迪娜·门泽尔 配音）天生就拥有神奇魔法？谜题的答案一直呼唤着她，也威胁着王国的安全。她将和安娜（克里斯汀·贝尔 配音）、克斯托夫（乔纳森·格罗夫 配音）、雪宝（乔什·盖德 配音）和驯鹿斯特共同开启一场非凡的冒险旅程。艾莎曾担心世界不能接受自己的冰雪魔法，但在《冰雪奇缘2》中她却必须祈祷自己的魔法足够强大，能够拯救世界。本片由奥斯卡金牌团队打造——导演珍妮弗·李和克里斯·巴克、制作人彼得·戴尔·维克以及词曲作者克里斯汀·安德森-洛佩兹及罗伯特·洛佩兹悉数回归，原配音班底伊迪娜·门泽尔、克里斯汀·贝尔、乔纳森·格罗夫和乔什·盖德再度加盟。华特迪士尼动画工作室荣誉出品《冰雪奇缘2》将于2019年11月22日登陆北美院线。'
      },
      {
        title: '复仇者联盟4：终局之战d',
        style: 'vod',
        thumb:
          'https://p0.meituan.net/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg@464w_644h_1e_1c',
        label: '动作,冒险,奇幻',
        summary:
          '一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长（布丽·拉尔森 饰）的帮助下找到灭霸（乔什·布洛林 饰）归隐之处，却得知六颗无限宝石均被销毁，希望彻底破灭。如是过了五年，迷失在量子领域的蚁人（保罗·路德 饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。与美国队长（克里斯·埃文斯 饰）冰释前嫌的托尼（小罗伯特·唐尼 饰）找到了穿越时空的方法，星散各地的超级英雄再度集结，他们分别穿越不同的时代去搜集无限宝石。而在这一过程中，平行宇宙的灭霸察觉了他们的计划。 注定要载入史册的最终决战，超级英雄们为了心中恪守的信念前仆后继……'
      },
      // live
      {
        title: '样式：live',
        style: 'category'
      },
      {
        title: 'Coding...',
        style: 'live',
        image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        label: '英雄联盟',
        viewerCount: '1.1k',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
      {
        title: 'Coding...',
        style: 'live',
        image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        label: '英雄联盟',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
      {
        title: 'Coding...',
        style: 'live',
        image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        spanCount: 12,
        label: '英雄联盟',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
      // richMedia
      {
        title: '样式：richMedia',
        style: 'category'
      },
      {
        title: 'Title goes here',
        style: 'richMedia',
        image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        rating: {
          score: 4.5,
          total: 5,
          text: '4.5(1000)'
        },
        summary:
          'Secondary line text Lorem ipsum dolor sit amet, nec no nominavi scaevola. Per et sint sapientem, nobis perpetua salutandi mei te.',
        subtitle: 'Subtitle goes here',
        tags: [
          {
            title: 'Tag 1',
            onClick: this.simpleOnClick
          },
          {
            title: 'Tag 2',
            onClick: this.simpleOnClick
          },
          {
            title: 'Tag 3',
            onClick: this.simpleOnClick
          }
        ],
        actions: [
          {
            title: 'Action1',
            onClick: this.simpleOnClick
          },
          {
            title: 'Action 2',
            onClick: this.simpleOnClick
          }
        ]
      },
      // category
      {
        title: '样式：gallery',
        style: 'category'
      },
      {
        title: 'gallery',
        style: 'gallery',
        image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        author: {
          name: 'linroid',
          avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4'
        }
      },
      // category
      {
        title: '样式：book',
        style: 'category'
      },
      {
        image: 'https://img1.doubanio.com/view/subject/l/public/s2768378.jpg',
        title: '三体',
        style: 'book'
      },
      {
        image: 'https://img3.doubanio.com/view/subject/l/public/s8958650.jpg',
        title: 'JavaScript高级程序设计',
        style: 'book'
      },
      // article
      {
        title: '样式: article',
        style: 'category'
      },
      {
        time: 'just now',
        title: '任天堂 Switch 国行版上市, 腾讯提供本地化网络服务',
        style: 'article',
        author: {
          name: 'xx媒体'
        },
        image: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        summary:
          '12 月 4 日，腾讯集团和任天堂在上海举行发布会，宣布腾讯引进的任天堂新世代游戏机 Nintendo Switch 将于 12 月 10 日正式发售 ... 有「马力欧之父」称号的任天堂株式会社代表取缔役、专门领域开发主导宫本茂通过视频形式表示：任天堂长久以来，一直希望可以为中国顾客提供任天堂的游戏娱乐，现在这个梦想得以实现，真的感到十分高兴，也十分感谢 ... 腾讯游戏任天堂合作部总经理钱赓介绍，关于未来 Nintendo Switch 的网络服务方面，腾讯在国内架设了适合中国网络环境的网络系统，将通过云服务，设立了本地化的网络服务'
      },
      // richContent
      {
        title: '样式: richContent',
        style: 'category'
      },
      {
        title: 'README.md',
        style: 'richContent',
        content: {
          url: 'https://docs.dorajs.com/',
          markdown: this.readReadme()
        }
      },
      {
        title: '百度一下',
        style: 'richContent',
        content: {
          url: 'https://baidu.com/',
        }
      }
    ]
  },
  simpleOnClick(data) {
    $ui.toast(`onClick ${JSON.stringify(data)}`)
  },
  readReadme() {
    return fs.readFileSync('./README.md', { encoding: 'utf8' })
  }
}
