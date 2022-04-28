import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
        extensions: ['ts']
    },
    base: '/mon-ui/'
    /** For Library Production */
    // build: {
    //     lib: {
    //         formats: ['es'],
    //         entry: resolve(__dirname, 'index.ts'),
    //     },
    //     rollupOptions: {
    //         input: {
    //             index: './index.ts',
    //             components: './src/components/index.ts',
    //         },
    //         external: ['vue'],
    //         output: {
    //             dir: './dist',
    //             entryFileNames: ({ name: fileName }) => `mon-ui.${fileName}.js`,
    //             globals: {
    //                 vue: 'Vue'
    //             }
    //         }
    //     }
    // }
})
