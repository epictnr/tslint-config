module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@epictnr/eslint-config-epictnr',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/array-type': ['error', {"default": "generic"}],
    '@typescript-eslint/ban-types': ['error', {
      types: {
        'Boolean': {
          message: 'Use \"boolean\" instead.',
          fixWith: 'boolean'
        },
        'Number': {
          message: 'Use \"number\" instead.',
          fixWith: 'number'
        },
        'Object': {
          message: 'Use \"object\" instead.',
          fixWith: 'object'
        },
        'String': {
          message: 'Use \"string\" instead.',
          fixWith: 'string'
        },
        'Symbol': {
          message: 'Use \"symbol\" instead.',
          fixWith: 'symbol'
        }
      }
    }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'MemberExpression': 1,
      'FunctionDeclaration': { parameters: 1, body: 1 },
      'FunctionExpression': { parameters: 1, body: 1 },
      'CallExpression': { arguments: 1 },
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1,
      'flatTernaryExpressions': false,
      'ignoreComments': false
    }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      caughtErrorsIgnorePattern: '^_'
    }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': ['error', {
      'format': ['camelCase'],
      'selector': 'variable'
    }],
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as'
    }]
  }
}
