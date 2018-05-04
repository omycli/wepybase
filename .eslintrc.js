module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  'globals': {
      'wx': true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'brace-style': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'prefer-promise-reject-errors': 0,
    'comma-dangle': ["error", "only-multiline"],
    'padded-blocks': 0,
    'one-var': 0,
    'no-return-assign': 0,
    'indent': ['error', 4],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "semi": [0],
    "semi-spacing": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "space-before-function-paren": [0],
    "space-in-parens": 0,
    "space-before-blocks": 0,
    "space-unary-ops": [0],
    "spaced-comment": 0,
    "no-trailing-spaces": 0,
    'eqeqeq': [0]
  }
}
