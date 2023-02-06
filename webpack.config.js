const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

const PLUGINS = [];
const RULES = [];

PLUGINS.push(
  new HtmlWebpackPlugin({
    template: "public/index.html",
  })
);

RULES.push(
  ...[
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
  ]
);

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
  },
  devtool: "inline-source-map",
  plugins: PLUGINS,
  module: {
    rules: RULES,
  },
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
