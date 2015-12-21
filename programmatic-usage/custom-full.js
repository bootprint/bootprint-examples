var path = require("path");

var bootprint = require("bootprint")
    .load(require("bootprint-json-schema"))
    .merge({
        less: {
            main: require.resolve("./custom-full.less"),
            paths: path.join(__dirname,"less-includes")
        },
        handlebars: {
            partials: path.join(__dirname, "partials")
            // Note that we also could provide a custom template file here, but we rather override a partial
            // templates: path.join(__dirname, "templates")
        }
    })
    .build("http://json-schema.org/schema","target");

bootprint.generate().done(console.log);

