<template>
    <div  class="min-h-screen" >       
        <div class="pb-16 ">
           <!-- Image Container Element -->
          <div class="bg-white h-auto rounded-lg flex mx-8 my-8">
              
            <div class="w-1/2 pl-12 pr-40  my-16 ">                                                  
                <p class="text-4xl font-bold text-gray-900 leading-tight">Welcome
                <br class="hidden lg:inline" > 
                </p>        
                <p class="hidden lg:block mt-4 text-base text-gray-600">
                  You can apply for road cutting permit from home, work place or around the globe
                </p> 
            </div>
            <div class="hidden lg:block w-1/2 lg:relative ">
                <img class="absolute rounded-r-lg inset-0 h-full w-full object-cover object-center " :src="bgImage" />
            </div>
          </div> 

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4  h-72 rounded-lg  mx-8 my-8">           
            <div class="bg-white rounded-lg">
              <div class="ml-8 my-4" > 
                <p class="text-2xl my-2">Amount Received Summary</p>                                                    
                <p class="text-gray-600">Total Estimated Amount Received: </p>
                <p class="text-gray-600">Total Security Deposit Received: </p>
                <p class="text-gray-600">Total Amount Received:  </p>
              </div>
            </div>
            <div class="  bg-white rounded-lg">
              <div class="ml-8 my-4" >  
                <p class="text-2xl my-2">Security Deposit Summary</p>   
                <p class="text-gray-600">No of Security Deposit Returned Successfully: </p>
                <p class="text-gray-600">No of Security Deposit to be returned: </p>
                <p class="text-gray-600">Total Security Deposit Received: </p>
                <p class="text-gray-600">Balance Security Deposit Received: </p>
                <p class="text-gray-600">Total Fine received: </p>
                <br>
                <button class="px-2 py-2 border border-blue-400 rounded-lg hover:text-gray-500">Download SD to be retured List (Excel)</button>
              </div>
            </div>

            <div class="bg-white rounded-lg">
              <div class="ml-8 my-4" > 
                <p class="text-2xl my-2">Local Council</p>                                                    
                <button class="text-gray-600  hover:text-gray-400">Add New Local Council </button>
                <p><button class="text-gray-600  hover:text-gray-400">Local Council List</button></p>
                <p class="text-gray-600">No. of Local Council in Aizawl Road South: </p>
                <p class="text-gray-600">No. of Local Council in Aizawl Road North: </p>
              </div>
            </div>
            <div class="  bg-white rounded-lg">
              <div class="ml-8 my-4" >  
                <p class="text-2xl my-2">Site Engineer</p>   
                <button class="text-gray-600 hover:text-gray-400">Add Engineer</button>
                <p><button class="text-gray-600  hover:text-gray-400">Engineer List</button></p>
                <p class="text-gray-600">No. of Site Engineer in Aizawl Road South: </p>
                <p class="text-gray-600">No. of Site Engineer in Aizawl Road Norht: </p>
              </div>
            </div>
          </div> 
        </div>
       
    </div>
</template>

<script>
    export default {

        name: "ExampleComponent",

        data() {
            return {
                 bgImage: "/img/unnamed.jpg"
                     };
                 },

        mounted() {
            console.log('Component mounted.')
        },

        

    }
</script>
