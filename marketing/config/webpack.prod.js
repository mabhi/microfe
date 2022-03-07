const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const prodConfig = {
  mode: 'production',
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

module.exports = merge(commonConfig, prodConfig);
