const SentryWebpackPlugin = require("@sentry/webpack-plugin");
module.exports = {
  // other configuration
  configureWebpack: {
    plugins: [
      new SentryWebpackPlugin({
        include: "./dist", 
        ignore: ["node_modules", "webpack.config.js"]
      }),
    ],
  },
};