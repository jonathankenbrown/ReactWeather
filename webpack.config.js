var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', //these are regular script files, not for webpacks, so we must have script! by using scrip loader (installed via npm)
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],  //specifies where the app is, here using jsx
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({  // telling the app whenever we want to use jquery, look for these signs
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'  //this is output file where everything gets dumped
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['','.js','.jsx'] //extensions that may be used for app
  },
  module: {
    loaders: [ // since .jsx is not native, we must specify how to read it by "loaders"
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] // Telling babel "what to do" with .jsx
        },
        test: /\.jsx?$/,  //for every .jsx file
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
