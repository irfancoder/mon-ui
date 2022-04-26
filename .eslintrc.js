module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential', 
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
        indent: ['error', 4],
        '@typescript-eslint/no-explicit-any': 'off'
    }
}
