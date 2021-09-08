const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'boundle.[contenthash].js',
    path: path.resolve(__dirname, 'build', 'scripts'),
    publicPath: '',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "> 0.03%" }]],
          },
        },
      },
    ],
  },
  plugins:[
    new cleanPlugin.CleanWebpackPlugin(),
  ]
};
