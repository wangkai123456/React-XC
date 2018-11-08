const { getLoader, loaderNameMatches } = require("react-app-rewired");
module.exports = function override(config, env) {
    /**less extend */
    config.module.rules[1].oneOf.splice(0, 0, {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
    });
    return config;
};
