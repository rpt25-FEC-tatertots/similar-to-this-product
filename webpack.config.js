module.exports = {
  mode: 'development',
  entry: __dirname + '/client/src/SimilarProductsComponent.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'similarBundle.js',
    path: __dirname + '/public/dist'
  }
};