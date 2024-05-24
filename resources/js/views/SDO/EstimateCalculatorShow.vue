<template>

<div class="" >
        <form @submit.prevent='estimateSubmit' class="mt-2 ml-0 bg-white rounded-lg md:ml-2 w-5/5 md:w-4/5 lg:w-2/5">
            <div class="px-12 py-4">

            <p class="py-2 text-xl bold">Estimate Calculator</p>

            <div class="relative py-3 ">
                <label for="road_name" class="absolute px-2 py-2 text-xs uppercase text-textblue">Road Name</label>
                <input @input="updateRoadname()" id="road_name" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "  placeholder="Road name chhu lut rawh le" v-model="estimate.road_name" autofocus >
            <p class="pb-4 text-sm text-red-600" v-text="errorRoadname()">Error Here</p>
            </div>


            <div class="relative py-3 ">
                <label for="road_type" class="absolute px-2 py-2 text-xs uppercase text-textblue">Road Type</label>
                <input @input="updateRoadtype()" id="road_type" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "  placeholder="Road name chhu lut rawh le" v-model="estimate.road_type"  >
            <p class="pb-4 text-sm text-red-600" v-text="errorRoadtype()">Error Here</p>
            </div>

            <div class="relative py-3 ">
                <label for="length" class="absolute px-2 py-2 text-xs uppercase text-textblue">Length</label>
                <input  id="length" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "  placeholder="number chhu lut rawh le" v-model="estimate.length" @input="AREA" >
            <p class="pb-4 text-sm text-red-600" v-text="errorLength()">Error Here</p>
            </div>

            <div class="relative pb-3 ">
                <label for="breadth" class="absolute px-2 py-2 text-xs uppercase text-textblue">Breadth</label>
                <input  id="breadth" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "  placeholder="number chhu lut rawh le" v-model="estimate.breadth" @input="AREA" >
            <p class="pb-4 text-sm text-red-600" v-text="errorBreadth()">Error Here</p>
            </div>

            <div class="relative pb-3 ">
                <label for="rate" class="absolute px-2 py-2 text-xs uppercase text-textblue">Rate(INR)</label>
                <input  id="rate" type="text" class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "  placeholder="number chhu lut rawh le" v-model="estimate.rate" @input="TOTAL" >
            <p class="pb-4 text-sm text-red-600" v-text="errorRate()">Error Here</p>
            </div>


            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2">
                <div class="px-4 py-5 bg-white rounded-lg shadow ">
                    <p class="text-sm text-gray-400">Area</p>
                    <p class="text-xl text-blue-400">
                    {{estimate.area}}
                    </p>
                </div>

                <div class="px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow">
                    <p class="text-sm text-gray-400">Amount (INR)</p>
                    <p class="text-xl text-blue-400">
                    Rs.{{estimate.amount}}
                    </p>
                </div>

                <div class="px-4 py-5 bg-white rounded-lg shadow ">
                    <p class="text-sm text-gray-400">Deposit</p>
                    <p class="text-xl text-blue-400">
                    Rs.{{estimate.deposit}}
                    </p>
                </div>

                <div class="px-4 py-5 text-xl text-blue-400 bg-white rounded-lg shadow">
                    <p class="text-sm text-gray-400">Total(INR)</p>
                    <p class="text-xl text-blue-400">
                    Rs.{{estimate.total}}
                    </p>
                </div>
            </div>






            <div class="relative pb-3" >
                <div  >
                    <button type="submit" class="flex items-center px-5 py-2 mt-4 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none">
                        Submit
                    </button>
                </div>
                <p class="mt-4 text-sm italic text-gray-500">Note: Click Submit to send to EE for Approval</p>
            </div>



        </div>

        </form>


</div>



</template>

<script>

export default{
    name: 'EstimateCalculatorShow',

    data: function(){
        return{

            estimate: {

                'road_name':'',
                'length': '',
                'breadth': '',
                'area': '',
                'rate': '',
                'deposit':'',
                'amount':'',
                'total': '',
                'form_id': this.$route.params.id,
                'division_id': '',
                'enter_by': this.$store.getters.currentUser.id,
            },
            errors: {

            },
            error: null,

        }
    },

    mounted() {
            axios.get('/api/auth/form/list/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.form;
                    this.estimate.division_id = this.form.division_id;

                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });
        },

    computed: {
                AREA: function(){

            this.estimate.area =Number((this.estimate.length*this.estimate.breadth).toFixed(2));
            this.estimate.amount = Number((this.estimate.area*this.estimate.rate).toFixed(2));

        },
        TOTAL: function(){
            this.estimate.amount = Number((this.estimate.area*this.estimate.rate).toFixed(2));
            this.estimate.deposit = Number(((this.estimate.amount*10)/100).toFixed(2));
            this.estimate.total = Number((this.estimate.amount + this.estimate.deposit).toFixed(2));
        },

        hasErrorRoadname(){

        return this.errors && this.errors['road_name'] && this.errors['road_name'].length > 0;

        },

        hasErrorRoadtype(){


        return this.errors && this.errors['road_type'] && this.errors['road_type'].length > 0;
        },

        hasErrorLength(){
        return this.errors && this.errors['length'] && this.errors['length'].length > 0;
        },

        hasErrorBreadth(){
        return this.errors && this.errors['breadth'] && this.errors['breadth'].length > 0;
        },

        hasErrorRate(){
        return this.errors && this.errors['rate'] && this.errors['rate'].length > 0;
        },
    },



    methods: {

        estimateSubmit: function(){
            axios.post('/api/estimateSubmit',this.estimate, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
            .then(response=>{

                if(response.data.message === "Success")
                    {this.$router.push("/estimateSubmitSuccess");}
                else
                {
                    this.$router.push("/estimateSubmitUnsuccess");
                }
            })

            .catch(errors=>{

              this.errors = errors.response.data.errors;

         });

        },

        errorRoadname(){
            if (this.hasErrorRoadname){
                // return this.errors['localcouncil_name'][0];
                return "Please Enter Road name";

            }
        },

        errorRoadtype(){
            if (this.hasErrorRoadtype){
                // return this.errors['localcouncil_name'][0];
                return "Enter Type of Road";
            }
        },

        errorLength(){
            if (this.hasErrorLength){
                // return this.errors['localcouncil_name'][0];
                return "Re Enter Length";

            }
        },

        errorBreadth(){
            if (this.hasErrorBreadth){
                // return this.errors['localcouncil_name'][0];
                return "Enter Breadth";
            }
        },

        errorRate(){
        if (this.hasErrotRate){
            // return this.errors['localcouncil_name'][0];
            return "Enter Rate";
        }
        },


    updateRoadname:function(){
        this.errors['road_name'] = null;
    },

    updateRoadtype:function(){
        this.errors['road_type'] = null;
    },

    updateLength:function(){
        this.errors['length'] = null;
    },

    updateBreadth:function(){
            this.errors['breadth'] = null;
    },

    updateRate:function(){
        this.errors['rate'] = null;
    },



    }


}
</script>

<style scoped></style>
