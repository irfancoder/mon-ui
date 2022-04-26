import MonToast from '@/components/MonToast.vue'
import { h, render } from 'vue'

const useToast = (globalProps = {}) => {
    return {
        open(options) {
            let message = null;
            let wrapper = initWrapper()

            if (typeof options === 'string') message = options;
  
            const defaultProps = {
                message,
                id: generateUid()
            }
  
            const propsData = Object.assign({}, defaultProps, globalProps, options)
  
            const instance = createComponent(MonToast, propsData, wrapper)
 
            return {
                dismiss: instance.ctx.dismiss
            }
        },
        success(message, options = {}) {
            return this.open(Object.assign({}, {
                message,
                type: 'success'
            }, options))
        },
        error(message, options = {}) {
            return this.open(Object.assign({}, {
                message,
                type: 'error'
            }, options))
        },
        info(message, options = {}) {
            return this.open(Object.assign({}, {
                message,
                type: 'info'
            }, options))
        },
        warning(message, options = {}) {
            return this.open(Object.assign({}, {
                message,
                type: 'warning'
            }, options))
        },
        default(message, options = {}) {
            return this.open(Object.assign({}, {
                message,
                type: 'default'
            }, options))
        }
    }
}

const generateUid = () => Math.random().toString(36).slice(-6)

const createComponent = (component, props, parentContainer, slots = {}) => {
    const vNode = h(component, props, slots)
    const container = document.createElement('div');
    container.id = props.id
    parentContainer.appendChild(container);
    render(vNode, container);

    return vNode.component
}

const initWrapper = () => {
    let wrapped = document.querySelector('.toast-wrapper')
    if (wrapped) return wrapped
    
    wrapped = document.createElement('div')
    wrapped.classList.add('toast-wrapper')
    document.body.appendChild(wrapped)
    
    return wrapped
}

export default {
    install: (app, options = {}) => {
        const instance = useToast(options);
        app.config.globalProperties.$toast = instance;
        app.provide('$toast', instance)
    }
}
