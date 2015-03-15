
var bootprint = require("bootprint")
    .load(require("bootprint-json-schema"))
    .build("http://json-schema.org/schema","target");

bootprint.generate().done(console.log);

