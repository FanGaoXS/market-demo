module.exports={
  configureWebpack:{
    resolve:{
      // 配置路径别名
      alias:{
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}