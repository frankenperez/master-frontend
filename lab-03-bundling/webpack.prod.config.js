const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const DotEnv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  // Note: Do not upload maps to production server
  devtool: "source-map",
  output: {
    filename: "[name].[chunkhash].js"
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new DotEnv({
      path: "./env/prod.env"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.jsx$|\.ts$|\.tsx$|\.scss$|\.css$|\.html$/,
      threshold: 1024,
      minRatio: 0.8
      // deleteOriginalAssets: true
    })
  ]
});
