module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'max-len': [
      'error',
      {
        'code': 120,
        'tabWidth': 2,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
      },
    ],
    'require-jsdoc': 0,
  },
};
