const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
    //less配置
    plugins: [
        {
            plugin: CracoLessPlugin,
            // options: {
            //     lessLoaderOptions: {
            //         lessOptions: {
            //             modifyvars: {'@primary-color': '#1DA57A'},
            //             javascriptEnabled: true
            //         }
            //     }
            // }
        }
    ],
    //webpack配置
    webpack: {
        //配置别名
        alias: {
            //绝对路径+src
            "@": resolve("src"),
            "utils": resolve("src/utils")
        },
        externals: {
            'BMap': 'BMap'
        }
    },
}