const gulp      = require('gulp'),
    //js
    webpack     = require('webpack');
    gulpWebpack = require('gulp-webpack'),
    //css
    sass        = require('gulp-sass'),
    prefixer    = require('gulp-autoprefixer'),
    cleanCss    = require('gulp-clean-css'),
    //img
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    //tools
    del         = require('del'),
    rename      = require('gulp-rename'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;

const NODE_ENV = process.env.NODE_ENV || 'development';

const PROD = NODE_ENV.trim() === 'production';

const path = {
    build: {
        html: 'build',
        css: 'build/css',
        js: 'build/js',
        img: 'build/img'
    },
    src: {
        html: 'src/index.html',
        css: 'src/css/main.scss',
        js: 'src/js/main.js',
        img: 'src/img/**/*.*'
    },
    output: {
        js: 'bundle.min.js',
        css: 'style.min.css'
    },
    watch: {
        html: 'src/**/*.html',
        css: 'src/css/**/*.scss',
        js: 'src/js/**/*.+(js|jsx)',
        img: 'src/img/**/*.*'
    },
    clean: 'build'
};

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8080
};

const wpConfig = {
    output: {
        path: '/build/js',
        filename: path.output.js
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /build/],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })

    ]
};

if (PROD) {
    wpConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings:     false,
            drop_console: true,
            unsafe:       true
        }
    }))
}

gulp.task("js", function() {
    return gulp.src(path.src.js)
        .pipe(gulpWebpack(wpConfig))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('css', function () {
    return gulp.src(path.src.css)
        .pipe(sass())
        .pipe(prefixer('last 5 versions', 'ie 8'))
        .pipe(cleanCss())
        .pipe(rename(path.output.css))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('clean', function () {
    return del(path.clean);
});

gulp.task('serve', function() {
    return browserSync.init(config);
});

gulp.task('watch', function(){
    gulp.watch(path.watch.html, ['html']);
    gulp.watch(path.watch.css,  ['css']);
    gulp.watch(path.watch.js,   ['js']);
    gulp.watch(path.watch.img,  ['img']);
});

gulp.task('default', function () {
    return runSequence('clean', ['js', 'img', 'css', 'html'], ['serve', 'watch']);
});

