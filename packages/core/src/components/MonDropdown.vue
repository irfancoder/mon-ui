<template>
    <div v-click-away="!disableClickAway && closeDropdown" class="dropdown" tabindex="0">
        <transition
            v-if="!persistent"
            :enter-active-class="enterActiveClass"
            :enter-class="enterClass"
            :enter-to-class="enterToClass"
            :leave-active-class="leaveActiveClass"
            :leave-class="leaveClass"
            :leave-to-class="leaveToClass"
            @enter="enterHook"
            @after-leave="afterLeaveHook">
            <div v-if="show" :class="`${contentClass} dropdown-anchor-${anchor} ${dropdownDirection}`">
                <slot :close="closeDropdown" :toggle="toggleDropdown">
                </slot>
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
            @after-leave="afterLeaveHook">
            <div v-show="show" :class="`${contentClass} dropdown-anchor-${anchor} ${dropdownDirection}`">
                <slot :close="closeDropdown" :toggle="toggleDropdown">
                </slot>
            </div>
        </transition>

        <button
            v-if="!$slots.trigger"
            aria-haspopup="true"
            aria-expanded="true"
            :class="labelClass"
            @click="toggleDropdown">
            {{ label }}
        </button>
        <div v-else tabindex="0">
            <slot
                name="trigger"
                :open="openDropdown"
                :close="closeDropdown"
                :toggle="toggleDropdown"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { directive } from 'click-outside-vue3'
export default /*#__PURE__*/ defineComponent({

    directives: {
        'click-away': directive
    },
    props: {
        label: { type: String, required: false, default: 'Label goes here' },
        labelClass: { type: String, required: false, default: 'btn btn-primary' },
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
    
    emits: ['before-close', 'before-open', 'after-open', 'after-close'],

    data() {
        return {
            show: false,
            visible: true
        }
    },

    computed: {
        dropdownDirection() {
            if (this.visible) return this.dropUp ? 'drop-up' : 'drop-down'
            else return this.dropUp ? 'drop-down' : 'drop-up'
        }
    },

    mounted() {
        if (this.openOnMount) this.openDropdown()
        if (!this.disableEsc) document.addEventListener('keydown', this.bindEscKey)
    },

    beforeUnmount() {
        if (!this.disableEsc) document.removeEventListener('keydown', this.bindEscKey)
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
.dropdown {
    @apply relative inline-block;

    &-content {
        @apply p-2 rounded-md shadow-md overflow-hidden border z-10 bg-white min-w-48;
    }

    &-anchor {
        &-left {
            @apply absolute left-0;
        }

        &-right {
            @apply absolute right-0;
        }
    }

    &-menu {
        > li + li {
            @apply pt-2;
        }

        .btn {
            @apply w-full text-left;
        }
    }
}

/* DIRECTION */
.drop {
    &-up {
        @apply bottom-full mb-1;
    }

    &-down {
        @apply top-full mt-1;
    }
}

/* TRANSITIONS */
.dropdown-enter-active,
.dropdown-leave-active {
    @apply transition-all ease-in duration-100;
}

.dropdown-enter-from,
.dropdown-leave-to {
    @apply transform opacity-0 scale-95;
}

</style>
