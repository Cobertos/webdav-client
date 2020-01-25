const path = require("path");

const TEST_DIST = path.resolve(__dirname, "../../dist/test");

module.exports = {
    entry: path.resolve(__dirname, "../../source/index.js"),

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            targets: {
                                "ie": 11
                            }
                        }]
                    ]
                }
            }
        ]
    },

    output: {
        filename: "webdav.js",
        path: TEST_DIST,
        library: "webdav",
        libraryTarget: "umd"
    }
};
