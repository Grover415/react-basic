const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  resolve: {
    //resolving will help babel to look for .ts & .tsx files to transpile
    extensions: [".ts", ".tsx", ".js"],
  },
  //devtool: 'source-map',
  module: {
    rules: [
      //we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        //exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //     test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      //     exclude: /node_modules/,
      //     use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      // }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
