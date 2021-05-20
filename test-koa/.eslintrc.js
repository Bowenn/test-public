module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'standard',
        'eslint:recommended',
        '@ecomfe/eslint-config',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
    },
};
