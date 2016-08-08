module.exports = function() {
  var src = './src/';
  var dist = './laminate_default/templates/';
  var cssType = '.styl';

  var config = {
    cssType: cssType,
    /*
    * File distribution paths
    */
    dist: {
      path: dist,
      html: dist + '**/*.html',
      maps: 'maps/',
      assets: dist +'assets/',
      images: dist + 'assets/images/',
      fonts: dist + 'assets/fonts/',
    },

    /*
    * File source paths
    */
    src: {
      path: src,
      alljs: [src + '**/*.js'],
      html: [
        src + '**/*.html',
      ],
      js: [
        src + '**/*.js',
        '!' + src + '**/index.js',
      ],
      css: [
        src + 'modules/**/*' + cssType,
        src + 'base-styles/**/*' + cssType,
      ],
      images: [
        src + 'images/**/*.{jpg,jpeg,png,svg,gif}',
      ],
      fonts: [
        src + 'fonts/**/*.{eot,svg,ttf,woff,woff2}',
      ],
      indexHtml: src + 'index.html',
      indexCss: src + 'index' + cssType,
      indexJs: src + 'index.js',
    },
    /*
    * Server settings
    */
    defaultPort: 3001,
    defaultHost: '0.0.0.0',
  };

  return config;
};
