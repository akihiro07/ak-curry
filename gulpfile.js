const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

//scssファイルをcssファイルにコンパイルするタスク
gulp.task('sass', function(){
    return gulp.src('./src/style.scss') //出力元
        .pipe( sass({outputStyle: 'compressed'}) ) //出力形式
        .pipe( gulp.dest('./public') ); //出力先
});

//ブラウザ自動リロードする対象ファイル指定タスク
gulp.task('browser-sync', function(){
     return browserSync({
        server: {
            baseDir: './public',
            index: 'index.html'
        }
    });
});
//ブラウザ自動ライブリロードするタスク
gulp.task('bs-reload', function(done){
    browserSync.reload();
    done(); //done()を付けないと、１度だけしかリロードされない
});

//ファイル変更を監視＋更新するタスク
gulp.task('watch', function(){
    //scssファイルのコンパイル
    gulp.watch('./src/*.scss', gulp.task('sass'));
    gulp.watch('./src/**/*.scss', gulp.task('sass'));
    //ライブリロード
    gulp.watch('./src/*.scss', gulp.task('bs-reload'));
    gulp.watch('./src/**/*.scss', gulp.task('bs-reload'));
    gulp.watch('./public/*.html', gulp.task('bs-reload'));
});

//デフォルト設定(コマンドに『gulp』を叩くだけで実行される処理)タスク
gulp.task('default', gulp.parallel('browser-sync','watch'));
