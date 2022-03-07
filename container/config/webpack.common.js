const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // babel to process react jsx files and es2015+ files
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // transformation rules for async await
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ]
};
