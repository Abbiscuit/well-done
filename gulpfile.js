const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

const compileSass = () =>
  src('css/styles.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('css'));

const watchSassFile = () => watch('css/styles.scss', compileSass);

exports.default = watchSassFile;
