const webpack = require("webpack");
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
const appDir = path.resolve(__dirname, "src");
const os = require("os");
const HappyPack = require("happypack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {getIfUtils, removeEmpty} = require("webpack-config-utils");

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);

  return {
    entry: appDir + "/index.js",
    output: {
      path: publicPath,
      filename: "js/bundle.js"
    },
    resolve: {
      extensions: [".js", ".jsx", "json"]
    },
    module: {
      loaders: [{
          enforce: "pre",
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            emitWarning: true
          }
        },
        {
          test: /\.(js|jsx)$/,
          include: appDir,
          exclude: /node_modules/,
          use: "happypack/loader"
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
        { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { test: /\.json$/, loader: "json-loader"},
        {
          test: /\.css|\.scss$/,
          use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
            fallback: "style-loader",
            // Minified version of loaders set-up:
            use: ifProd("css-loader?modules&importLoader=2&sourceMap&camelCase&minimize&localIdentName=[local]!fast-sass-loader",
                        "css-loader!fast-sass-loader")
          }))
        },
        {
          test: /\.svg|\.png|\.jpeg|\.jpg$/,
          loader: "url-loader"
        }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new HappyPack({
        loaders: [ "babel-loader" ],
        threads: os.cpus().length
      }),
      new ExtractTextPlugin({
        filename: ifProd("styles/[name].[chunkhash].css", "styles/[name].css"),
        disable: false,
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html",
        inject: "body",
      })
    ]),
    externals: {
      "react/addons": "react",
      "react/lib/ExecutionEnvironment": "react",
      "react/lib/ReactContext": "react",
      "react-addons-test-utils": "react-dom"
    },
    devtool:"source-map",
    devServer: {
      contentBase: publicPath,
      noInfo: true,
      historyApiFallback: {
        index: "index.html"
      }
    }
  };
};
