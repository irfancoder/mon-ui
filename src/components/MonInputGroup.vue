<template>
    <div class="input-group">
        <label :for="`input-${name}`" v-if="label">{{ label }}</label>

        <div class="input-group-content">
            <div class="input-prepend" v-if="placement === 'left'">
                <span>{{ unit }}</span>
            </div>
            <input :id="`input-${name}`" :class="`input-group-${placement}`" :type="type" :name="name" :placeholder="placeholder" :disabled="disabled" autocomplete="on" />
            <div class="input-append" v-if="placement === 'right'">
                <span>{{ unit }}</span>
            </div>
        </div>
        <small v-html="description" v-if="description"></small>

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
        modelValue: { required: true },
        type: { type: String, required: false, default: 'text' },
        disabled: { type: Boolean, default: false, required: false }
    },

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