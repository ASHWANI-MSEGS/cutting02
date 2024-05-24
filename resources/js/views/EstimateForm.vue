<template>
<div class ="bg-teal-100 h-screen" >
        <form @submit.prevent='estimateSubmit' class="pt-8">

                            <div class="flex ss:flex-col md:flex-row ">

                                <div class="relative pr-2 ss:pb-3 md:pb-0" >
                                <label for="length" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Length</label>

                                <div >
                                    <input id="length" type="text" class="pt-8  rounded-lg p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700 hover:bg-blue-400" v-model="estimate.length" @input="AREA"  autofocus>
                                
                                </div>
                            </div>

                            <div class="relative pr-2 ss:pb-3 md:pb-0">
                                <label for="breadth" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Breadth</label>

                                <div class="" >
                                    <input id="breadth" type="text" class="pt-8 rounded-lg p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700 hover:bg-blue-500" v-model="estimate.breadth" @input="AREA" >

                                
                                </div>
                            </div>

                          

                            <div class="relative w-1/3">
                                <label for="area" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Area</label>

                                <div class="" >
                                    <div class=" border pt-8  rounded-lg p-3 bg-gray-800 text-gray-100 outline-none " >{{estimate.area}} m<sup>2</sup></div>

                                
                                </div>
                            </div>

                              </div>







                             <div class="relative pt-3"> 
                                <label for="rate" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Rate in Rupee</label>
                                   
                                <div class="col-md-6">
                                    <input id="rate" type="text" class="pt-8 w-1/3 rounded-lg p-3 bg-blue-800 text-gray-100 outline-none focus:bg-blue-700 hover:bg-blue-500"  v-model="estimate.rate" @input="TOTAL" >
                                </div>
                            </div>


                            <div class="relative pt-3 ">
                                <label for="total" class="uppercase text-blue-500 text-xs font-bold absolute pl-3 pt-2">Total</label>

                                <div class="" >
                                    <div class=" border pt-8 w-1/3 rounded-lg p-3 bg-gray-800 text-gray-100 outline-none " >Rs. {{estimate.total}} </div>

                                
                                </div>
                            </div>
                            <div class="relative pt-3" >
                                <div  >
                                    <button type="submit" class="w-1/4 bg-gray-400 py-2 px-3 text-center uppercase rounded-lg text-blue-800 font-bold hover:text-blue-400">
                                        Submit
                                    </button>
                                </div>
                            </div>
                     




        </form>


</div>



</template>

<script>

export default{
    name: 'EstimateForm',

    data: function(){
        return{

            estimate: {
                'id':'',
                'length': '',
                'breadth': '',
                'area': '',
                'rate': '',
                'total': '',
            },

        }
    },

    mounted() {
            axios.get('/api/auth/form/list/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.form;

                    this.loading = false;
                })
                .catch(error => {
                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });
        },



    methods: {

        estimateSubmit: function(){
            axios.post()
        },

        AREA: function(){
            this.estimate.area = this.estimate.length*this.estimate.breadth,
            this.estimate.total = this.estimate.area*this.estimate.rate
        },
        TOTAL: function(){
            this.estimate.total = this.estimate.area*this.estimate.rate
        }

    }


}
</script>

<style scoped></style>