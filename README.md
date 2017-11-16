# book_mgr_App
Raul personal book storage

### How to set up
npm install

  ```js
  // Add this loaders in your webpack.config.js
  // You should not exclude node_modules directory from it.
  // This is just an example.
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules:true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          }
        ]
      },
    ]
  }
  ```
