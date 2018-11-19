module.exports = {
  extends: 'airbnb',
  root: true,
  rules: {
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
};
