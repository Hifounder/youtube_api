module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here

    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        // 強制使用單引號
        quotes: [2, 'single'],
        // airbnb 不允許使用 console ，這邊打開
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'class-methods-use-this': 0,
        // allow underscore
        'no-underscore-dangle': 0,
        'no-plusplus': 0,
        strict: 0,
        'max-len': [1, { code: 140, tabWidth: 4 }],
        camelcase: 1,
        'no-unused-vars': 1,
        'no-unused-expressions': [2, {
            allowShortCircuit: false,
            allowTernary: true
        }],
        'brace-style': [2, 'stroustrup'],
        'import/no-unresolved': 0,
        'import/no-cycle': 0,
        'no-param-reassign': 0,
        'func-names': 0,
        // 不使用 array destructuring
        'prefer-destructuring': 0,
        // 部分情境下會使用到
        'import/prefer-default-export': 2,
        // 保留 continue 使用
        'no-continue': 1,
        // 允許提升 functions & classes
        'no-use-before-define': [2, { functions: false, classes: false }],
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        'no-bitwise': 0
    }
}
