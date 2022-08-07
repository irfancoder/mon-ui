<template>
    <div>
        <ul class="tab">
            <li
                v-for="name in tabNames"
                :key="name"
                :class="{ 'tab-active': selected === name }"
                @click="selected = name">
                <h4>{{ name }}</h4>
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
.tab {
    @apply flex w-full justify-evenly list-none pb-7;

    > li {
        @apply list-none cursor-pointer border-b;
    }

    &-active {
        @apply border-primary-600;

        & > h4 {
            @apply text-primary-500;
        }
    }
}

</style>
