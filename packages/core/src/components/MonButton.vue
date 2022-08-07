<template>
    <button :class="applyClass" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
.btn {
    @apply rounded-md py-2 px-5 text-lg hover:no-underline outline-none tracking-tight cursor-pointer font-medium text-center box-border transition-all duration-300 whitespace-nowrap;

    > i {
        @apply mr-3;
    }

    /* State */
    &:disabled {
        @apply cursor-not-allowed opacity-50;
    }

    /* Variants */
    &-primary {
        @apply text-white bg-primary-700 hover:bg-primary-800;

        &:focus {
            @apply ring-1 ring-offset-1 ring-primary-700;
        }
    }
    &-secondary {
        @apply text-gray-800 hover:text-primary-800 hover:bg-primary-100 disabled:bg-primary-100;

        &:focus {
            @apply ring-1 ring-offset-1 ring-primary-700 bg-primary-100 text-primary-800;
        }
    }

    &-menu-danger {
        @apply text-black hover:bg-danger-200 hover:text-danger-800 disabled:bg-red-100;

        &:focus {
            @apply ring-1 ring-offset-1 ring-danger-700 bg-danger-200 text-danger-800;
        }
    }
    &-default {
        @apply text-gray-800 bg-gray-400 bg-opacity-40 hover:bg-opacity-60;

        &:focus {
            @apply ring-1 ring-offset-1 ring-gray-400;
        }
    }
    &-danger {
        @apply text-white bg-red-700 hover:bg-red-800;

        &:focus {
            @apply ring-1 ring-offset-1 ring-red-800;
        }
    }
    &-link {
        @apply text-primary-700 hover:text-primary-800;

        &:focus {
            @apply underline;
        }
    }

    /* Sizes */
    &-sm {
        @apply py-1.5 px-3 text-base;
    }
    &-md {
        @apply py-2 px-4 text-lg;
    }
    &-lg {
        @apply py-3 px-5 text-xl;
    }
    &-xl {
        @apply py-4 px-6 text-2xl;
    }
    &-full {
        @apply py-2 px-5 w-full text-center;
    }
}

</style>