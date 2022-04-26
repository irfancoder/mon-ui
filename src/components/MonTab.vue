<template>
    <div>
        <ul class="tab">
            <li v-for="(name, index) in tabNames" :key="index" @click="selected = name" :class="`${selected === name ? 'tab-active' : ''}`">
                {{ name }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script lang="ts">
import { ref, provide, defineComponent } from 'vue'
export default defineComponent({
    setup(props, { slots }) {
        const tabNames = ref(
            slots.default &&
                slots.default().map((tab) => {
                    return tab?.props?.name
                })
        )
        const selected = ref(tabNames.value && tabNames.value[0])

        provide('selected', selected)

        return {
            tabNames,
            selected
        }
    }
})
</script>

<style lang="scss">
@use '@/sass/components/tab';
</style>
