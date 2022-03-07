const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8000,
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
