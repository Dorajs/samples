module.exports = {
  type: 'folder',
  style: 'simple',
  async fetch() {
    return [
      // simple
      {
        title: '样式：simple',
        style: 'category',
        menu: {
          title: '查看代码',
          onClick: () => {}
        }
      },
      {
        title: 'Hello World!',
        style: 'simple'
      },
      {
        title: 'Hello World!',
        style: 'simple',
        thumb: $icon('face', "black"),
        summary: '一个简单的样式'
      },
      // icon
      {
        title: '样式：icon',
        style: 'category',
        menu: {
          title: '查看代码',
          onClick: () => {

          }
        }
      }, {
        title: 'icon',
        style: 'icon',
        thumb: $icon('face', 'red')
      }, {
        title: 'icon',
        style: 'icon',
        thumb: $icon('code')
      }, {
        title: 'icon',
        style: 'icon',
        thumb: $icon('build', 'green')
      },
      // vod
      {
        title: '样式：vod',
        style: 'category',
        menu: {
          title: '查看代码',
          onClick: () => {}
        }
      }, {
        title: '冰雪奇缘2',
        style: 'vod',
        thumb: 'https://p0.meituan.net/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg@464w_644h_1e_1c',
        label: '喜剧,动画,冒险',
        summary: '为什么艾莎（伊迪娜·门泽尔 配音）天生就拥有神奇魔法？谜题的答案一直呼唤着她，也威胁着王国的安全。她将和安娜（克里斯汀·贝尔 配音）、克斯托夫（乔纳森·格罗夫 配音）、雪宝（乔什·盖德 配音）和驯鹿斯特共同开启一场非凡的冒险旅程。艾莎曾担心世界不能接受自己的冰雪魔法，但在《冰雪奇缘2》中她却必须祈祷自己的魔法足够强大，能够拯救世界。本片由奥斯卡金牌团队打造——导演珍妮弗·李和克里斯·巴克、制作人彼得·戴尔·维克以及词曲作者克里斯汀·安德森-洛佩兹及罗伯特·洛佩兹悉数回归，原配音班底伊迪娜·门泽尔、克里斯汀·贝尔、乔纳森·格罗夫和乔什·盖德再度加盟。华特迪士尼动画工作室荣誉出品《冰雪奇缘2》将于2019年11月22日登陆北美院线。'
      }, {
        title: '复仇者联盟4：终局之战d',
        style: 'vod',
        thumb: 'https://p0.meituan.net/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg@464w_644h_1e_1c',
        label: '动作,冒险,奇幻',
        summary: '一声响指，宇宙间半数生命灰飞烟灭。几近绝望的复仇者们在惊奇队长（布丽·拉尔森 饰）的帮助下找到灭霸（乔什·布洛林 饰）归隐之处，却得知六颗无限宝石均被销毁，希望彻底破灭。如是过了五年，迷失在量子领域的蚁人（保罗·路德 饰）意外回到现实世界，他的出现为幸存的复仇者们点燃了希望。与美国队长（克里斯·埃文斯 饰）冰释前嫌的托尼（小罗伯特·唐尼 饰）找到了穿越时空的方法，星散各地的超级英雄再度集结，他们分别穿越不同的时代去搜集无限宝石。而在这一过程中，平行宇宙的灭霸察觉了他们的计划。 注定要载入史册的最终决战，超级英雄们为了心中恪守的信念前仆后继……'
      },
      // live
      {
        title: '样式：live',
        style: 'category',
        menu: {
          title: '查看代码',
          onClick: () => {}
        }
      }, {
        title: 'Coding...',
        style: 'live',
        thumb: $assets('./nokia.jpeg'),
        label: '英雄联盟',
        viewerCount: '1.1k',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      }, {
        title: 'Coding...',
        style: 'live',
        thumb: $assets('./nokia.jpeg'),
        label: '英雄联盟',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      }, {
        title: 'Coding...',
        style: 'live',
        thumb: $assets('./nokia.jpeg'),
        spanCount: 12,
        label: '英雄联盟',
        author: {
          name: 'linroid',
          avatar: 'https://linroid.com/avatar.png'
        }
      },
      // category
      {
        title: '样式：gallery',
        style: 'category',
        menu: {
          title: '查看代码',
          onClick: () => {

          }
        }
      }, {
        title: "gallery",
        style: "gallery",
        thumb: 'https://weiliicimg9.pstatp.com/weili/l/778002376200945690.webp',
        author: {
          name: 'linroid',
          avatar: 'https://avatars0.githubusercontent.com/u/3192142?s=460&v=4'
        }
      }
    ]
  }
}
