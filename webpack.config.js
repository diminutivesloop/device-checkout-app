module.exports = {
    context: __dirname + "/app",
    entry: ["./app.js"],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.html$/, loader: 'raw'}
        ]
    }
};