<template>
    <details class="accordion" :open="show">
        <summary class="flex justify-between" @click.prevent="toggle">
            <h4>{{ title }}</h4>
            <!-- TODO: Replace icon with chevron up / down -->
            <button>{{ show ? 'X' : 'V' }}</button>
        </summary>
        <slot />
    </details>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: { type: String, required: false, default: 'Title goes here' }
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggle() {
            this.show = !this.show
        },
        open() {
            this.show = true
        },
        close() {
            this.show = false
        }
    }
})
</script>

<style lang="scss" scoped>
.accordion {
    @apply border-b rounded-md p-7;

    &[open] > summary {
        @apply pb-4;
    }

    &::-webkit-details-marker,
    &::marker {
        display: none;
        content: "";
    }
}
</style>