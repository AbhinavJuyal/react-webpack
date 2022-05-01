const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "static/js/bundle.js",
    publicPath: "./",
    chunkFilename: "static/js/[name].[contenthash:8]chunk.js",
    assetModuleFilename: "static/media/[name].[hash][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new WebpackManifestPlugin({
    //   fileName: "asset-manifest.json",
    //   publicPath: "/",
    //   generate: (seed, files, entrypoints) => {
    //     const manifestFiles = files.reduce((manifest, file) => {
    //       manifest[file.name] = file.path;
    //       return manifest;
    //     }, seed);
    //     const entrypointFiles = entrypoints.main.filter(
    //       (fileName) => !fileName.endsWith(".map")
    //     );
    //     return {
    //       files: manifestFiles,
    //       entrypoints: entrypointFiles,
    //     };
    //   },
    // }),
  ],
};
