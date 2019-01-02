let path =require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    // entry:'./src/index.js',//人口
    // entry:['./src/index.js','./src/one.js'],
    entry:{
        index:'./src/index.js',
        one:'./src/index.js'
    },
    output:{
        // filename:'build.js',
        filename:'[name].js',
        path:path.resolve('./build')
    },//出口
    devServer:{
        contentBase:'./build',
        port:3000,
        compress:true,//服务器压缩
        open:true //自动打开浏览器
    },//开发服务器
    module:{},//模块配置
    plugins:[
        // new CleanWebpackPlugin(['./build']),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'webpack配置demo',
            hash:true,
            // minify:{
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true  
            // }
        })
    ],//插件的配置
    mode:'development',
    resolve:{},
}