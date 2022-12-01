/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

require("dotenv").config();
const webpack = require("webpack");

// module.exports = {
//   webpack: (config) => {
//     config.plugins.push(new webpack.EnvironmentPlugin(process.env));
//     return config;
//   },
// };

// module.exports = {
//   images: {
//     domains: ["https://lh3.googleusercontent.com"],
//   },
// };

module.exports = nextConfig;
