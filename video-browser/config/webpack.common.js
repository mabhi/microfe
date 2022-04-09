const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry:'./src/main.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve:{
    extensions: ['.js','.vue']
  },
  module: {
    rules: [
      {
        //new project has got custom fonts, images, and webpack can understand what we import
        test: /\.(png|jpe?g|giff|woff|ttf|tiff|svg|eot)$/i,
        use:[
          {loader: 'file-loader'}
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'        
      },
      {
        test: /\.scss|\.css$/,
        use:['vue-style-loader','style-loader','css-loader','sass-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // babel to process es2015+ files
            presets: ['@babel/preset-env'],
            // transformation rules for async await
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins:[new VueLoaderPlugin()],
};
