<template>
    <div v-if="selected === name" class="w-full">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'
export default defineComponent({
    props: {
        name: { type: String, required: true }
    },
    setup() {
        const selected = inject('selected')
        return {
            selected
        }
    }
})
</script>