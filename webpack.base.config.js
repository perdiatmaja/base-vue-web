const path = require('path')

module.exports = {
    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.json'
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
            Page: path.resolve(__dirname, 'src/views/pages'),
            Component: path.resolve(__dirname, 'src/views/components'),
            Api: path.resolve(__dirname, 'src/modules/api'),
            Constant: path.resolve(__dirname, 'src/data/constant')
        }
    }
}