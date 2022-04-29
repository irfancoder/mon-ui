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
import MonChips from './components/MonChips.vue'
import MonProgress from './components/MonProgress.vue'

import Form from './utils/class/Form.js'
import MonInputGroup from './components/MonInputGroup.vue'

const dummy = (el: string) => {
    const dummies: { [name: string]: Record<string, string> } = {
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
        },
        chips: {
            proton: 'Proton',
            perodua: 'Perodua',
            toyota: 'Toyota',
            nissan: 'Nissan',
            mazda: 'Mazda',
            volvo: 'Volvo'
        }
    }

    return dummies[el]
}

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
        MonSwitch,
        MonChips,
        MonInputGroup,
        MonProgress
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
                inputGroup_2: '',
                select: '',
                radio: '',
                checkbox: false,
                switch_1: false,
                switch_2: false,
                chips_1: [],
                chips_2: [],
                chips_3: dummy('chips')
            })
        }
    },
    methods: {
        dummy
    }
}
</script>

<template>
    <div class="mt-24 h-screen text-center space-y-7">
        <h1>🐒 Mon UI</h1>
        <h5>Short for Monyet UI</h5>
        <h6>[Work in Progress]</h6>
        <span>This is a collection of Vue components that make up my personal UI library. Enjoy! </span>

        <p>Made by <a href="https://github.com/irfancoder" target="_blank">@irfancoder</a> 🌴</p>
    </div>
    <div class="space-y-32 overflow-visible">
        <div class="space-y-4">
            <h3>Typography</h3>
            <table class="[border-spacing:0.75rem] w-full">
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

        <div class="space-y-4">
            <h3>Color</h3>

            <div class="flex flex-wrap gap-7">
                <div class="h-20 w-20 bg-primary-100 rounded-md hover:ring-1 ring-primary-800 ring-offset-1"></div>
                <div class="h-20 w-20 bg-primary-700 rounded-md hover:ring-1 ring-primary-800 ring-offset-1"></div>
                <div class="h-20 w-20 bg-primary-800 rounded-md hover:ring-1 ring-primary-800 ring-offset-1"></div>
            </div>
            <div class="flex flex-wrap gap-7">
                <div class="h-20 w-20 bg-danger-100 rounded-md hover:ring-1 ring-danger-800 ring-offset-1"></div>
                <div class="h-20 w-20 bg-danger-700 rounded-md hover:ring-1 ring-danger-800 ring-offset-1"></div>
                <div class="h-20 w-20 bg-danger-800 rounded-md hover:ring-1 ring-danger-800 ring-offset-1"></div>
            </div>
            <div class="flex flex-wrap gap-7">
                <div class="h-20 w-20 bg-default-100 rounded-md hover:ring-1 ring-default-500 ring-offset-1"></div>
                <div class="h-20 w-20 bg-default-400 rounded-md hover:ring-1 ring-default-500 ring-offset-1"></div>
                <div class="h-20 w-20 bg-default-500 rounded-md hover:ring-1 ring-default-500 ring-offset-1"></div>
            </div>
        </div>

        <div class="space-x-2">
            <h3>Button</h3>
            <p>Sizes</p>
            <mon-button size="sm">
                sm
            </mon-button>
            <mon-button size="md">
                md
            </mon-button>
            <mon-button size="lg">
                lg
            </mon-button>
            <mon-button size="xl">
                xl
            </mon-button>
        </div>
        <mon-button class="mt-4" size="full">
            full
        </mon-button>
        <div class="space-x-2">
            <p>Variants</p>
            <mon-button variant="primary">
                primary
            </mon-button>
            <mon-button variant="secondary">
                secondary
            </mon-button>
            <mon-button variant="default">
                default
            </mon-button>
            <mon-button variant="danger">
                danger
            </mon-button>
            <mon-button variant="link">
                link
            </mon-button>
        </div>
        <div class="space-x-2">
            <p>State: Disabled</p>
            <mon-button disabled variant="primary">
                primary
            </mon-button>
            <mon-button disabled variant="secondary">
                secondary
            </mon-button>
            <mon-button disabled variant="default">
                default
            </mon-button>
            <mon-button disabled variant="danger">
                danger
            </mon-button>
            <mon-button disabled variant="link">
                link
            </mon-button>
        </div>

        <div class="flex flex-col">
            <h3>Modal</h3>
            <mon-modal
                label="Open me"
                title="Title goes here"
                label-class="btn btn-primary"
                class="place-self-end">
                <template #body>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt doloremque, dolore eligendi ad, culpa eveniet accusamus facilis itaque placeat sit praesentium
                        nobis aperiam voluptates repellat dolor optio voluptas porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas repudiandae iusto sapiente non laborum
                        itaque temporibus, accusantium voluptatibus ut neque corporis deleniti ad autem architecto quos exercitationem, labore soluta!
                    </p>
                </template>
                <template #footer="{ close }">
                    <mon-button variant="link" @click="close">
                        Close
                    </mon-button>
                    <mon-button variant="primary" @click="close">
                        Make Payment
                    </mon-button>
                </template>
            </mon-modal>
        </div>
        <div class="flex flex-col">
            <h3>Dropdown</h3>

            <mon-dropdown label="Open me" label-class="btn btn-primary" class="place-self-end">
                <ul class="dropdown-menu" role="menu">
                    <li>
                        <mon-button variant="secondary">
                            Option A
                        </mon-button>
                    </li>
                    <li>
                        <mon-button variant="menu-danger">
                            Option B
                        </mon-button>
                    </li>
                </ul>
            </mon-dropdown>
        </div>

        <div class="space-y-4">
            <h3>Toast (as Plugin)</h3>
            <div class="flex gap-2 flex-wrap">
                <mon-button @click="$toast.info('info ' + count++)">
                    Info
                </mon-button>
                <mon-button @click="$toast.success('success ' + count++)">
                    Success
                </mon-button>
                <mon-button @click="$toast.warning('warning ' + count++)">
                    Warning
                </mon-button>
                <mon-button variant="danger" @click="$toast.error('danger ' + count++)">
                    Error
                </mon-button>
                <mon-button variant="default" @click="$toast.default('default ' + count++)">
                    Default
                </mon-button>
            </div>
        </div>

        <div class="">
            <h3>Stepper</h3>
            <mon-step>
                <template #default>
                    <mon-panel name="Details" class="border p-7">
                        Details Panel
                    </mon-panel>
                    <mon-panel name="Pricing" class="border p-7">
                        Pricing Panel
                    </mon-panel>
                    <mon-panel name="Review" class="border p-7">
                        Review Panel
                    </mon-panel>
                </template>
            </mon-step>
        </div>

        <div class="">
            <h3>Tabs</h3>
            <mon-tab>
                <template #default>
                    <mon-panel name="Details" class="border p-7">
                        Details Panel
                    </mon-panel>
                    <mon-panel name="Pricing" class="border p-7">
                        Pricing Panel
                    </mon-panel>
                    <mon-panel name="Review" class="border p-7">
                        Review Panel
                    </mon-panel>
                </template>
            </mon-tab>
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

        <div>
            <h3>Input</h3>
            <mon-input
                v-model="form.input_text"
                name="input_text"
                label="Username"
                :model="form" />
            <mon-input
                v-model="form.input_text"
                name="input_text"
                required
                label="Username"
                :model="form" />
            <mon-input
                v-model="form.password"
                name="input_password"
                type="password"
                label="Password"
                :model="form" />
            <mon-input
                v-model="form.input_desc"
                name="input_desc"
                description="Sprinkle some description texts here"
                label="Best Food Reviewer? Sonny, Mark Wiens or Trevor"
                :model="form" />
            <mon-input
                v-model="form.input_short"
                name="input_short"
                :max-char="20"
                label="Be brief!"
                :model="form" />
            <mon-input
                v-model="form.input_textarea"
                name="input_textarea"
                type="textarea"
                :max-char="500"
                label="Be long!"
                :model="form" />
            <mon-input-group
                v-model="form.inputGroup"
                name="inputGroup"
                type="number"
                label="How much does 1 banana weigh?"
                unit="kilogram (kg)"
                placement="right"
                :model="form" />
            <mon-input-group
                v-model="form.inputGroup"
                name="inputGroup_2"
                type="number"
                label="Title"
                unit="Mr/Ms"
                placement="left"
                :model="form" />
        </div>
        <div>
            <h3>Select</h3>
            <mon-select
                v-model="form.select"
                name="select"
                label="Choose your best friend"
                :model="form"
                :selection="dummy('select')" />
        </div>
        <div>
            <h3>Radio</h3>
            <mon-radio
                v-model="form.radio"
                name="radio"
                label="Choose your best friend"
                :model="form"
                :selection="dummy('radio')" />
        </div>
        <div>
            <h3>Checkbox</h3>
            <mon-checkbox v-model="form.checkbox" name="checkbox" :model="form">
                <p>I agree to the terms and conditions. *Icon to be replaced</p>
            </mon-checkbox>
        </div>

        <div class="space-y-4">
            <h3>Chips</h3>
            <p>Filter Mode</p>
            <mon-chips
                v-model="form.chips_1"
                name="chips_1"
                :model="form"
                :selection="dummy('chips')"
                variant="default" />
            <mon-chips
                v-model="form.chips_2"
                name="chips_2"
                :model="form"
                :selection="dummy('chips')"
                variant="primary" />

            <p>Editable Mode</p>

            <mon-chips
                v-model="form.chips_3"
                name="chips_3"
                mode="edit"
                :model="form"
                :selection="form.chips_3"
                variant="danger" />
        </div>

        <div class="space-y-4">
            <h3>Switch</h3>

            <mon-switch v-model="form.switch_1" name="switch_1" :model="form">
                Edit Mode
            </mon-switch>
            <mon-switch v-model="form.switch_2" name="switch_2" :model="form">
                Enable Dark Mode
            </mon-switch>
        </div>
        
        <div class="space-y-4">
            <h3>Progress Bar</h3>

            <mon-progress
                label="default"
                :value="25"
                :max="100"
                variant="default" />
            
            <mon-progress
                label="primary"
                :value="50"
                :max="100"
                variant="primary" />
            <mon-progress
                label="danger"
                :value="75"
                :max="100"
                variant="danger" />
            <mon-progress
                label="with description"
                :value="25"
                :max="100"
                variant="primary"
                description="25% - Downloading package ..." />
            <mon-progress
                :value="57"
                :max="100"
                variant="primary"
                description="57% - Installing MonUI with default configs ..." />
            <mon-progress
                :value="87"
                :max="100"
                variant="primary"
                label="Installation Progress (Full Example)" 
                description="57% - Installing MonUI with default configs ..." />
        </div>
    </div>
</template>

<style>
#app {
    @apply container py-16 mx-auto px-7;
}
</style>
