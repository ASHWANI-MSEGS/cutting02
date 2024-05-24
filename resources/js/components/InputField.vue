<template>
    <div class="relative pb-3 mb-3 hover:bg-blue-300">
        <label :for="name" class="text-textblueform   font-normal px-4 py-2 text-sm absolute">{{ label }}</label>
        <input :id="name" type="text" class="px-4  pt-6 w-full rounded-lg text-gray-900 border pb-1  focus:outline-none " :class="errorClassObject()" :placeholder="placeholder" v-model="value" @input="updateField()">

        <p class="text-red-600 text-sm" v-text="errorMessage()">Error Here</p>
    </div>
</template>

<script>
    export default {
        name: "InputField",

        props: [
            'name', 'label', 'placeholder', 'errors', 'data',
        ],

        data: function () {
            return {
                value: ''
            }
        },

        computed: {
            hasError: function () {
                return this.errors && this.errors[this.name] && this.errors[this.name].length > 0;
            }
        },

        methods: {
            updateField: function () {
                this.clearErrors(this.name);

                this.$emit('update:field', this.value)
            },

            errorMessage: function () {
                if (this.hasError) {
                    return this.errors[this.name][0];
                }
            },

            clearErrors: function () {
                if (this.hasError) {
                    this.errors[this.name] = null;
                }
            },

            errorClassObject: function () {
                return {
                    'error-field': this.hasError
                }
            }
        },

        watch: {
            data: function (val) {
                this.value = val;
            }
        }
    }
</script>

<style scoped>
    .error-field {
        @apply .border-red-500 .border-b-2
    }
</style>