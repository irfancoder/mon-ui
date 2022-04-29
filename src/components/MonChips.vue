<template>
    <div class="flex flex-wrap gap-2">
        <!-- Edit Mode -->
        <template v-if="editMode">
            <div v-for="[index, item] in selected" :key="index">
                <input
                    :id="`${name + '_' + index}`"
                    type="checkbox"
                    class="hidden"
                    :value="index"
                    :checked="true"
                    :disabled="true">
                <label :for="`${name + '_' + index}`" :class="`chip chip-${variant}`">
                    {{ item }}
                    <button class="ml-3" @click.prevent="handleRemove(index)">x</button>
                </label>
            </div>
            <div class="relative">
                <!-- TODO: Replace icon '+' -->
                <span class="text-default-400 absolute left-2 top-0.5">+</span>
                <input
                    id="new_chip"
                    ref="to_add"
                    type="text"
                    placeholder="Press Enter to add"
                    class="chip chip-add"
                    @keydown.enter="handleAdd($event)">
            </div>
        </template>

        <!-- Filter Mode -->
        <template v-else>
            <div v-for="(item, index) in selection" :key="index">
                <input
                    :id="`${name + '_' + index}`"
                    type="checkbox"
                    class="hidden"
                    :value="index"
                    :checked="isActive(index)"
                    :disabled="mode === 'edit'"
                    @change="mode === 'filter' && handleEmit($event)">
                <label :for="`${name + '_' + index}`" :class="`chip chip-${variant}`">
                    {{ item }}
                </label>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { camelize } from '@/utils/index.ts'

export default defineComponent({
    props: {
        selection: { type: Object, required: false, default: () => {} },
        name: { type: String, required: true },
        model: { type: Object, required: true },
        modelValue: { type: Object, required: true },
        variant: { type: String, required: false, default: 'primary' },
        mode: { type: String, required: false, default: 'filter', validator: (prop: string) => ['filter', 'edit'].includes(prop) }
    },
    
    emits: ['update:modelValue'],

    data() {
        return {
            selected: this.mode === 'edit' ? (new Map(Object.entries(this.modelValue)) as Map<string, string>) : (new Set() as Set<string>)
        }
    },

    computed: {
        editMode() {
            return this.mode === 'edit'
        }
    },

    methods: {
        /* Filter Mode */
        handleEmit($event: Event) {
            const value = ($event.target as HTMLInputElement).value
            if (this.isActive(value)) this.selected.delete(value)
            else (this.selected as Set<string>).add(value)
            this.$emit('update:modelValue', [...this.selected])
        },
        isActive(index: string) {
            return this.selected.has(index)
        },
        
        /* Editable Mode */
        handleAdd($event: Event) {
            const value = ($event.target as HTMLInputElement).value
            ;(this.selected as Map<string, string>).set(camelize(value), value)
            ;(this.$refs.to_add as HTMLInputElement).value = ''
            this.$emit('update:modelValue', Object.fromEntries(this.selected as Map<string, string>))
        },
        handleRemove(index: string) {
            this.selected.delete(index)
            this.$emit('update:modelValue', Object.fromEntries(this.selected as Map<string, string>))
        }
    }
})
</script>

<style lang="scss" scoped>
@use '@/sass/components/chips';
</style>