module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'globals': {
        'swan': 'readonly',
        'App': 'writable',
        'Page': 'writable',
        'Component': 'writable'
    },
    // 'extends': 'eslint:recommended',
    'extends': [
        'eslint:recommended',
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/import'
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'comma-dangle': [
            'warn',
            'never'
        ],
        'no-multi-spaces': [
            'warn',
            {
                'ignoreEOLComments': true
            }
        ],
        '@babel/new-cap': [
            'off'
        ],
        '@babel/object-curly-spacing': [
            'off'
        ],
        'import/unambiguous': [
            'off'
        ]
    }
};
