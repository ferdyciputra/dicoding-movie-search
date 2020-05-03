const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        /* rules buat global style */
        test: /\.css$/,
        include: /styles/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        /* rules buat component */
        test: /\.css$/i,
        exclude: /styles/,
        use: ["to-string-loader", "css-loader"]
      },
      {
        test: /\.(scss)$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    })
  ]
}