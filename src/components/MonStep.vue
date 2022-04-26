<template>
    <div class="w-full">
        <ul class="step">
            <li v-for="name in stepNames" :key="name" :class="{ 'step-active': selected === name }">
                <h4>{{ name }}</h4>
            </li>
        </ul>
        <slot />
        <div class="flex justify-between px-16 mt-7">
            <button @click.prevent="selected = stepNames[--currentStep]" :disabled="currentStep === 0" class="btn btn-primary">Previous</button>
            <button @click.prevent="selected = stepNames[++currentStep]" v-if="currentStep !== stepNames.length - 1" class="btn btn-primary">Next</button>
            <button class="btn btn-primary" type="submit" v-else>Submit</button>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, provide, defineComponent } from 'vue'
export default defineComponent({
    setup(props, { slots }) {
        const stepNames = ref(
            slots.default &&
                slots.default().map((step) => {
                    return step?.props?.name
                })
        )
        const currentStep = ref(0)
        const selected = ref(stepNames.value && stepNames?.value[currentStep.value])

        provide('selected', selected)

        return {
            stepNames,
            selected,
            currentStep
        }
    }
})
</script>

<style lang="scss" scoped>
@use '@/sass/components/step';
</style>
