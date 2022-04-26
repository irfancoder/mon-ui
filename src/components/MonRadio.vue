<template>
    <div class="radio-container">
        <label :class="`radio-label ${selected === index ? 'radio-label-selected' : ''}`" v-for="(option, index) in selection" :key="index" :for="index">
            <input :id="index" type="radio" class="hidden" :name="name" :value="index" @change="handleEmit($event)" /> {{ option }}
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: { type: String, required: true },
        selection: { type: Object, required: true },
        modelValue: { required: true }
    },
    data() {
        return {
            selected: this.modelValue
        }
    },
    methods: {
        handleEmit($event: Event) {
            this.$emit('update:modelValue', ($event.target as HTMLInputElement).value)
        }
    }
})
</script>

<style lang="scss">
@use '@/sass/components/radio';
</style>
