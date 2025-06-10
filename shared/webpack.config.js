const path = require("path");

module.exports = {
  entry: "./sharedStore.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sharedStore.js",
    library: "sharedStore",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: {
    "zustand/vanilla": "zustand/vanilla",
  },
};
