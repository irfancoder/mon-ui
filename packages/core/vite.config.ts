import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts({
        outputDir: './lib'
    })],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/')
        },
        extensions: ['.ts', '.js']
    },
    // base: process.env.NODE_ENV === 'production' ? '/mon-ui/' : ''
    /** For Library Production */
    build: {
        lib: {
            name: 'solar-ui/core',
            entry: resolve(__dirname, './src/index.ts'),
            fileName: (format) => `mon-ui.core.${format}.js`,
            formats: ['es']
        },
        rollupOptions: {
            treeshake: true,
            external: ['vue'],
            output: {
                dir: './lib',
                format: 'esm',
                esModule: true,
                preserveModules: true,
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
