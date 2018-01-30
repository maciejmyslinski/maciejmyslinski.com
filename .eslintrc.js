var path = require('path')

module.exports = {
  root: true,
  extends: ['airbnb'],
  settings: {
    'import/core-modules': ['react', 'prop-types'],
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/no-unescaped-entities': 'off',
  },
  globals: {
    graphql: true,
  },
}
