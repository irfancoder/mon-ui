export default class Errors {
    constructor () {
        this.errors = {}
    }

    has (field) {
        return this.errors[field]
    }

    get (field) {
        return this.errors[field].message
    }

    clear () {
        return (this.errors = {})
    }

    add (exceptions) {
        this.clear()
        exceptions.forEach((exception) => {
            this.errors[exception.field] = exception
        })
    }

    to_string () {
        return JSON.stringify(this.errors)
    }
}
