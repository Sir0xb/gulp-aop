## gulp-aop ![NPM version](https://img.shields.io/npm/v/gulp-aop.svg?style=flat)



### Installation
```bash
$ npm install gulp-aop
```

### Example
```coffeescript
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
```

### API
```
options
    header: inject function to the head.
    footer: inject function to the end.
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### ISC license
Copyright (c) 2016 Sir0xb
