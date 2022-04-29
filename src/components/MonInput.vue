<template>
    <div class="form-input">
        <label v-if="label" :for="`input-${name}`">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>

        <div class="relative">
            <input
                v-if="type !== 'password' && type !== 'textarea'"
                :id="`input-${name}`"
                :type="type"
                :class="inputClass"
                :name="name"
                :maxlength="maxChar"
                :placeholder="placeholder"
                :disabled="disabled"
                autocomplete="on"
                @input="handleEmit($event)">

            <textarea
                v-else-if="type === 'textarea'"
                :id="`input-${name}`"
                :name="name"
                cols="30"
                rows="10"
                :class="inputClass"
                :maxlength="maxChar"
                :placeholder="placeholder"
                :disabled="disabled"
                autocomplete="on"
                @input="handleEmit($event)" />
            <input
                v-else-if="type === 'password'"
                :id="`input-${name}`"
                :type="mType"
                :class="inputClass"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
                autocomplete="on"
                @input="handleEmit($event)">
            <label v-if="type === 'password'" class="form-showpassword anim-default" @click="toggleVisibility">{{ showPassword ? 'Hide' : 'Show' }}</label>
            <span v-if="maxChar" class="absolute anim-default right-0 bottom-0 px-4 pb-2">{{ maxChar - charLength }}</span>
        </div>

        <small v-if="description">{{ description }}</small>

        <!-- Validation message here [WIP] -->
        <span v-if="model && model.exceptions.has(name)" class="text-red-500">{{ model.exceptions.get(name) }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: { type: String, default: '' },
        labelClass: { type: String, default: '' },
        inputClass: { type: String, default: 'anim-default' },
        description: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        tooltip: { type: String, default: '' },
        required: { type: Boolean, required: false, default: false },
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
            return (this.modelValue as string).length
        }
    },

    methods: {
        handleEmit($event: Event) {
            this.$emit('update:modelValue', ($event?.target as HTMLInputElement).value)
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
@use '@/sass/components/input';
</style>