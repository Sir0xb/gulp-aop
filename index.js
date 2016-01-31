var through = require('through2');
var fs = require("fs");

module.exports = function (opt) {
    var aopHeader = "(" + (opt.header || function(){}).toString() + "());";
    var aopFooter = "(" + (opt.footer || function(){}).toString() + "());";

    function bufferContents(file, encoding, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }

        if (file.isStream()) {
            this.push(file);
            return callback();
        }

        if (file.isBuffer()) {
            file.contents = new Buffer(aopHeader + file.contents.toString('utf8') + aopFooter);
        }

        this.push(file);

        callback();
    }

    function endStream(callback) {
        callback();
    }

    return through.obj(bufferContents, endStream);
};
