<template>
<div class="flex flex-col ">

    <div class="relative flex justify-center h-screen  w-auto pb-4">

        
            <div class=" mt-10 flex flex-col w-4/5 md:w-1/3 ">

                <!-- 1.Top with success logo -->
                    <div class="rounded-t-lg  flex items-center justify-center h-32 bg-successcyan">
                                <div class="">

                                    <svg version="1.1" class="fill-current text-white" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                                    viewBox="0 0 300 300" width="80" height="80" style="enable-background:new 0 0 300 300;" xml:space="preserve">

                                        <path class="st0" d="M221.4,84.3c-6-4.3-14.4-3-18.7,3.1l-65.9,92.2c-1.8,2-4.1,2.6-5.3,2.7c-1.2,0.1-3.7-0.1-5.7-2l-42.7-41
	                                        c-5.3-5.1-13.8-4.9-18.9,0.4c-5.1,5.3-4.9,13.8,0.4,18.9l42.8,41c6.4,6.1,14.9,9.5,23.8,9.5c0.7,0,1.5,0,2.2-0.1
	                                        c9.6-0.6,18.5-5.3,24.5-12.8c0.2-0.2,0.3-0.4,0.4-0.6l66.2-92.5C228.7,97,227.4,88.6,221.4,84.3L221.4,84.3z"/>
                                        <path class="st0" d="M143.8,3.7C65.8,3.7,2.6,66.9,2.6,144.9s63.2,141.2,141.2,141.2S285,222.9,285,144.9S221.8,3.7,143.8,3.7z
	                                        M143.8,262.4c-64.6,0-117.1-52.4-117.1-117.1c0-64.6,52.4-117.1,117.1-117.1s117.1,52.4,117.1,117.1
	                                        C260.8,210,208.4,262.4,143.8,262.4z"/>
                                        </svg>


                                </div>
                    </div>

                        <!-- 2. -->
                    <div class="flex items-center justify-center flex-col bg-white h-24 rounded-b-lg">
                        <p class="text-2xl font-normal">Well Done!!</p>
                        <p class="pb-3 font-sans font-thin text-sm ">Permission Granted Successfully by EE</p>


                    </div>

 

            </div>
    </div>

 
</div>
</template>

<script>

export default {
    name: "GrantSuccessShow",

    data() {
        return{
            form:'',
        }
    },


    // mounted(){
    //     axios.get('/api/auth/form/list/' + this.$route.params.id)
    //     .then(response=>{
    //         this.form=response.data.form;
    //     })
    // },

    methods: {
                   printme: function() {

                window.print();
            }
    },



}
</script>


<style scoped>
</style>