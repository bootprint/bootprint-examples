
var bootprint = require("bootprint")
    .load(require("bootprint-json-schema"))
    .merge({
        less: {
            main: require.resolve("./custom.less")
        }
    })
    .build("http://json-schema.org/schema","target");

bootprint.generate().done(console.log);

