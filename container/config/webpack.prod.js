const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output:{
    //   done for primarily caching issues
      filename: "[name].[contenthash].js",
      publicPath: '/container/latest/'
  },
  plugins: [
      new ModuleFederationPlugin({
            name: 'container',
            remotes: {
            //   location of child app must be known at build time
            marketing: `marketingApp@${domain}/marketing/latest/remoteEntry.js`,
            dashboard: `dashboardApp@${domain}/dashboard/latest/remoteEntry.js`,
            auth: `authApp@${domain}/auth/latest/remoteEntry.js`,                        
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);
