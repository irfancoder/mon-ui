<template>
    <div class="dropdown" tabindex="0" v-click-away="!disableClickAway && closeDropdown">
        <transition
            v-if="!persistent"
            :enter-active-class="enterActiveClass"
            :enter-class="enterClass"
            :enter-to-class="enterToClass"
            :leave-active-class="leaveActiveClass"
            :leave-class="leaveClass"
            :leave-to-class="leaveToClass"
            @enter="enterHook"
            @after-leave="afterLeaveHook"
        >
            <div v-if="show" :class="`${contentClass} dropdown-anchor-${anchor} ${dropdownDirection}`">
                <slot :close="closeDropdown" :toggle="toggleDropdown"> </slot>
            </div>
        </transition>
        <transition
            v-else
            :enter-active-class="enterActiveClass"
            :enter-class="enterClass"
            :enter-to-class="enterToClass"
            :leave-active-class="leaveActiveClass"
            :leave-class="leaveClass"
            :leave-to-class="leaveToClass"
            @enter="enterHook"
            @after-leave="afterLeaveHook"
        >
            <div v-show="show" :class="`${contentClass} dropdown-anchor-${anchor} ${dropdownDirection}`">
                <slot :close="closeDropdown" :toggle="toggleDropdown"> </slot>
            </div>
        </transition>

        <button v-if="!$slots.trigger" @click="toggleDropdown" aria-haspopup="true" aria-expanded="true" :class="labelClass">
            {{ label }}
        </button>
        <div v-else tabindex="0">
            <slot name="trigger" :open="openDropdown" :close="closeDropdown" :toggle="toggleDropdown"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { directive } from 'click-outside-vue3'
export default /*#__PURE__*/ defineComponent({
    props: {
        label: { type: String, required: false },
        labelClass: { type: String, required: false },
        contentClass: { type: String, required: false, default: 'dropdown-content' },
        enterActiveClass: { type: String, required: false, default: 'dropdown-enter-active' },
        enterClass: { type: String, required: false, default: 'dropdown-enter' },
        enterToClass: { type: String, required: false, default: 'dropdown-enter-to' },
        leaveActiveClass: { type: String, required: false, default: 'dropdown-leave-active' },
        leaveClass: { type: String, required: false, default: 'dropdown-leave' },
        leaveToClass: { type: String, required: false, default: 'dropdown-leave-to' },
        anchor: { type: String, required: false, default: 'right' },
        dropUp: { type: Boolean, required: false, default: false },
        persistent: { type: Boolean, required: false, default: false },
        openOnMount: { type: Boolean, required: false, default: false },
        disableClickAway: { type: Boolean, required: false, default: false },
        disableEsc: { type: Boolean, required: false, default: false }
    },
    data() {
        return {
            show: false,
            visible: true
        }
    },

    mounted() {
        if (this.openOnMount) this.openDropdown()
        if (!this.disableEsc) document.addEventListener('keydown', this.bindEscKey)
    },

    computed: {
        dropdownDirection() {
            if (this.visible) return this.dropUp ? 'drop-up' : 'drop-down'
            else return this.dropUp ? 'drop-down' : 'drop-up'
        }
    },

    beforeUnmount() {
        if (!this.disableEsc) document.removeEventListener('keydown', this.bindEscKey)
    },

    directives: {
        'click-away': directive
    },

    methods: {
        enterHook(el: Element, done: () => void) {
            this.menuVisible(el)
            this.$nextTick(() => {
                (el as HTMLElement).focus()
            })
            done()
        },

        afterLeaveHook() {
            this.visible = true
        },

        menuVisible(el: Element) {
            var rect = el.getBoundingClientRect()
            this.visible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */
        },

        toggleDropdown() {
            if (this.show) this.closeDropdown()
            else this.openDropdown()
        },

        openDropdown() {
            this.$emit('before-open')
            this.show = true
            this.$emit('after-open')
        },
        closeDropdown() {
            this.$emit('before-close')
            this.show = false
            this.$emit('after-close')
        },

        bindEscKey: function (event: any) {
            if (this.show === true && event.keyCode === 27) this.closeDropdown()
        },

        doNothing() {
            console.log('hello')
        }
    }
})
</script>

<style lang="scss">
@use '@/sass/components/dropdown';
</style>
