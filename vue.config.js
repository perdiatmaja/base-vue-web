const BaseWebpackConfig = require('./webpack.base.config')

module.exports = {
    configureWebpack: config => {
        config.resolve = BaseWebpackConfig.resolve
    }
}