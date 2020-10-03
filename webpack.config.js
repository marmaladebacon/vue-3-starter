const path = require('path');

module.exports = {
  target: "node",
  entry: "./src/server/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: "serverbundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { 
        test: /\.tsx?$/, use: ["ts-loader"], 
        exclude: [
          /node_modules/, 
          path.resolve(__dirname, 'src/client'),
        ]},
    ],
  },

}