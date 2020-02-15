
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}

/* const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('assets',resolve('@/assets'))
            .set('components',resolve('@/components'))
            .set('network',resolve('@/network'))
            .set('views',resolve('@/views'))
            .set('common',resolve('@/common'))
    }
} */
