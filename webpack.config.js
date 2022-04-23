const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/modules/6_DemoProject/app.ts",
  output: {
    filename: "demo-project-bundle.js",
    path: path.resolve(__dirname, "dist", "modules", "6_DemoProject"),
    publicPath: "dist",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist", "modules", "6_DemoProject"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
