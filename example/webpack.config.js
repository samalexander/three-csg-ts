const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'example.ts'),
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
  },
};
