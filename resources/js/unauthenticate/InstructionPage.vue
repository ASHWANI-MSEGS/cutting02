<template>
    <div>
            <!-- Infographics -->
        <div class="flex justify-center bg-gray-200 h-auto">



                <div class="">
                        <Sopmdhidden />
                </div> 
        </div>
        <!-- Infographics End -->

        <!-- Instruction -->
        <div class="flex justify-center bg-gray-200 h-auto">
            <div class="w-4/5 md:w-3/5 ss:px-2 sm:px-4 md:px-6 lg:px-32 py-2 md:py-6 ">
                <center><h2 class="text-textblue font-bold py-2 px-5 text-xl">Instruction</h2></center>
                <Accordian></Accordian>     
            </div>
        </div>
        <!-- Instruction End -->
    </div>
</template>


<script>
export default {

    name: 'InstructionPage',

    components: {

       
           Accordian: () => import('./Accordian.vue'),
           Sopmdhidden: () => import('./Sopmdhidden.vue'),
           
       },
}
</script>