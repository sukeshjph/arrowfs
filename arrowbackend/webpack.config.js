const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: './src/index.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new WebpackShellPluginNext({
      onBuildEnd: ['npm run:dev']
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: NODE_ENV === 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  }
};