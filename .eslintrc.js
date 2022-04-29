module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended', 
        '@vue/typescript/recommended'
    ],

    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: [
        'vue'
    ],

    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/first-attribute-linebreak': [ 'error', {
            singleline: 'beside',
            multiline: 'below'
        }],
        indent: ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }],

        'vue/html-closing-bracket-spacing': ['error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
        }],

        'vue/html-quotes': ['error', 'double', { 'avoidEscape': true }],

        'vue/mustache-interpolation-spacing': ['error', 'always'],

        'vue/no-multi-spaces': ['error', {
            'ignoreProperties': false
        }],

        'vue/prop-name-casing': ['error', 'camelCase'],

        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'never',
                'normal': 'any',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],

        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 3
            },
            'multiline': {
                'max': 1
            }
        }],
        
        'comma-dangle': ['error', 'never'],
        'no-new': 0,
        'space-before-function-paren': 0,

        // allow paren-less arrow functions
        'arrow-parens': 0,

        // allow async-await
        'generator-star-spacing': 0,

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'object-curly-spacing': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    }
}
