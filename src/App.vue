<script lang="ts">
import MonButton from '@/components/MonButton.vue'
import MonModal from '@/components/MonModal.vue'
import MonDropdown from '@/components/MonDropdown.vue'
import MonTab from '@/components/MonTab.vue'
import MonStep from '@/components/MonStep.vue'
import MonPanel from '@/components/MonPanel.vue'
import MonInput from './components/MonInput.vue'
import MonSelect from './components/MonSelect.vue'
import MonRadio from './components/MonRadio.vue'
import MonCheckbox from './components/MonCheckbox.vue'
import MonAccordion from './components/MonAccordion.vue'
import MonSwitch from './components/MonSwitch.vue'

import Form from './utils/class/Form.js'

export default {
    components: {
        MonButton,
        MonModal,
        MonDropdown,
        MonStep,
        MonTab,
        MonPanel,
        MonInput,
        MonSelect,
        MonRadio,
        MonCheckbox,
        MonAccordion,
        MonSwitch
    },
    data() {
        return {
            count: 0,
            form: new Form({
                input_text: '',
                input_password: '',
                input_desc: '',
                input_short: '',
                input_textarea: '',
                input: '',
                inputGroup: '',
                select: '',
                radio: '',
                checkbox: false,
                switch: false
            })
        }
    },
    methods: {
        dummy(el: string) {
            const dummies: object = {
                select: {
                    jack: 'Jack',
                    john: 'John',
                    alice: 'Alice',
                    ali: 'Ali'
                },
                radio: {
                    maybank: 'Maybank',
                    cimb: 'CIMB',
                    bankrakyat: 'Bank Rakyat',
                    standardchartered: 'Standard Chartered'
                }
            }

            return dummies[el]
        }
    }
}
</script>

<template>
    <div class="space-y-16 overflow-visible">
        <div class="space-y-4">
            <h3>Typography</h3>
            <table class="border-separate [border-spacing:0.75rem] w-full">
                <thead>
                    <tr>
                        <th width="20%"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h1>H1</h1></td>
                        <td><h1>Headline 1</h1></td>
                    </tr>
                    <tr>
                        <td><h2>H2</h2></td>
                        <td><h2>Headline 2</h2></td>
                    </tr>
                    <tr>
                        <td><h3>H3</h3></td>
                        <td><h3>Headline 3</h3></td>
                    </tr>
                    <tr>
                        <td><h4>H4</h4></td>
                        <td><h4>Headline 4</h4></td>
                    </tr>
                    <tr>
                        <td><h5>H5</h5></td>
                        <td><h5>Headline 5</h5></td>
                    </tr>
                    <tr>
                        <td><h6>H6</h6></td>
                        <td><h6>Headline 6</h6></td>
                    </tr>
                    <tr>
                        <td><p>Body 1 &lt;p></p></td>
                        <td>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi hic ea distinctio, quas impedit, atque reprehenderit aliquid beatae saepe placeat debitis
                                accusantium, ex sed ipsum animi dolorem facere minima.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><span>Body 2 &lt;span></span></td>
                        <td>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eligendi hic ea distinctio, quas impedit, atque reprehenderit aliquid beatae saepe placeat debitis
                                accusantium, ex sed ipsum animi dolorem facere minima.
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Bold / Strong</strong></td>
                        <td>
                            <p>Give me your <strong>attention!</strong></p>
                            <span>Give me your <strong>attention!</strong></span>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Label</label></td>
                        <td><label>Username/Email</label></td>
                    </tr>
                    <tr>
                        <td><small>Small Texts</small></td>
                        <td><small>All Rights Reserved. </small></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="space-x-2">
            <h3>Button</h3>
            <p>Sizes</p>
            <mon-button size="sm">sm</mon-button>
            <mon-button size="md">md</mon-button>
            <mon-button size="lg">lg</mon-button>
            <mon-button size="xl">xl</mon-button>
        </div>
        <mon-button class="mt-4" size="full">full</mon-button>
        <div class="space-x-2">
            <p>Variants</p>
            <mon-button variant="primary">primary</mon-button>
            <mon-button variant="secondary">secondary</mon-button>
            <mon-button variant="default">default</mon-button>
            <mon-button variant="danger">danger</mon-button>
            <mon-button variant="link">link</mon-button>
        </div>
        <div class="space-x-2">
            <p>State: Disabled</p>
            <mon-button disabled variant="primary">primary</mon-button>
            <mon-button disabled variant="secondary">secondary</mon-button>
            <mon-button disabled variant="default">default</mon-button>
            <mon-button disabled variant="danger">danger</mon-button>
            <mon-button disabled variant="link">link</mon-button>
        </div>

        <div class="flex flex-col">
            <h3>Modal</h3>
            <mon-modal label="Open me" title="Title goes here" label-class="btn btn-primary" class="place-self-end">
                <template #body>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt doloremque, dolore eligendi ad, culpa eveniet accusamus facilis itaque placeat sit praesentium
                        nobis aperiam voluptates repellat dolor optio voluptas porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas repudiandae iusto sapiente non laborum
                        itaque temporibus, accusantium voluptatibus ut neque corporis deleniti ad autem architecto quos exercitationem, labore soluta!
                    </p>
                </template>
                <template #footer="{ close }">
                    <mon-button @click="close" variant="link">Close</mon-button>
                    <mon-button @click="close" variant="primary">Make Payment</mon-button>
                </template>
            </mon-modal>
        </div>
        <div class="flex flex-col">
            <h3>Dropdown</h3>

            <mon-dropdown label="Open me" label-class="btn btn-primary" class="place-self-end">
                <ul class="dropdown-menu" role="menu">
                    <li><mon-button variant="secondary">Option A</mon-button></li>
                    <li><mon-button variant="menu-danger">Option B</mon-button></li>
                </ul>
            </mon-dropdown>
        </div>

        <div class="space-y-4">
            <h3>Toast (as Plugin)</h3>
            <div class="flex space-x-2">
                <mon-button @click="$toast.info('info ' + count++)">Info</mon-button>
                <mon-button @click="$toast.success('success ' + count++)">Success</mon-button>
                <mon-button @click="$toast.warning('warning ' + count++)">Warning</mon-button>
                <mon-button @click="$toast.error('danger ' + count++)" variant="danger">Error</mon-button>
                <mon-button @click="$toast.default('default ' + count++)" variant="default">Default</mon-button>
            </div>
        </div>

        <div class="">
            <h3>Stepper</h3>
            <mon-step>
                <template #default>
                    <mon-panel name="Details" class="border p-7"> Details Panel </mon-panel>
                    <mon-panel name="Pricing" class="border p-7"> Pricing Panel </mon-panel>
                    <mon-panel name="Review" class="border p-7"> Review Panel </mon-panel>
                </template>
            </mon-step>
        </div>

        <div class="">
            <h3>Tabs</h3>
            <mon-tab>
                <template #default>
                    <mon-panel name="Details" class="border p-7"> Details Panel </mon-panel>
                    <mon-panel name="Pricing" class="border p-7"> Pricing Panel </mon-panel>
                    <mon-panel name="Review" class="border p-7"> Review Panel </mon-panel>
                </template>
            </mon-tab>
        </div>

        <div>
            <h3>Input</h3>
            <mon-input name="input_text" label="Username" v-model="form.input_text" :model="form"></mon-input>
            <mon-input name="input_text" required label="Username" v-model="form.input_text" :model="form"></mon-input>
            <mon-input name="input_password" type="password" label="Password" v-model="form.password" :model="form"></mon-input>
            <mon-input name="input_desc" description="Sprinkle some description texts here" label="Best Food Reviewer? Sonny, Mark Wiens or Trevor" v-model="form.input_desc" :model="form"></mon-input>
            <mon-input name="input_short" :max-char="20" label="Be brief!" v-model="form.input_short" :model="form"></mon-input>
            <mon-input name="input_textarea" type="textarea" :maxChar="500" label="Be long!" v-model="form.input_textarea" :model="form"></mon-input>
        </div>
        <div>
            <h3>Select</h3>
            <mon-select name="select" label="Choose your best friend" v-model="form.select" :model="form" :selection="dummy('select')"></mon-select>
        </div>
        <div>
            <h3>Radio</h3>
            <mon-radio name="radio" label="Choose your best friend" v-model="form.radio" :model="form" :selection="dummy('radio')"></mon-radio>
        </div>
        <div>
            <h3>Checkbox</h3>
            <mon-checkbox name="checkbox" v-model="form.checkbox" :model="form">
                <p>I agree to the terms and conditions. *Icon to be replaced</p>
            </mon-checkbox>
        </div>

        <div>
            <h3>Accordion</h3>

            <mon-accordion title="How are you my friend?">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem sit voluptas ipsa deleniti sint velit nisi laborum, vero adipisci. Nam quos, soluta quasi quidem eveniet
                    veritatis distinctio vero quisquam?
                </p>
            </mon-accordion>
            <mon-accordion title="Any good stories?">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem sit voluptas ipsa deleniti sint velit nisi laborum, vero adipisci. Nam quos, soluta quasi quidem eveniet
                    veritatis distinctio vero quisquam?
                </p>
            </mon-accordion>
        </div>

        <div class="space-y-4">
            <h3>Switch</h3>

            <mon-switch name="switch" :model="form" v-model="form.switch"> Edit Mode </mon-switch>
            <mon-switch name="switch" :model="form" v-model="form.switch"> Enable Dark Mode </mon-switch>
        </div>
    </div>
</template>

<style>
#app {
    @apply container py-16 mx-auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
