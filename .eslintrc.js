module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
        "node": true,
        "es6": true
    },
    extends: ['plugin:vue/recommended'],
    plugins: ['html', 'vue', 'prettier'],
    'rules': {
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'semi' : ['error','always'],
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'space-before-function-paren': 0,
        'no-useless-escape': 'off'
    }
}
