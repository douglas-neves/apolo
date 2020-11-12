/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */
const path = require('path');

module.exports = {
  devServer: {
    port: 8080,
    disableHostCheck: true,
  },
  productionSourceMap: true,
  outputDir: 'dist',
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));

    if (config.plugins.has('html')) {
      const htmlPlugin = config.plugin('html');
      if (htmlPlugin) {
        htmlPlugin.tap((args) => {
          args[0].title = 'Vue Rocket Boilerplate';
          return args;
        });
      }
    }

    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: '[name].css',
            chunkFilename: '[name].css',
          },
        ]);
    }

    if (process.env.NODE_ENV === 'production') {
      // Aqui podemos definir algumas exeções para algumas coisas que não devem ir para o dist
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
