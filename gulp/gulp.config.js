module.exports = function() {
  var src = './src/';
  var dist = './dist/';
  var cssType = '.styl';

  var config = {
    /*
    * File distribution paths
    */
    dist: {
      path: dist,
      html: dist + '**/*.html',
      maps: 'maps/',
      images: dist + 'images/',
      fonts: dist + 'fonts/',
    },

    /*
    * File source paths
    */
    src: {
      path: src,
      alljs: [src + '**/*.js'],
      html: [
        src + '**/*.html',
        '!' + src + 'index.html',
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