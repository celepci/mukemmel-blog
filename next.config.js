const webpack = require("webpack");
require("dotenv").config();
const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  env: {
    TEST: process.env.TEST,
    URL: isProd ? 'http://muhammetcelepci.herokuapp.com' : 'http://localhost:3000',
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
  }
};
