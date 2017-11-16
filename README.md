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
      exclude: /node_modules/,
      test: /\.jsx?$/,
      loader: "babel-loader",
      query:
        {
          presets:['stage-0','react']
        }
    },
    {
      exclude: /node_modules/,
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0']
      }
    },
    {
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.less$/,
      loader: ["style-loader", "css-loader","less-loader"]
    },
    {
      test: /\.svg$/,
      loader: 'svg-react-loader'
    }
  ]
}
```
