const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "./static/web"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ico|gif|png|jpe?g)$/i,
        include: path.resolve(__dirname, "./static/img"),
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, "./static/css"),
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //     },
    //   },
    // },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
  },
};
