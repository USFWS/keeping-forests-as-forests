const autoprefixer = require('autoprefixer')({ browsers: ['IE 11'] });
const cssnano = require('cssnano');

module.exports = {
  map: false,
  plugins: [autoprefixer, cssnano]
};
