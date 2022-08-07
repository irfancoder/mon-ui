<template>
    <div>
        <!-- Button / Trigger Slot -->
        <slot name="trigger" :open="openModal"></slot>
        <button v-if="label" :class="labelClass" @click="openModal">
            {{ label }}
        </button>

        <!-- Non-Persistent Modal -->
        <transition v-if="!persistent" name="modal">
            <div v-if="show" :class="backdropClass" @click.self="!disableClickAway ? closeModal() : null">
                <div :class="modalClass">
                    <div>
                        <div v-if="!$slots.header" :class="headerClass">
                            <h4 :class="titleClass">
                                {{ title }}
                            </h4>
                            <button @click="closeModal">
                                X
                            </button>
                        </div>
                        <slot v-else name="header" :close="closeModal"></slot>
                    </div>

                    <slot
                        v-if="!!$slots.custom"
                        name="custom"
                        :open="openModal"
                        :close="closeModal"></slot>
                    <template v-else>
                        <div class="modal-wrapper">
                            <div :class="bodyClass">
                                <slot name="body"></slot>
                            </div>
                            <div :class="footerClass">
                                <slot name="footer" :close="closeModal">
                                    <button class="btn btn-default" @click="closeModal">
                                        Close
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </transition>

        <!-- Persistent Modal -->
        <transition v-else name="modal">
            <div v-show="show" :class="backdropClass" @click.self="!disableClickAway ? closeModal() : null">
                <div :class="modalClass">
                    <div>
                        <div v-if="!$slots.header" :class="headerClass">
                            <h4 :class="titleClass">
                                {{ title }}
                            </h4>
                            <button @click="closeModal">
                                X
                            </button>
                        </div>
                        <slot name="header" :close="closeModal"></slot>
                    </div>
                    <slot
                        v-if="!!$slots.custom"
                        name="custom"
                        :open="openModal"
                        :close="closeModal"></slot>
                    <template v-else>
                        <div class="modal-wrapper">
                            <div :class="bodyClass">
                                <slot name="body"></slot>
                            </div>
                            <div :class="footerClass">
                                <slot name="footer" :close="closeModal">
                                    <button class="btn btn-default" @click="closeModal">
                                        Close
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default /*#__PURE__*/ defineComponent({
    props: {
        title: { type: String, required: false, default: 'Title goes here' },
        titleClass: { type: String, required: false, default: 'modal-title' },
        label: { type: String, required: false, default: 'Label goes here' },
        labelClass: { type: String, required: false, default: '' },
        backdropClass: { type: String, required: false, default: 'modal' },
        modalClass: { type: String, required: false, default: 'modal-container' },
        headerClass: { type: String, required: false, default: 'modal-header' },
        bodyClass: { type: String, required: false, default: 'modal-body' },
        footerClass: { type: String, required: false, default: 'modal-footer' },

        persistent: { type: Boolean, required: false, default: false },
        disableClickAway: { type: Boolean, required: false, default: false },
        disableEsc: { type: Boolean, required: false, default: false },
        openOnMount: { type: Boolean, required: false, default: false }
    },

    emits: ['before-open', 'after-open', 'before-close', 'after-close'],
    
    data() {
        return {
            show: false
        }
    },
    mounted() {
        if (this.openOnMount) this.openModal()
        if (!this.disableEsc) document.addEventListener('keydown', this.bindEscKey)
    },

    beforeUnmount() {
        if (!this.disableEsc) document.removeEventListener('keydown', this.bindEscKey)
    },

    methods: {
        openModal() {
            this.$emit('before-open')
            this.show = true
            this.$emit('after-open')
        },
        closeModal() {
            this.$emit('before-close')
            this.show = false
            this.$emit('after-close')
        },
        bindEscKey: function (event: any) {
            if (this.show === true && event.keyCode === 27) this.closeModal()
        }
    }
})
</script>

<style lang="scss">
.modal {
    @apply fixed bg-black bg-opacity-40 w-full h-full z-20 top-0 left-0 flex justify-center;

    &-container {
        @apply absolute bottom-2 md:top-1/10 bg-white w-11/12 max-w-xl max-h-screen-60 flex flex-col rounded-lg;
    }

    &-header {
        @apply p-4 border-b flex flex-row justify-between items-center;
    }

    &-title {
        @apply m-0;
    }

    &-wrapper {
        @apply h-full overflow-auto flex flex-col justify-between;
    }

    &-body {
        @apply flex text-left p-4 overflow-auto;
    }

    &-footer {
        @apply flex flex-col md:flex-row md:justify-end p-4 flex-wrap;
    }
}

.modal-enter-active,
.modal-leave-active {
    @apply transition-all ease-in duration-100;
}

.modal-enter-from,
.modal-leave-to {
    @apply transform opacity-0 translate-y-2 md:-translate-y-2;
}

</style>
