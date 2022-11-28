// var DeclarationBundlerPlugin = require("declaration-bundler-webpack-plugin");
var BundleDeclarationsWebpackPlugin = require("bundle-declarations-webpack-plugin");
var GeneratePackageJsonPlugin = require("generate-package-json-webpack-plugin");
var package = require("./package.json")
var path = require("path");

delete package.devDependencies
delete package.dependencies
delete package.scripts

module.exports = {
  mode:"development",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "index.js",
    path: path.resolve("./dist"),
    library: {
      type: "module",
    },
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new BundleDeclarationsWebpackPlugin(),
    new GeneratePackageJsonPlugin(package)
  ],
  experiments: {
    outputModule: true,
  },
};
