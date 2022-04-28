/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        colors: {
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            slate: colors.slate,
            gray: colors.gray,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,

            primary: colors.teal,
            danger: colors.red,
            default: colors.gray,
            success: colors.green
        },
        extend: {
            spacing: {
                'screen-60': '60vh',
                'screen-70': '70vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
                '1/5': '20%',
                '1/6': '16.7%',
                '1/7': '14.3%',
                '1/8': '12.5%',
                '1/9': '11.1%',
                '1/10': '10%'
            },
            minWidth: {
                48: '12rem'
            },
        }
    },
    plugins: []
}
