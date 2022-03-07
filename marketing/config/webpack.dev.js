const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8003,
    historyApiFallback: {
      index: 'index.html',
    },
    host: "0.0.0.0",
    socket: 'socket'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketingApp',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingIndex': './src/bootstrap',
      },      
      shared: packageJson.dependencies
    }),  
  ],
};

module.exports = merge(commonConfig, devConfig);
