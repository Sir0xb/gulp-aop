# out: gulpfile.js, sourcemap: false
gulp = require "gulp"
concat = require "gulp-concat"
aop = require "gulp-aop"

gulp.task "default", ->
    gulp.src ["test/a.js", "test/b.js"]
    .pipe concat "t.min.js"
    .pipe aop
        header: -> console.log 'Inject to the head'
        footer: -> console.log 'Inject to the end'
    .pipe gulp.dest "./test"
