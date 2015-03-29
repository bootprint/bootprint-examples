module.exports = {
    /**
     *
     */
    partials: require('path').join(__dirname,"partials"),
    less: {
        main: [
            require.resolve("./less/example.less")
        ]
    }
}