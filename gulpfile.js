const { src, dest, series } = require('gulp');

function server() {
    const srcPath = './src/**/*.js',
    destPath = './release/src';

    return src(srcPath).pipe(dest(destPath));
}

function main() {
    const srcPath = ['./src/App.js', './package.json'],
    destPath = './release';

    return src(srcPath).pipe(dest(destPath));
}

exports.default = series(server, main);