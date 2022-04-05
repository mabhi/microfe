const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const devPort = 3051
const devConfig = {
  mode: 'development',
  output:{
    publicPath: `http://localhost:${devPort}/`
  },
  devServer: {
    port: devPort,
    historyApiFallback: {
      index: 'index.html',
    },
    //as project access lots of fonts and images, as part of security handle CORS.
    headers:{
      'Access-Control-Allow-Origin': '*'
    },
    host: "0.0.0.0",
    socket: 'socket'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboardApp',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/bootstrap',
      },      
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),  
  ],
};

module.exports = merge(commonConfig, devConfig);
