const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');




// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports= {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
          clean: true,
          assetModuleFilename: '[name][ext]'
    },
    module:{
        rules: [
                {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
      { loader: 'babel-loader',
          options: {
          targets: "defaults",
          presets: [
            ['@babel/preset-env']
          ]
        }
       }, { loader: 'ts-loader' } ],
        exclude: /node_modules/,
      },
      {
        // test: /\.ts?$/,
      //   test: /\.ts$/,
      //   use: {loader:'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env']
      //   },
      // exclude: /node_modules/,
      //   },
        
      },
        ]
    },
    plugins:[
        // new BundleAnalyzerPlugin()
        // new HtmlWebpackPlugin()
        new ESLintPlugin({
        extensions: ['js','ts'],
        emitWarning: true,
          }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
    template: './src/index.html', // path to your HTML template
  }),

    ],
    devServer: {
    static: './dist',
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
  optimization: {
    runtimeChunk: 'single',
  },
   resolve: {
    extensions: [ '.ts', '.js'],
  },
  stats: {
  children: true,
}

}