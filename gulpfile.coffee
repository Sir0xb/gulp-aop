# out: gulpfile.js, sourcemap: false
gulp = require "gulp"
concat = require "gulp-concat"
uglify = require "gulp-uglify"
aop = require "./index.js"

gulp.task "default", ->
    gulp.src ["test/a.js", "test/b.js"]
    .pipe concat "t.min.js"
    .pipe aop
        header: -> console.log '注入进去了，这只是开始'
        footer: -> console.log '注入进去了，这是个漂亮的结束'
    .pipe uglify()
    .pipe gulp.dest "./test"
