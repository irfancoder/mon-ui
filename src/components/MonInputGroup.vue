<template>
    <div class="input-group">
        <label v-if="label" :for="`input-${name}`">{{ label }}</label>

        <div class="input-group-content">
            <div v-if="placement === 'left'" class="input-prepend">
                <span>{{ unit }}</span>
            </div>
            <input
                :id="`input-${name}`"
                :class="`input-group-${placement}`"
                :type="type"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
                autocomplete="on">
            <div v-if="placement === 'right'" class="input-append">
                <span>{{ unit }}</span>
            </div>
        </div>
        <small v-if="description">{{ description }}</small>

        <!-- Validation message here [WIP] -->
        <span v-if="model.exceptions.has(name)" class="text-red-500">{{ model.exceptions.get(name) }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: { type: String, default: '' },
        labelClass: { type: String, default: '' },
        inputClass: { type: String, default: 'anim-default' },
        placement: { type: String, default: 'left' },
        unit: { type: String, required: true },
        description: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        tooltip: { type: String, default: '' },
        maxChar: { type: Number, default: null },
        name: { type: String, default: '' },
        model: { type: Object, required: true },
        modelValue: { type: String, required: true },
        type: { type: String, required: false, default: 'text' },
        disabled: { type: Boolean, default: false, required: false }
    },
    
    emits: ['update:modelValue'],

    data() {
        return {
            mType: this.type,
            showPassword: false
        }
    },

    computed: {
        charLength() {
            return (this.modelValue as string)?.length
        }
    },

    methods: {
        handleEmit($event: Event) {
            this.$emit('update:modelValue', ($event.target as HTMLInputElement).value)
            this.model.exceptions.clear()
        },
        toggleVisibility() {
            this.showPassword = !this.showPassword
            if (this.showPassword) {
                this.mType = 'text'
            } else {
                this.mType = 'password'
            }
        }
    }
})
</script>

<style lang="scss">
@use '@/sass/components/inputgroup';
</style>