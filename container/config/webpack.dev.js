const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const devPort = 8000
const devConfig = {
  mode: 'development',
  /*
  output:{
    publicPath: `http://localhost:${devPort}/`
  },
  */
  devServer: {
    port: devPort,
    historyApiFallback: {
      index: 'index.html',
    },
    host: "0.0.0.0",
    socket: 'socket'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketingApp@http://localhost:3053/remoteEntry.js`,
        
      },
      shared: packageJson.dependencies
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
