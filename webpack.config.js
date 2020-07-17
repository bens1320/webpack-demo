const base = require("./webpack.config.base")

module.exports = {
    //抄写base
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                //JS生成style方式
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};


