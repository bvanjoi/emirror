module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    'accessor-pairs': 2,
    'array-callback-return': 2,

    'array-element-newline': 0,

    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    'arrow-parens': ['error', 'as-needed'],

    'arrow-spacing': 0,

    'block-scoped-var': 2,

    'block-spacing': 0,

    'brace-style': 0,

    'callback-return': 0,

    camelcase: 0,

    'capitalized-comments': 0,

    'comma-dangle': 0,

    'comma-spacing': 0,

    'comma-style': 0,

    complexity: 2,

    'computed-property-spacing': 0,

    'consistent-return': 0,

    'consistent-this': [2, 'self', 'that'],

    'constructor-super': 0,

    curly: [2, 'multi-line', 'consistent'],

    'default-case': 2,

    'dot-location': 0,

    'eol-last': 0,

    eqeqeq: [
      2,
      'always',
      {
        null: 'ignore',
      },
    ],

    'for-direction': 2,

    'func-call-spacing': 0,

    'func-name-matching': 0,

    'func-names': 0,

    'func-style': 0,

    'generator-star-spacing': 0,

    'getter-return': [
      2,
      {
        allowImplicit: true,
      },
    ],

    'global-require': 0,

    'guard-for-in': 2,

    'handle-callback-err': 2,

    'id-blacklist': 0,

    'id-length': 0,

    'id-match': 0,

    indent: ['error', 'space'],

    'init-declarations': 0,

    'jsx-quotes': ['error', 'prefer-single'],

    'key-spacing': 0,

    'keyword-spacing': 2,

    'linebreak-style': 0,

    'line-comment-position': 0,

    'lines-around-comment': 0,

    'max-depth': [2, 5],

    'max-len': 0,

    'max-lines': 0,

    'max-nested-callbacks': [2, 3],

    'max-params': [2, 8],

    'max-statements-per-line': 0,

    'max-statements': 0,

    'multiline-ternary': 0,

    'new-cap': [2, {}],

    'new-parens': 2,

    'newline-per-chained-call': 0,

    'no-alert': 1,

    'no-array-constructor': 2,

    'no-await-in-loop': 2,

    'no-bitwise': 0,

    'no-buffer-constructor': 2,

    'no-caller': 2,

    'no-case-declarations': 2,

    'no-catch-shadow': 2,

    'no-class-assign': 2,

    'no-compare-neg-zero': 2,

    'no-cond-assign': [2, 'except-parens'],

    'no-constant-condition': [
      2,
      {
        checkLoops: false,
      },
    ],

    'no-const-assign': 2,

    'no-continue': 0,

    'no-control-regex': 2,

    'no-debugger': 1,

    'no-delete-var': 2,

    'no-div-regex': 0,

    'no-dupe-args': 2,

    'no-dupe-keys': 2,

    'no-dupe-class-members': 2,

    'no-duplicate-case': 2,

    'no-duplicate-imports': 2,

    'no-else-return': 0,

    'no-empty-character-class': 2,

    'no-empty-function': [
      'error',
      {
        allow: ['constructors'],
      },
    ],

    'no-empty-pattern': 2,

    'no-empty': [
      2,
      {
        allowEmptyCatch: true,
      },
    ],

    'no-eq-null': 0,

    'no-eval': 2,

    'no-ex-assign': 2,

    'no-extend-native': [
      2,
      {
        exceptions: ['Array', 'Object'],
      },
    ],

    'no-extra-bind': 2,

    'no-extra-label': 2,

    'no-extra-parens': [2, 'functions'],

    'no-extra-semi': 2,

    'no-fallthrough': [
      2,
      {
        commentPattern: '.',
      },
    ],

    'no-floating-decimal': 2,

    'no-func-assign': 2,

    'no-global-assign': 2,

    'no-implicit-coercion': [2, {}],

    'no-implied-eval': 2,

    'no-implicit-globals': 2,

    'no-inline-comments': 0,

    'no-inner-declarations': [2, 'both'],

    'no-invalid-regexp': 2,

    'no-invalid-this': 0,

    'no-irregular-whitespace': [2],

    'no-iterator': 2,

    'no-label-var': 2,

    'no-labels': 0,

    'no-lone-blocks': 2,

    'no-lonely-if': 0,

    'no-loop-func': 2,

    'no-magic-numbers': 0,

    'no-mixed-operators': [
      2,
      {
        groups: [['&&', '||']],
      },
    ],

    'no-mixed-requires': 0,

    'no-mixed-spaces-and-tabs': 2,

    'no-multi-assign': 2,

    'no-multi-spaces': 2,

    'no-multi-str': 2,

    'no-multiple-empty-lines': [2, {}],

    'no-negated-condition': 0,

    'no-nested-ternary': 0,

    'no-new-func': 0,

    'no-new-object': 2,

    'no-new-require': 2,

    'no-new-symbol': 2,

    'no-new-wrappers': 2,

    'no-new': 2,

    'no-obj-calls': 2,

    'no-octal-escape': 2,

    'no-octal': 2,

    'no-path-concat': 2,

    'no-param-reassign': 2,

    'no-plusplus': 0,

    'no-process-env': 0,

    'no-process-exit': 0,

    'no-prototype-builtins': 0,

    'no-proto': 2,

    'no-redeclare': 2,

    'no-regex-spaces': 2,

    'no-restricted-globals': 0,

    'no-restricted-imports': 0,

    'no-restricted-modules': 'off',

    'no-restricted-properties': 0,

    'no-restricted-syntax': 0,

    'no-return-assign': 2,

    'no-return-await': 2,

    'no-script-url': 2,

    'no-self-assign': 2,

    'no-self-compare': 2,

    'no-sequences': 2,

    'no-shadow-restricted-names': 2,

    'no-shadow': 'error',

    'no-sparse-arrays': 2,

    'no-sync': 0,

    'no-tabs': 0,

    'no-template-curly-in-string': 2,

    'no-ternary': 0,

    'no-this-before-super': 2,

    'no-throw-literal': 2,

    'no-trailing-spaces': [2, {}],

    'no-undef-init': 2,

    'no-undef': 2,

    'no-underscore-dangle': 0,

    'no-unexpected-multiline': 2,

    'no-unmodified-loop-condition': 2,

    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],

    'no-unreachable': 2,

    'no-unsafe-finally': 2,

    'no-unsafe-negation': 2,

    'no-unused-expressions': [2, {}],

    'no-unused-labels': 2,

    'no-unused-vars': [2, {}],

    'no-useless-call': 2,

    'no-useless-computed-key': 2,

    'no-useless-concat': 2,

    'no-useless-escape': 2,

    'no-useless-rename': 2,

    'no-useless-return': 0,

    'no-var': 2,

    'no-void': 2,

    'no-warning-comments': 1,

    'no-whitespace-before-property': 2,

    'no-with': 2,

    'nonblock-statement-body-position': 2,

    'object-curly-newline': 0,

    'object-curly-spacing': 0,

    'object-property-newline': 0,

    'object-shorthand': 0,

    'one-var-declaration-per-line': 0,

    'one-var': [2, {}],

    'operator-assignment': 0,

    'operator-linebreak': 0,

    'padded-blocks': 0,

    'padding-line-between-statements': 0,

    'prefer-arrow-callback': 0,

    'prefer-const': 0,

    'prefer-destructuring': 0,

    'prefer-numeric-literals': 0,

    'prefer-promise-reject-errors': 2,

    'prefer-rest-params': 2,

    'prefer-spread': 0,

    'prefer-template': 0,

    quotes: [2, 'single', {}],

    'quote-props': 0,

    radix: 2,

    'require-await': 0,

    'require-yield': 2,

    'rest-spread-spacing': [2, 'never'],

    'semi-spacing': 0,

    'semi-style': [2, 'last'],

    semi: 2,

    'sort-imports': 0,

    'sort-keys': 0,

    'sort-vars': 0,

    'space-before-blocks': 0,

    'space-before-function-paren': 0,

    'space-in-parens': 0,

    'space-infix-ops': 2,

    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],

    'spaced-comment': [
      2,
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    strict: [2, 'never'],

    'switch-colon-spacing': 0,

    'symbol-description': 2,

    'template-curly-spacing': 0,

    'template-tag-spacing': 0,

    'unicode-bom': 2,

    'use-isnan': 2,

    'valid-jsdoc': 0,

    'valid-typeof': 2,

    'vars-on-top': 0,

    'wrap-iife': [2, 'inside'],

    'wrap-regex': 0,

    'yield-star-spacing': 0,

    yoda: 2,

    'require-jsdoc': 'off',

    'no-console': [
      'error',
      {
        allow: ['error', 'warn', 'info'],
      },
    ],

    'no-extra-boolean-cast': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
};
