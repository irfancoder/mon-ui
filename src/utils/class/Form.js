import Errors from './Errors'
import { post } from '@/utils'

class Form {
    constructor (data) {
        for (const field in data) {
            this[field] = data[field]
        }

        this.exceptions = new Errors()
    }

    clear () {
        for (const field in this) {
            if (typeof this[field] === 'boolean') {
                this[field] = false
            } else if (this[field] instanceof Errors) {
                this[field].clear()
            } else {
                this[field] = ''
            }
        }
    }

    async submit (url, callback = null) {
        await post(url, this, callback)
    }

    length () {
        return Object.keys(this).length
    }

    to_string () {
        return JSON.stringify(this)
    }
}

export default Form
