module.exports = {
  scripts: {
    test: 'ava',
    'test:watch': 'ava -w',
    lint: 'eslint src',
    start: 'webpack-dev-server',
    build: 'webpack --config ./webpack.production.config.js'
  }
}
