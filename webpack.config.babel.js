import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import OptimizeJSAssetsPlugin from 'babel-minify-webpack-plugin';

const config = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'scripts/[name][chunkhash].bundle.js',
    },
    optimization: {
        minimizer: [new OptimizeJSAssetsPlugin, new OptimizeCSSAssetsPlugin],
    },
    module: {
        rules: [{
            test: /\.(ts|js)x?$/,
            use: [
                { loader: 'babel-loader' }
            ],
            exclude: /node_modules/
        },
            {
                test: /\.(less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name][chunkhash].bundle.css',
            chunkFilename: '[id][hash].css',
            ignoreOrder: false
        }),
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        port: 3000
    },
    devtool: "source-map"
};
export default config;
