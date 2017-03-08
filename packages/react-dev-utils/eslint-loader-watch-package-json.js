'use strict';

const eslintLoader = require('eslint-loader')
const loaderUtils = require("loader-utils")

function eslintLoaderWatchPackageJson() {
  const { packageJsonPath } = loaderUtils.getOptions(this)
  if (packageJsonPath) {
    this.addDependency(packageJsonPath)
  }

  return eslintLoader.apply(this, arguments)
}

module.exports = eslintLoaderWatchPackageJson
