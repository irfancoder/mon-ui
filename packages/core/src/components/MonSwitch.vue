<template>
    <div>
        <label :for="name" class="flex items-center cursor-pointer">
            <div class="relative">
                <input
                    :id="name"
                    type="checkbox"
                    :class="inputClass"
                    :name="name"
                    :checked="modelValue"
                    :disabled="disabled"
                    @change="handleEmit($event)">
                <div :class="{ 'transition-all block border border-black border-opacity-30 w-14 h-8 rounded-full': true, 'bg-primary-700 border-opacity-0': modelValue }"></div>
                <div class="dot absolute left-1 top-1 border border-black border-opacity-30 bg-white w-6 h-6 rounded-full transition"></div>
            </div>

            <div class="ml-7">
                <slot></slot>
            </div>
        </label>

        <span v-if="model.exceptions.has(name)" class="text-red-500">{{ model.exceptions.get(name) }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        labelClass: { type: String, default: '' },
        inputClass: { type: String, default: 'hidden' },
        description: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        value: { type: Boolean, required: false, default: false },
        tooltip: { type: String, default: '' },
        name: { type: String, default: '' },
        model: { type: Object, required: true },
        modelValue: { type: Boolean, required: true },
        disabled: { type: Boolean, default: false, required: false }
    },
    
    emits: ['update:modelValue'],

    methods: {
        handleEmit($event: Event) {
            this.$emit('update:modelValue', ($event.target as HTMLInputElement).checked)
            this.model.exceptions.clear()
        }
    }
})
</script>


<style lang="scss" scoped>
input:checked ~ .dot {
    @apply transform translate-x-full border-0;
}
</style>