module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'plugin:security/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    plugins: [
        'import',
        'security',
    ],
    rules: {
        indent: [2, 4],
        'max-len': [2, { code: 120, ignoreUrls: true }],
        'consistent-return': 1,
        'no-underscore-dangle': 0,
        'arrow-parens': 0,
        'no-multiple-empty-lines': 2,
        'keyword-spacing': 2,
        'comma-dangle': 2,
        'space-before-function-paren': 2,
        'padded-blocks': 2,
        'no-restricted-syntax': 1,
        'no-shadow': 2,
        'no-await-in-loop': 1,
        'object-shorthand': 1,
        'max-classes-per-file': 0,
        'global-require': 1,
    },
};
