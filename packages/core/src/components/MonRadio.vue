<template>
    <div class="radio-container">
        <label
            v-for="(option, index) in selection"
            :key="index"
            :class="`radio-label ${selected === index ? 'radio-label-selected' : ''}`"
            :for="index">
            <input
                :id="index"
                type="radio"
                class="hidden"
                :name="name"
                :value="index"
                :checked="index === selected"
                @change="handleEmit($event)"> {{ option }}
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: { type: String, required: true },
        selection: { type: Object, required: true },
        modelValue: { type: String, required: true }
    },
    
    emits: ['update:modelValue'],

    data() {
        return {
            selected: this.modelValue
        }
    },
    methods: {
        handleEmit($event: Event) {
            this.selected = ($event.target as HTMLInputElement).value
            this.$emit('update:modelValue', ($event.target as HTMLInputElement).value)
        }
    }
})
</script>

<style lang="scss">
.radio {
    &-container {
        @apply flex md:inline-flex overflow-auto border border-black border-opacity-30 rounded;
    }

    &-label {
        @apply inline-flex items-center whitespace-nowrap cursor-pointer px-4 py-2 border-r border-opacity-30 border-black hover:bg-primary-100;

        &:last-child {
            @apply border-opacity-0;
        }

        &-selected {
            @apply bg-primary-700 cursor-default text-white hover:bg-primary-700;
        }
    }
}

</style>
