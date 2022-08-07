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
.form {
    &-input {
        @apply pb-6 w-full flex flex-col;

        label {
            @apply pb-2;
        }

        input {
            &[type="text"],
            &[type="email"],
            &[type="password"] {
                @apply px-4 text-base w-full text-black border border-gray-400 border-solid rounded h-10 ring-1 ring-opacity-0 ring-primary-800 hover:ring-opacity-50 focus:ring-opacity-100;
            }
        }

        textarea {
            @apply px-4 py-2 text-base w-full text-black border border-gray-400 border-solid rounded ring-1 ring-opacity-0 ring-primary-800 hover:ring-opacity-50 focus:ring-opacity-100;
        }

        small {
            @apply pt-2 text-gray-500;
        }

        &:first-child {
            @apply pt-4;
        }

        &:last-child {
            @apply pb-4;
        }
    }

    &-showpassword {
        @apply z-10 absolute cursor-pointer font-medium text-gray-500 top-2 right-6 hover:text-gray-800;
    }

    &-checkbox {
        @apply flex items-start;

        input[type="checkbox"] {
            @apply mt-1 h-4 w-4 border-gray-300 rounded;

            :checked {
            }
        }
    }
}

</style>