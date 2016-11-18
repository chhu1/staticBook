var gulp = require('gulp'),
    webpack = require('webpack'),
    gutil = require('gulp-util'),
    replace = require('gulp-replace'),
    ppeWebpackConfig = require('./webpack/ppe.config'),
    prodWebpackConfig = require('./webpack/prod.config');

gulp.task('ppeEnv', function() {
    return gulp.src(['./src/config.js'])
        .pipe(replace(/let\s+env\s*=\s*config\[\'dev\'\];/g, 'let env = config[\'ppe\'];'))
        .pipe(gulp.dest('src'));
});

gulp.task('prodEnv', function() {
    return gulp.src(['./src/config.js'])
        .pipe(replace(/let\s+env\s*=\s*config\[\'dev\'\];/g, 'let env = config[\'prod\'];'))
        .pipe(gulp.dest('src'));
});

gulp.task('ppeWebpack', function(callback) {
    webpack(ppeWebpackConfig, function(error, stats) {
        if (error) throw new gutil.PluginError('webpack:bundle.js&chunk.js', error);
        gutil.log('[webpack:bundle.js, chunk.js]', stats.toString({ colors: true }));
        callback();
    });
});

gulp.task('prodWebpack', function(callback) {
    webpack(prodWebpackConfig, function(error, stats) {
        if (error) throw new gutil.PluginError('webpack:bundle.js&chunk.js', error);
        gutil.log('[webpack:bundle.js, chunk.js]', stats.toString({ colors: true }));
        callback();
    });
});

gulp.task('ppe', ['ppeEnv', 'ppeWebpack'], function() {
    return gulp.src(['./src/config.js'])
        .pipe(replace(/let\s+env\s*=\s*config\[\'[a-z]+\'\];/g, 'let env = config[\'dev\'];'))
        .pipe(gulp.dest('src'));
});

gulp.task('prod', ['prodEnv', 'prodWebpack'], function() {
    return gulp.src(['./src/config.js'])
        .pipe(replace(/let\s+env\s*=\s*config\[\'[a-z]+\'\];/g, 'let env = config[\'dev\'];'))
        .pipe(gulp.dest('src'));
});
