const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: '#inline-source-map',

  entry: {
    index: ['./src/index.js']
  },

  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.js', '.json'],
    mainFiles: ['index'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
  },

  performance: {
    hints: false
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1
        }
      }
    }
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};
