(function() {
  var aop, concat, gulp;

  gulp = require("gulp");

  concat = require("gulp-concat");

  aop = require("./index.js");

  gulp.task("default", function() {
    return gulp.src(["test/a.js", "test/b.js"]).pipe(concat("t.min.js")).pipe(aop({
      header: function() {
        return console.log('Inject to the head');
      },
      footer: function() {
        return console.log('Inject to the end');
      }
    })).pipe(gulp.dest("./test"));
  });

}).call(this);
