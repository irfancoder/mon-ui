<template>
    <div>
        <label v-if="label" :for="name">{{ label }}</label>
        <progress
            :id="name"
            :value="value"
            :max="max"
            :class="`progress progress-${variant}`">
            {{ value }}%
        </progress>
        <small v-if="description">{{ description }}</small>
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: { type: String, required: false, default: '' },
        label: { type: String, required: false, default: '' },
        description: { type: String, required: false, default: null },
        value: { type: Number, required: true, default: 50},
        max: { type: Number, required: true, default: 100},
        variant: { type: String, required: true, default: 'primary'}
    }
})
</script>

<style lang="scss" scoped>
@use '@/sass/components/progress';
</style>