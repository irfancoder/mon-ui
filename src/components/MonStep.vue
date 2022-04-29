<template>
    <div class="w-full">
        <ul class="step">
            <li v-for="name in stepNames" :key="name" :class="{ 'step-active': selected === name }">
                <h4>{{ name }}</h4>
            </li>
        </ul>
        <slot />
        <div class="flex justify-between px-16 mt-7">
            <button :disabled="currentStep === 0" class="btn btn-primary" @click.prevent="selected = stepNames && stepNames[--currentStep]">
                Previous
            </button>
            <button v-if="currentStep !== (stepNames && stepNames.length - 1)" class="btn btn-primary" @click.prevent="selected = stepNames && stepNames[++currentStep]">
                Next
            </button>
            <button v-else class="btn btn-primary" type="submit">
                Submit
            </button>
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
        const selected = ref(stepNames.value && stepNames.value[currentStep.value])

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
