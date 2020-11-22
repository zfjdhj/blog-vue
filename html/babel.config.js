module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  /*按需导入*/
  // plugins: [
  //   ['import', {
  //     libraryName: 'vant',
  //     libraryDirectory: 'es',
  //     style: true
  //   }, 'vant']
  // ]

  "plugins": [
      ["prismjs", {
      "languages": ["javascript", "css", "markup"],
      "plugins": ["line-numbers"],
      "theme": "twilight",
      "css": true
    }]
  ]
}
