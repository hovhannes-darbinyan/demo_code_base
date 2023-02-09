const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
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
  resolve: {
    alias: {
        '@hooks':    path.resolve(__dirname, `src/hooks`),
        '@components':path.resolve(__dirname, `src/components`),
        '@constants': path.resolve(__dirname, `src/constants`),
        '@controllers': path.resolve(__dirname, `src/controllers`),
        '@api': path.resolve(__dirname, `src/api`),
        '@views': path.resolve(__dirname, `src/views`),
    }
  },
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
