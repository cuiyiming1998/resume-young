export default {
  // 昵称
  nickname: 'Young',
  // 姓名
  name: 'CYM',
  // 工作经验
  experience: '三年工作经验',
  // 微信号
  wx: 'cymilyily',
  // 邮箱
  email: 'atlasyoung@163.com',
  // 手机号
  mobile: '17692390522',
  // github
  github: 'http://github.com/cuiyiming1998',
  // 头像地址
  avatar: 'https://avatars.githubusercontent.com/u/25956970?v=4',
  // 岗位
  job: 'Frontend Engineer',
  // 生日
  birthday: '1998/05/22',
  // 简介
  description: 'Everything will be ok.',
  // 学校
  university: 'Hebei Normal University',
  // 地址
  address: 'Beijing, China',
  // 技能 string[]
  skills: [
    'JavaScript',
    'TypeScript',
    'Vue',
    'React',
    'Vite',
    'Webpack',
    'TailwindCSS',
    'Unocss',
  ],
  // 项目[]
  // icons -> https://icones.js.org/collection/ion?s=university
  // 目前引用了 carbon 和 ion
  // 需要的可以自行引入
  // pnpm i -D @iconify-json/xxx
  projects: [
    {
      name: 'Vue3-mini',
      description: 'Minimum implementation of Vue3 source code.',
      iconName: 'i-carbon-logo-vue',
      url: 'https://github.com/cuiyiming1998/Vue3-mini',
    },
    {
      name: 'Pinia-mini',
      description: 'Minimum implementation of Pinia source code.',
      iconName: 'i-mdi-fruit-pineapple',
      url: 'https://github.com/cuiyiming1998/pinia-mini',
    },
    {
      name: 'Algorithms-JavaScript',
      description: 'Writting Algorithms with JavaScript.',
      iconName: 'i-ion-construct',
      url: 'https://github.com/cuiyiming1998/algorithms-javascript',
    },
    {
      name: 'React-Source',
      description: 'Minimum implementation of React source code.',
      iconName: 'i-ion-logo-react',
      url: 'https://github.com/cuiyiming1998/react-source',
    },
    {
      name: 'Awesome-JavaScript',
      description: 'Implementation of JavaScript native APIs.',
      iconName: 'i-ion-logo-javascript',
      url: 'https://github.com/cuiyiming1998/awesome-javascript',
    },
    {
      name: 'Arco Design Admin',
      description: 'A back-end template based on Vue3, Vite and TypeScript(working on it).',
      iconName: 'i-ion-earth',
      url: 'https://github.com/cuiyiming1998/awesome-javascript',
    },
  ],
  // 工作经历
  works: [
    {
      startTime: '2020/12',
      endTIme: '至今',
      company: '北京昇科能源科技有限公司',
      job: '前端开发',
      description:
        '用Vue3+Ts写了点儿后台管理系统, 用umi写了点H5, 做了点大屏适配, 拖拽组件, 封装了点工具库和业务组件.',
    },
  ],
}
