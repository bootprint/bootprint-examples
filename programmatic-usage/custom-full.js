var path = require("path");

/**
 * @example
 * Example for a fully customized call from node
 */

var bootprint = require("bootprint")
    .load(require("bootprint-json-schema"))
    .merge({
        less: {
            main: require.resolve("./custom-full.less"),
            paths: path.join(__dirname,"less-includes")
        },
        handlebars: {
            partials: path.join(__dirname, "template"),
            // You could provide a custom template file here, but we rather override a partial
            template: undefined
        }
    })
    .build("http://json-schema.org/schema","target");

bootprint.generate().done(console.log);

