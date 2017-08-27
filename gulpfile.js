'use strict'

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    gzip = require('gulp-gzip'),
    watch = require('gulp-watch'),
    templateCache = require('gulp-angular-templatecache'),
    webserver = require('gulp-webserver')

gulp.task('default', ['compress-app'])


gulp.task('minify-lib', function() {
    return gulp.src([
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-animate/angular-animate.js',
            'src/bower_components/angular-route/angular-route.js'
        ])
        // .pipe(sourcemaps.init())
        .pipe(concat('lib.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src'))
})

gulp.task('concat-app', function() {
    var stream = gulp.src([
            // 'src/app/components.js',
            // 'src/app/repository.js',
            'src/app/controller/*.js',
            'src/app/routes.js',
            'src/app/globals.js'
        ])
        .pipe(concat('app.js'))


    return stream.pipe(gulp.dest('src'))
})

gulp.task('minify-app', function() {
    var stream = gulp.src([
            // 'src/app/components.js',
            // 'src/app/repository.js',
            'src/app/controller/*.js',
            'src/app/routes.js',
            'src/app/globals.js'
        ])
        .pipe(concat('app.js'))

    return stream.pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('src'))
})

gulp.task('compress-app', ['minify-app', 'concat-templates', 'minify-lib'], function() {
    return gulp.src([
            'src/app.js',
            // 'src/lib.js',
            'src/templates.js'
        ])
        .pipe(gzip())
        .pipe(gulp.dest('src'))
})

gulp.task('concat-templates', function() {
    return gulp.src('src/app/templates/**/*.html')
        .pipe(templateCache('templates.js', {
            root: 'app/templates',
            module: 'tic-tac-toe'
        }))
        .pipe(gulp.dest('src'))
    //.pipe(livereload())
})

gulp.task('watch', function() {

    // run all tasks at start
    gulp.start('concat-templates')
    gulp.start('concat-app')

    watch('src/app/templates/**/*.html', function() {
        gulp.start('concat-templates')
    })

    watch(['src/app/**/*.js', 'src/app/*.js', '!src/app.js'], function() {
        gulp.start('concat-app')
    })
})

gulp.task('serve', ['watch'], function() {

    var filesToWatch = ['src/app.html', 'src/app.js', 'src/templates.js']
        .map((fileName) => __dirname + '/' + fileName)

    gulp.src('src')
        .pipe(webserver({
            port: 8080,
            host: '0.0.0.0',
            open: 'http://localhost:8080/app.html',
            livereload: {
                enable: true
            },
            // directoryListing: {
            //     enable: false,
            //     path: 'src'
            // }
        }))
})
