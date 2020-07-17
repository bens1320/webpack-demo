const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require("./webpack.config.base")

module.exports = {
    ...base,
    mode: 'production',

    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                //提取出CSS方式
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
};


