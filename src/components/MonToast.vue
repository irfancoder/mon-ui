<template>
    <transition name="toast">
        <div ref="root" role="alert" :class="`toast toast-${type}`" v-show="show">
            <div class="flex flex-row justify-end">
                <button @click="show = false">X</button>
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

    setup() {
        return {}
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
@use '@/sass/components/toast';
</style>