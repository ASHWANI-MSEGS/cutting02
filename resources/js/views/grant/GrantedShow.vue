<template>
    <div class="relative min-h-screen">
        <div v-if="modalA" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25" @click="modalA = ! modalA">
        </div>

        <div v-if="modal" class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-25" @click="modal = ! modal">
        </div>
       <!-- Assign modals -->
        <div v-if="modalA" class="absolute left-0 right-0 z-40 ml-auto mr-auto bg-white rounded-lg shadow top-2 sm:h-48 md:h-64 sm:w-2/3 lg:w-2/4 xl:w-1/4">
            <form @submit.prevent="approve">
                <!-- Assign Close Button -->
                    <div  class="absolute top-0 right-0 ">
                        <button @click="modalA = ! modalA" class="px-2 py-2 mt-4 mr-6 rounded hover:bg-gray-200">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877" viewBox="0 0 11.877 11.877">
                                            <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847" transform="translate(-2045 0.015)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847" transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none" stroke="#e37198" stroke-linecap="round" stroke-width="2"/>
                                             </g>
                            </svg>
                        </button>
                    </div>
                <!-- Assign Close Button Close -->

                <div class="flex justify-center my-6 text-xl font-bold text-textblueform ">Grant Permission</div>


                    <label class="flex justify-center px-4 py-2 font-bold text-blue-500 text-md">Do you want to approve</label>


                <div class="flex items-center justify-center pt-2 ">
                    <button class="px-4 py-2 text-sm font-bold text-white bg-green-500 rounded hover:bg-green-400" @click="approve">Yes</button>
                    <button class="px-4 py-1 ml-1 text-red-500 border border-red-500 rounded hover:border-red-300" @click="modalA = ! modalA">Cancel</button>
                </div>
            </form>
        </div>
        <!-- Close Assign modals -->


        <div class="flex flex-col w-full md:mt-6 md:ml-6 lg:w-4/5">
            <div v-if="loading">
                Loading...
            </div>

            <div v-else>
                <div class="flex items-center justify-center h-32 pt-1 rounded-t-lg bg-successcyan">
                    <div class="">
                        <svg version="1.1" class="text-white fill-current" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                <div class="flex flex-col items-center justify-center h-auto px-2 py-2 bg-white rounded-b-lg">
                    <p class="text-2xl font-normal">Permission Granted!!</p>
                    <p class="font-sans text-xl font-thin">Depth of cutting shall not be less than two (2) feet from road surface</p>
                    <p class="font-sans text-xl font-thin">Kawng Laih tur hi feet 2 aiin a thuk ngei ngei tur a ni</p>
                </div>

                <div class="flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg">
                    <div class="flex flex-col ml-8">
                        <p class="text-sm font-light">Memo No</p>
                        <p class="text-lg font-medium">{{ form.memo }}</p>
                    </div>
                    <button class="px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300" @click.prevent="printme">
                        <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
                    </button>
                </div>

                        <!-- 4. -->
                <div class="h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg">

                    <div class="py-8 mx-8">
                        <template v-if="form.division_id == 1">
                            <p class="">Permission for cutting PWD road/ROW under <span class="font-medium">Road South Division</span> for laying pipe/cable
                                is hearby granted to <span class="font-medium">{{form.name}}</span> under the following conditions:
                            </p>
                        </template>
                        <template v-if="form.division_id == 2">
                            <p class="">Permission for cutting PWD road/ROW under <span class="font-medium">Road North Division</span> for laying pipe/cable
                                is hearby granted to <span class="font-medium">{{form.name}}</span> under the following conditions:
                            </p>
                        </template>
                    </div>

                    <div class="flex justify-start py-2 pl-2 ml-8">

                        <div class="grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8">
                                <p class="py-1">1 Location</p>
                                <p class="py-1" >: {{form.houseno}}, {{form.localcouncil_name}}</p>
                                <p class="py-1">2 i) Name of Road</p>
                                 <p class="py-1">: {{estimate.road_name}}</p>
                                <p class="py-1">2 ii) Category of Road</p>
                                <p class="py-1">: {{estimate.road_type}}</p>
                                <p class="py-1">3 i) Length</p>
                                <p class="py-1">: {{estimate.length}} meter</p>
                                <p class="py-1">3 ii) Breadth</p>
                                <p class="py-1">: {{estimate.breadth}} meter</p>
                                <p class="py-1">4 i) Indemnification Fee</p>
                                <p class="py-1">: Rs. {{estimate.amount}}</p>
                                <p class="py-1">4 ii) Security Deposit (10%)</p>
                                <p class="py-1">: Rs. {{estimate.deposit}}</p>
                                <p class="py-1">4 iii) Total</p>
                                <p class="py-1">: Rs. {{estimate.total}}</p>
                                <p class="py-1">5. Permit Validity</p>
                                <p class="py-1">: Valid Upto  {{grant.validity}}</p>
                                <p class="py-1">6. Applicant ID/ Memo</p>
                                <p class="py-1">: {{form.memo}}</p>
                                <p class="py-1">7. Permission</p>
                                <template v-if="grant.status==0">
                                    <p class="py-1 text-red-500">: Pending for Permission</p>
                                </template>
                                <template v-else>
                                    <p class="py-1 mb-2 text-green-500">: Permission Granted</p>
                                </template>


                        </div>
                    </div>


                    <div class="py-8 mx-8 " style="page-break-before:always;">
                        <p class="py-2">7. Applicant shall inform Executive Engineer about starting of ground work/road cutting at least 3 days in advance in online (through portal) (Diltuin kawngpui laih chah hun tur hi ni 3 aia tlem lovah portal hmangin dept a hriattir ang).
                        </p>

                        <p class="py-2">8. Depth of cutting shall not be less than two (2) feet from road surface or as specified by the Executive Engineer (Feet 2 emaw EE – in tha a tih anga thuka laih/phum tur a ni).
                        </p>

                        <p class="py-2">9.Excavation should be filled properly and the site shall be left clean with satisfaction to PWD (separate condition applies wherever required) (Hna zawh hnuah lei/lunga hnawha kawngpui fai taka kalsan tur a ni).
                        </p>

                        <p class="py-2">10.	Applicant shall give report on completion of work & apply for Security deposit release within 3 days from the date of completion of work in online (through portal) ((hna a zawh atanga ni 3 chhunga applicant-in completion report a pe ang a, SD release a dil tur a ni). In case applicant does not give completion report, concern division is authorised to give completion report on verification at site.
                        </p>

                        <p class="py-2">11.	Forfeiture of security deposit :
                        </p>

                        <p class="py-2 pl-2" >i)	If applicant violate condition stated in serial no. 9 above, department shall instruct to rectify damage. If applicant does not take action to rectify within three (3) days from the date of instruction, security deposit (SD) shall be forfeited and may be utilised for rectification of damages (a chung sl no 10-in a sawi anga applicant-in a tih loh chuan department-in siam tha leh turin an hrilh ang a, ni thum chhunga hma a lak loh chuan a security deposit a chan ang a a hna tha lo siam that nan hman a ni ang).
                        </p>

                        <p class="py-2 pl-2">ii)	If applicant fails to give report on completion of work & apply for Security deposit release within three (3) days from the date (date mentioned in serial no. 5 above shall be assumed if not reported) of completion of work as stated in serial no. 10 above, security deposit shall be forfeited and may be remitted to government account (hna a zawh atanga ni 3 chhunga applicant-in completion report a pek loh a SD release a dil loh chuan a SD a chan anga sorkar sumah chhun luh a ni ang).
                        </p>

                    </div>

                    <div class="py-8 mx-8 " style="page-break-before:always;">

                        <p class="py-2">Memo No: _______________     <span class="ml-4">Dated: ____________ the _____________</span></p>
                        <p class="py-2">Copy to:</p>

                        <p class="py-2">1.The Chief Engineer, PWD, _____________________ for kind information.
                        </p>

                        <p class="py-2">2. The Superintending Engineer, PWD, _______________Circle for kind information.
                        </p>

                        <p class="py-2">3. The Sub-Divisional Officer, PWD, ________________ Sub-Division for 	information and necessary action.
                        </p>

                        <p class="py-2">4. The Road Protection Officer, PWD (for Aizawl city area) for information
                        </p>

                        <p class="py-2">5. ______________________________(concern department if any) for 			information and compliance of above conditions
                        </p>
                        <p class="py-2">6. <b>{{form.name}}</b> (applicant). This permit should be kept at work site.
                        </p>


                        <p class="py-2">7. Secretary, Local/Village Council, <b>{{form.localcouncil_name}}</b> for information & necessary action.
                        </p>

                        <div class="flex flex-col items-end mt-8">
                            <div>
                                <p>Executive Engineer, PWD</p>
                                <template v-if="form.division_id == 1">
                                        Div: Road South
                                    </template>
                                    <template v-else-if="form.division_id == 2">
                                        Div: Road North
                                    </template>
                                    <template v-else-if="form.division_id == 4">
                                        Div: Road Champhai
                                    </template>
                                    <template v-else-if="form.division_id == 5">
                                        Div: Road Lunglei
                                    </template>
                                    <template v-else-if="form.division_id == 6">
                                        Div: Road Saitual
                                    </template>
                                    <template v-else-if="form.division_id == 7">
                                        Div: Road Mamit
                                    </template>
                                    <template v-else-if="form.division_id == 8">
                                        Div: Road Siaha
                                    </template>
                                    <template v-else-if="form.division_id == 9">
                                        Div: Road Khawzawl
                                    </template>
                                    <template v-else-if="form.division_id == 10">
                                        Div: Road Kolasib
                                    </template>
                                    <template v-else-if="form.division_id == 11">
                                        Div: Road Lawngtlai
                                    </template>
                                    <template v-else-if="form.division_id == 12">
                                        Div: Road Serchhip
                                    </template>
                                    <template v-else-if="form.division_id == 13">
                                        Div: Road Hnahthial
                                    </template>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>

</template>



<script>
    import UserCircle from '../../components/UserCircle';

    export default {
        name: "GrantedShow",

        components: {
            UserCircle
        },

        mounted() {
            axios.get('/api/auth/grant/' + this.$route.params.id)
                .then(response => {
                    this.grant = response.data.grant;
                    this.form = response.data.form;
                    this.estimate = response.data.estimate;
                    this.loading = false;
                    console.log(this.form);
                })
                .catch(error => {
                    this.loading = false;

                    if (error.response.status === 404) {
                        this.$router.push('/forms');
                    }
                });
        },

        data: function () {
            return {
                form : '',
                grant:'',
                estimate:'',
                loading: true,
                modal: false,
                contact: null,
                modalA: false,
                currentUser: this.$store.getters.currentUser,
            }
        },

        methods: {
            destroy: function () {
                axios.delete('/api/auth/grant' + this.$route.params.id)
                    .then(response => {
                        this.$router.push('/contacts');
                    })
                    .catch(error => {
                        alert('Internal Error. Unable to delete contact.');
                    });
            },

            approve: function () {
                axios.patch('/api/auth/estimateStatus/' + this.$route.params.id)
                    .then(response => {
                        this.$router.push('/grantSuccessShow');
                        // this.$router.push('/formList/' + this.$route.params.id);
                    })
                    .catch(error => {
                        alert('Internal Error. Unable to approve form.');
                    });
            },

            printme: function() {

                window.print();
            }
        }
    }
</script>

<style scoped>

</style>
