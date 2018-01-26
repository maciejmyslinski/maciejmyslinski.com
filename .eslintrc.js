module.exports = {
  root: true,
  extends: ['airbnb'],
  settings: {
    "import/core-modules": ['react', 'prop-types']
  },
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }]
  }
}
