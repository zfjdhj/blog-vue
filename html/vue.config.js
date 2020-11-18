const webpack = require("webpack");

module.exports = {
    assetsDir: 'static',
    parallel: false,
    publicPath: '/',
    //webpack-dev-server相关配置
    devServer:{
        open:false,
        host:'127.0.0.1',
        port:81,
        https:false,
        hot:true,
        hotOnly:false,
        proxy:null,
        // proxy:{
        //     'devApi':{
        //         target:"http://host/api",
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '^/devApi':'productapi'
        //         }
        //     }
        // }
    },


    /*添加作者信息*/
    configureWebpack:{
        plugins:[
            new webpack.BannerPlugin({
                banner:"zfjdhj"
            })
        ]
    }
}




// const webpack = require('webpack')
//
//
// module.exports={
//   configureWebpack:{
//     plugins: [
//         new webpack.ProvidePlugin({
//           $:"jquery",
//           jQuery:"jquery",
//           "windows.jQuery":"jquery"
//       })
//     ]
//   }
// }