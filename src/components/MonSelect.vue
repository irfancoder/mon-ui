<template>
    <div class="form-input">
        <label v-if="label" :for="`input-${name}`">{{ label }}</label>
        <Multiselect
            :options="selection"
            :mode="type"
            :track-by="trackBy"
            :value-prop="valueProp"
            :label="labelProp"
            @change="handleEmit" />
        <small v-if="description"> {{ description }}</small>

        <!-- Validation message here [WIP] -->
        <span v-if="model && model.exceptions.has(name)" class="text-red-500">{{ model.exceptions.get(name) }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Multiselect from '@vueform/multiselect'
export default defineComponent({
    components: {
        Multiselect
    },
    props: {
        label: { type: String, default: '' },
        labelClass: { type: String, default: '' },
        inputClass: { type: String, default: 'anim-default' },
        description: { type: String, default: '' },
        tooltip: { type: String, default: '' },
        trackBy: { type: String, default: null },
        valueProp: { type: String, default: null },
        labelProp: { type: String, default: null },
        name: { type: String, default: '' },
        model: { type: Object, required: true },
        value: { type: String || Array, required: true },
        modelValue: { type: String || Array, default: ''},
        selection: { type: Object || Array, required: true },
        type: { type: String, required: false, default: 'single' }, // accepted values: ['single', 'multiple', 'tags']
        disabled: { type: Boolean, default: false, required: false }
    },
    
    emits: ['update:modelValue'],

    methods: {
        handleEmit() {
            this.$emit('update:modelValue', this.modelValue)
            this.model.exceptions.clear()
        }
    }
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
