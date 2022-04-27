<template>
    <button :class="applyClass" :disabled="disabled"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default /*#__PURE__*/ defineComponent({
    props: {
        variant: { type: String, required: false, default: 'primary', validator: (value: string) => ['primary', 'secondary', 'default', 'danger', 'link', 'menu-danger'].includes(value) },
        size: { type: String, required: false, default: 'md', validator: (value: string) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value) },
        disabled: { type: Boolean, required: false, default: false }
    },
    computed: {
        applyClass() {
            const base = 'btn'

            const classes = {
                primary: 'btn-primary',
                secondary: 'btn-secondary',
                default: 'btn-default',
                danger: 'btn-danger',
                link: 'btn-link',
                'menu-danger': 'btn-menu-danger'
            }

            const sizes = {
                sm: 'btn-sm',
                md: 'btn-md',
                lg: 'btn-lg',
                xl: 'btn-xl',
                full: 'btn-full'
            }

            return [base, classes[this.variant as keyof typeof classes], sizes[this.size as keyof typeof sizes]].join(' ')
        }
    }
})
</script>

<style lang="scss">
@use '@/sass/components/button';
</style>