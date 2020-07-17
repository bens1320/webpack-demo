var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        //路径默认就是dist, 可以删除
        // path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    }
};