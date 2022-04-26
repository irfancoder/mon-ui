<template>
    <div class="form-input">
        <label :for="`input-${name}`" v-if="label">{{ label }}</label>
        <Multiselect :options="selection" :mode="type" @change="handleEmit" :trackBy="trackBy" :valueProp="valueProp" :label="labelProp" />
        <small v-html="description" v-if="description"></small>

        <!-- Validation message here [WIP] -->
        <span v-if="model.exceptions.has(name)" class="text-red-500">{{ model.exceptions.get(name) }}</span>
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
        value: {},
        modelValue: { required: true },
        selection: { type: Object || Array, required: true },
        type: { type: String, required: false, default: 'single' }, // accepted values: ['single', 'multiple', 'tags']
        disabled: { type: Boolean, default: false, required: false }
    },

    methods: {
        handleEmit() {
            this.$emit('update:modelValue', this.modelValue)
            this.model.exceptions.clear()
        }
    }
})
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
