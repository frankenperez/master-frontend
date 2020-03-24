const path = require("path");
const basePath = __dirname;

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  entry: {
    app: ["./index.tsx"],
    styles: ["./styles/main.scss"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/node_modules[\\/]]/,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 500,
            name: "./img/[hash].[name].[ext]"
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 500,
              name: "./img/[hash].[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true
    })
  ]
};
