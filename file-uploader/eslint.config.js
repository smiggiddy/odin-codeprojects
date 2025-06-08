const { defineConfig } = require('eslint/config');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = defineConfig([
    {
        files: ['**/*.js'],
        extends: ['js/recommended'],
        plugins: { js },
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
]);
