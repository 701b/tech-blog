const fs = require('fs')
const path = require('path')
const paths = require('./paths')
const resolve = require('resolve')

function getCompilerOptions() {
  const hasTsConfig = fs.existsSync(paths.appTsConfig)

  if (!hasTsConfig) {
    throw new Error("You don't have a tsconfig.json.")
  }

  const ts = require(resolve.sync('typescript', {
    basedir: paths.appNodeModules,
  }))
  
  const config =
    ts.readConfigFile(paths.appTsConfig, ts.sys.readFile).config || {}
  
  return config.compilerOptions || {}
}

function getAliases() {
  const { baseUrl, paths: tsPaths } = getCompilerOptions()

  if (!baseUrl) {
    return {}
  }

  const baseUrlResolved = path.resolve(paths.appPath, baseUrl)

  if (path.relative(paths.appPath, baseUrlResolved) !== '') {
    return {}
  }

  return Object.keys(tsPaths).reduce((cfg, key) => {
    const keyWithoutWildcard = key.replace('/*', '')
    const tsPathWithoutWildcard = tsPaths[key][0].replace('/*', '')
    
    cfg[keyWithoutWildcard] = path.resolve(__dirname, `../${tsPathWithoutWildcard}`).replaceAll('/*', '')
    
    return cfg
  }, {})
}

module.exports = getAliases()

console.log(getAliases());
