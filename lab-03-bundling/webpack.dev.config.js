const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const DotEnv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js"
  },
  devServer: {
    contentBase: "./dist",
    inline: true,
    host: "localhost",
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new DotEnv({
      path: "./env/dev.env"
    })
  ]
});
