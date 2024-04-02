module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettierd'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['tests/**/*'],
            plugins: ['jest'],
            env: {
                'jest/globals': true,
            },
        },
    ],
};
