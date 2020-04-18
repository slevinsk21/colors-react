const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// include the css extraction and minification plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './build'
  },
  module: {
    rules: [
      // perform js babelization on all .js files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      // compile all .sass|.scss files to plain old css
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    // extract css into dedicated file
    new MiniCssExtractPlugin({
      filename: './css/build/main.min.css'
    })
  ],
  optimization: {
    minimizer: [
      // enable the js minification plugin
      new UglifyJSPlugin({
        cache: true,
        parallel: true
      }),
      // enable the css minification plugin
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};
