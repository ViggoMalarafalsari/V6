const { src, dest } = require('gulp');

const
sourcemaps = require('gulp-sourcemaps'),
sassGlob = require('gulp-sass-glob'),
sass = require('gulp-sass')(require('sass')),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

function scss() {
return src(['./dev/assets/_scss/main.scss'])
.pipe(sourcemaps.init({largeFile: true}))
.pipe(sassGlob())
.pipe(sass())
.pipe(concat('theme.min.css'))
.pipe(sourcemaps.write('.', {debug: true}))
.pipe(dest('dev/assets/css'));
};
exports.scss = scss;

function js() {
return src('./dev/assets/_scripts/**/*.js') 
.pipe(uglify()) 
.pipe(sourcemaps.init())  
.pipe(concat('theme.min.js')) 
.pipe(sourcemaps.write('.')) 
.pipe(dest('dev/assets/js'));
};
exports.js = js;