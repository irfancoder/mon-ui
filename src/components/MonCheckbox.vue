<template>
    <div class="form-checkbox">
        <input :id="name" type="checkbox" :class="inputClass" :name="name" :checked="modelValue" @change="handleEmit($event)" :disabled="disabled" />

        <div class="flex flex-col">
            <label :for="name" class="flex justify-start space-x-4">
                <i
                    :class="`fn fn-check text-base font-bold border rounded-full leading-none px-[4px] pt-[3px] pb-[2px] h-6 leading-none
                    ${modelValue ? 'bg-success-100 text-success-700 border-success-700' : 'bg-primary-50 text-gray-500 border-transparent'}`"
                >
                    ✓
                </i>
                <slot></slot>
            </label>

            <small v-if="description">{{ description }}</small>
        </div>

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
        value: Boolean,
        tooltip: { type: String, default: '' },
        name: { type: String, default: '' },
        model: { type: Object, required: true },
        modelValue: { type: Boolean, required: true },
        disabled: { type: Boolean, default: false, required: false }
    },

    methods: {
        handleEmit($event: Event) {
            this.$emit('update:modelValue', ($event.target as HTMLInputElement).checked)
            this.model.exceptions.clear()
        }
    }
})
</script>
