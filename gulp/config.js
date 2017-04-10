
module.exports = {
  autoprefixerConfig: ['last 3 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],

  paths: {
      root:'./build',
      build: {
          templates: './build/',
          scripts: './build/assets/scripts/',
          styles: './build/assets/styles/',
          images: './build/assets/images/',
          fonts:'./build/assets/fonts/'
      },
      src: {
          fonts:'./src/fonts/**/*.*',
          templates: ['./src/templates/pages/*.jade','./src/templates/pages/*.pug'],
          scripts: './src/scripts/',
          styles: './src/styles/',
          images: './src/images/**/*.*',
          icons:'./src/images/icons/',
          iconsTemplateSvg:'./src/styles/_common/_icons-svg-template.scss'
      },
      watch: {
          fonts:'./src/fonts/**/*.*',
          templates: ['./src/templates/**/*.jade','./src/templates/**/*.pug'],
          scriptsApp: ['./src/scripts/app.js','./src/scripts/_common/**/*.js'],
          scriptsVendor: ['./src/scripts/vendor.js','./src/scripts/vendor/**/*.js'],
          scriptsModerniz: './src/scripts/modernizr-custom.js',
          stylesApp: ['./src/styles/app.scss','./src/styles/_common/**/*.scss'],
          stylesPrint: ['./src/styles/print.scss','./src/styles/_common/**/*.scss'],
          stylesVendor: ['./src/styles/vendor.scss','./src/styles/vendor/**/*.scss'],
          images: ['./src/images/','!./src/images/icons/'],
          icons:['./src/images/icons/**/*.*','!./src/images/icons/**/*.svg'],
          iconsSvg:'./src/images/icons/**/*.svg',
          iconsTemplateSvg:'./src/styles/_common/icons-svg-template.scss'
      },

      clean:'./build'
  }

};
