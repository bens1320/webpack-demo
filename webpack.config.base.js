const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        //路径默认就是dist, 可以删除
        // path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'XDML - 写代码啦',
            template: 'src/assets/index.html'
        }),
    ],
};


