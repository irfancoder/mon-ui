declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<unknown, unknown, unknown>
    export default component
}

declare module 'click-outside-vue3'