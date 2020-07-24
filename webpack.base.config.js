const path = require('path')

module.exports = {
    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.json'
        ],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
            Page: path.resolve(__dirname, 'src/views/pages'),
            Component: path.resolve(__dirname, 'src/views/components'),
            View: path.resolve(__dirname, 'src/views'),
            Api: path.resolve(__dirname, 'src/modules/api'),
            Constant: path.resolve(__dirname, 'src/data/constant'),
            Plugin: path.resolve(__dirname, 'src/modules/plugins'),
            Module: path.resolve(__dirname, 'src/modules'),
            Store: path.resolve(__dirname, 'src/data/store'),
            Style: path.resolve(__dirname, 'src/assets/style'),
            Raw: path.resolve(__dirname, 'src/data/raw'),
            Class: path.resolve(__dirname, 'src/data/class')
        }
    }
}