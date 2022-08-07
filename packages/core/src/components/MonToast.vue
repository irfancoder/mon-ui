<template>
    <transition name="toast">
        <div
            v-show="show"
            ref="root"
            role="alert"
            :class="`toast toast-${type}`">
            <div class="flex flex-row justify-end">
                <button @click="dismiss">
                    X
                </button>
            </div>
            <span> {{ message }} </span>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent, render } from 'vue'
import Timer from '../utils/timer.js'

export default defineComponent({
    props: {
        id: { type: String, required: true },
        type: { type: String, required: true },
        message: { type: String, required: true },
        duration: { type: Number, required: false, default: 3000 } // 3s
    },

    data() {
        return {
            show: false,
            timer: null as Timer | null
        }
    },
    mounted() {
        this.showToast()
    },

    methods: {
        showToast() {
            this.show = true
            if (this.duration) {
                this.timer = new Timer(this.dismiss, this.duration)
            }
        },

        dismiss() {
            if (this.timer) (this.timer as Timer).stop()
            this.show = false
            render(null, this.$refs.root as Element)
            this.removeElement(this.$refs.root as Element)
            this.removeElement(document.getElementById(this.id) as Element)
        },

        removeElement(el: Element) {
            if (typeof el.remove !== 'undefined') {
                el.remove()
            } else {
                el.parentNode?.removeChild(el)
            }
        }
    }
})
</script>

<style lang="scss">
.toast {
    @apply w-full px-4 py-2 text-sm rounded-md shadow-lg;

    &-wrapper {
        @apply fixed flex flex-col-reverse top-10 right-10 w-full max-w-xs gap-4;
    }

    &-info {
        @apply bg-primary-100 ring-1 ring-primary-500;
    }
    &-success {
        @apply bg-green-100 ring-1 ring-green-500;
    }
    &-error {
        @apply bg-red-100 ring-1 ring-red-500;
    }
    &-warning {
        @apply bg-yellow-100 ring-1 ring-yellow-500;
    }
    &-default {
        @apply bg-slate-100 ring-1 ring-slate-500;
    }

    /* Transitions */
    &-enter-active,
    &-leave-active {
        @apply transition-all ease-in duration-100;
    }

    &-enter-from,
    &-leave-to {
        @apply transform opacity-0 scale-95;
    }
}
</style>