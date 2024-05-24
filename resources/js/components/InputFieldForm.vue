<template>
    <div>
        <div  class="relative pb-2 mb-3 border rounded-lg test" :class="errorClassObject()">
        <label :for="name" class="text-textblueform px-4 text-sm py-2   font-normal absolute">{{ label }}</label>
        <input :id="name" type="text"  class="px-4 mt-1 pt-6 w-full rounded-lg text-textgrayform   focus:outline-none "   :placeholder="placeholder" v-model="value" @input="updateField()">
        </div>
        <p class="text-red-600 text-sm pb-4" v-text="errorMessage()">Error Here</p>
        
    </div>
</template>

<script>
    export default {
        name: "InputFieldForm",

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
            },

            updateField: function () {
                this.clearErrors(this.name);

                this.$emit('update:field', this.value)
            },
        },

        methods: {


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
        @apply .border .border-red-500 .border-dotted 
    }
    .test:focus-within{
    
        @apply .border .border-blue-400 .border-2
    }
</style>