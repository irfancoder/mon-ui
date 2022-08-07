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
.input {
    &-group {
        @apply pb-6 w-full flex flex-col;

        label {
            @apply pb-2;
        }

        &-content {
            @apply flex flex-row relative;
        }

        &-left {
            @apply px-4 text-base flex-grow text-black border border-gray-400 border-solid border-l-0 rounded-r rounded-l-none h-10 ring-1 ring-opacity-0 ring-primary-800 hover:ring-opacity-50 focus:ring-opacity-100;
        }
        &-right {
            @apply px-4 text-base flex-grow text-black border border-gray-400 border-solid border-r-0 rounded-l rounded-r-none h-10 ring-1 ring-opacity-0 ring-primary-800 hover:ring-opacity-50 focus:ring-opacity-100;
        }
    }

    &-prepend {
        @apply flex items-center rounded-l bg-gray-200 border border-gray-400 border-solid border-r-0 text-black font-medium px-4;
    }
    &-append {
        @apply flex items-center rounded-r bg-gray-200 border border-gray-400 border-solid border-l-0 text-black font-medium px-4;
    }
}

</style>