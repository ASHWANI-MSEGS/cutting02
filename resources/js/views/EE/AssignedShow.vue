<template>
<div class="flex flex-col ">
    <div class="relative flex justify-center  h-auto  w-auto pb-4">       
        <div class=" my-10 flex flex-col w-full lg:w-3/5 ">

            <!-- 1.Top with success logo -->
            <div class="rounded-t-lg pt-1  flex items-center justify-center h-32 bg-successcyan">
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
            <div class="flex items-center flex-row justify-between  bg-white h-24 rounded-b-lg ">
                <div class="flex flex-col ml-8">
                    <p class="text-sm font-light">Memo No</p>
                    <p class="text-lg font-medium">{{ form.memo }}</p>
                </div>
                <button class="mr-8 hover:text-gray-400" @click.prevent="printme">
                    <svg version="1.1" class="fill-current text-gray-700" id="Layer_1" width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">

                            <path class="st0" d="M257.5,61.4h-21.2V15.1c0-4.5-3.6-8.1-8.1-8.1H73.8c-4.5,0-8.1,3.6-8.1,8.1v46.2H44.4
                                c-22,0.1-39.8,17.9-39.8,40v80.3c0,22,17.9,39.8,39.8,39.8h21.3v70.3c0,4.5,3.6,8.1,8.1,8.1h154.3c4.5,0,8.1-3.6,8.1-8.1v-70.3h21.2
                                c22,0,39.9-17.9,39.9-39.8v-80.3C297.4,79.3,279.6,61.4,257.5,61.4z M81.9,23.3H220v38.1H81.9V23.3z M220,283.6H81.9v-90.1H220
                                V283.6z M281.2,181.6c0,13-10.6,23.6-23.6,23.6h-21.2v-11.6h10c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1H55.7c-4.5,0-8.1,3.6-8.1,8.1
                                c0,4.5,3.6,8.1,8.1,8.1h10v11.6H44.4c-13,0-23.6-10.6-23.6-23.6v-80.3c0-13,10.6-23.6,23.6-23.6h213.1c13,0,23.6,10.6,23.6,23.6
                                L281.2,181.6L281.2,181.6z"/>
                            <path class="st0" d="M106.4,265.8h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1
                                C98.2,262.1,101.9,265.8,106.4,265.8z"/>
                            <path class="st0" d="M106.4,230.5h89.3c4.5,0,8.1-3.6,8.1-8.1s-3.6-8.1-8.1-8.1h-89.3c-4.5,0-8.1,3.6-8.1,8.1
                                C98.2,226.9,101.9,230.5,106.4,230.5z"/>
                            <circle class="st0" cx="254.4" cy="104.3" r="8.1"/>
                            <circle class="st0" cx="254.4" cy="132.4" r="8.1"/>
                    </svg>
                </button>
            </div>

            <!-- 3. -->
            <div class=" bg-white mt-3 rounded-t-lg rounded-b-lg border-b-4 border-dashed">
                <div class="mt-2 flex items-center justify-center ">
                    <p class="text-2xl font-normal">Assigned Person</p>
                </div>
                <div class="ml-8 my-2 py-2 pl-2  flex justify-start">
                    <div class="flex flex-col ">
                        <p class="py-1">Assigned I/C</p>
                        <p class="py-1">I/C Phone</p>
                        <p class="py-1">Measurement</p>
                        <p class="py-1">Length</p>
                        <p class="py-1">Breadth</p>
                        <p class="py-1">Rate</p>
                        <p class="py-1">Road Name</p>
                        <p class="py-1">Road Type</p>
                        <p class="py-1">Date</p>
                    </div>
                    <div class="flex flex-col ">
                        <p class="py-1">: {{form.engineer_name}}, {{form.engineer_post}}</p>
                        <p class="py-1">: {{form.engineer_phone}}</p>
                        <p class="py-1">:</p>
                        <p class="py-1">: ______________________________________</p>
                        <p class="py-1">: ______________________________________</p>
                        <p class="py-1">: ______________________________________</p>
                        <p class="py-1">: ______________________________________</p>
                        <p class="py-1">: ______________________________________</p>
                        <p class="py-1">:  ___ / ___ / _____</p>
                    </div>
                </div>
            </div>


            <!-- 4. -->
            <div class="bg-white  rounded-t-lg  h-auto rounded-b-lg border-gray-200">
                <div class="mt-2 flex items-center justify-center ">
                    <p class="text-2xl font-normal">Applicant's details</p>
                </div>
                <div class="ml-8 my-8 py-2 pl-2  flex justify-start">
                    <div class="flex flex-col ">
                        <p class="py-1">Name</p>
                        <p class="py-1">Email ID</p>
                        <p class="py-1">Phone Number</p>

                        <hr>
                        <p class="py-1"><b>Residence Address</b>
                        <p class="py-1">Address</p>
                        <p class="py-1">Khua/City/Town/Village</p>
                        <p class="py-1">District</p>
                        
                        <hr>
                        <p class="py-1"><b>Road Cutting Address</b>
                        <p class="py-1">Address</p>
                        <p class="py-1">Khua/City/Town/Village</p>
                        <p class="py-1">District</p>
                        <hr>

                        <p class="py-1">Purpose of cutting</p>
                        <p class="py-1">Road Type</p>
                        <p class="py-1">Length of Road</p>
                        <p class="py-1">Submitted On</p>
                        
                    </div>
                    <div class="ml-4 pb-3 flex flex-col">
                        <p class="py-1" >: {{form.name}}</p>
                        <p class="py-1">: {{form.email}}</p>
                        <p class="py-1">: {{form.phone}}</p>
                        
                        <hr>
                        <p class="py-1">: </p>
                        <p class="py-1">: {{form.rhouseno}}, {{form.rlocalcouncil_name}}</p>
                        <p class="py-1">: {{form.rcity}}</p>
                        <p class="py-1">: {{form.rdistrict}}</p>
                        <hr>
                        
                        <p class="py-1">: </p>
                        <p class="py-1">: {{form.houseno}}, {{form.localcouncil_name}}</p>
                        <p class="py-1">: {{form.city}}</p>
                        <p class="py-1">: {{form.district}}</p>
                        <hr>


                        <template v-if="form.water_id === 0">
                            <p class="py-1">: New Connection(Tui)</p>
                        </template>
                        <template v-else-if="form.water_id === 1">
                            <p class="py-1">: Old Connection(Tui)</p>
                        </template>
                        <template v-else>
                            <p class="py-1">: Others</p>
                        </template>

                        <template v-if="form.road_type === 0">
                            <p class="py-1">: Flexible Pavement (Alkatra luan)</p>
                        </template>
                        <template v-else-if="form.road_type === 1">
                            <p class="py-1">: Rigid Pavement (Concrete-a siam) </p>
                        </template>
                        <template v-else>
                            <p class="py-1">: Others</p>
                        </template>
                        <p class="py-1">: {{form.length}}</p>
                        <p class="py-1">: {{form.created_at}}</p>
                    </div>
                </div>                       
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default{
    name: "AssignedShow",

    data(){
        return{

            form: {},


        }
    },

    mounted(){
        axios.get('/api/auth/form/list/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.form;

                })
                    
                  
                .catch(error => {
                   

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });
        },

    methods: {
                    printme: function() {

                window.print();
            }
    },
}
</script>

<style scoped>
</style>