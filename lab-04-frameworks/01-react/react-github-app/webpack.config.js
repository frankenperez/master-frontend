const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const basePath = __dirname;

module.exports = {
  mode: "development",
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "app-common": path.join(basePath, "src/app/common"),
      "app-layout": path.join(basePath, "src/app/layout"),
      "app-pods": path.join(basePath, "src/app/pods"),
      "app-scenes": path.join(basePath, "src/app/scenes")
    }
  },
  entry: {
    app: ["./main.tsx"],
    styles: ["./styles/main.scss"]
  },
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    host: "localhost",
    port: 8080,
    stats: "minimal"
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
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
};
