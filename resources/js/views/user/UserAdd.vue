<template>
    <div class="flex flex-col h-screen mt-10">
        <div class="w-full h-auto bg-white border-gray-200 rounded-t-lg rounded-b-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div class="px-5 py-1 mb-5 col-md-8 col-md-offset-2">
                <!-- <div> -->
                    <div class="py-2 pr-4 text-lg font-bold text-gray-600">Add New User</div>
                    <div>


                        <form @submit.prevent='registerUser'>
                            <div class="relative pt-2">
                                <label class="absolute px-2 py-1 text-xs uppercase text-textblue">Name:</label>
                                <input @input="updateName()" type="text"
                                    class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                                    placeholder="Hming" v-model="user.name">
                            </div>
                            <p class="pb-1 text-sm text-red-600" v-text="errorName()">Error Here</p>

                            <div class="relative pt-2 ">
                                <label class="absolute px-2 text-xs uppercase p1-2 text-textblue">Email:</label>
                                <input @input="updateEmail()" type="text"
                                    class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                                    placeholder="Email" v-model="user.email">
                            </div>
                            <p class="pb-1 text-sm text-red-600" v-text="errorEmail()">Error Here</p>



                            <div class="relative pt-2 ">
                                <label class="absolute px-2 py-1 text-xs uppercase text-textblue">Password:</label>
                                <input @input="updatePassword()" type="text"
                                    class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                                    placeholder="Password" v-model="user.password">
                            </div>
                            <p class="pb-1 text-sm text-red-600" v-text="errorPassword()">Error Here</p>


                            <div class="relative pt-2 ">
                                <label class="absolute px-2 py-1 text-xs uppercase text-textblue">Phone:</label>
                                <input @input="updatePhone()" type="text"
                                    class="w-full px-2 pt-6 pb-1 text-gray-900 border rounded-lg focus:outline-none "
                                    placeholder="Phone" v-model="user.phone">
                            </div>
                            <p class="pb-1 text-sm text-red-600" v-text="errorPhone()">Error Here</p>

                            <div>
                                <label class="pr-4 text-lg font-bold text-gray-600">Division:</label>
                                <div class="relative pb-1 border rounded-lg">
                                    <select v-model="user.division_id" @change="updateDivision_id()"
                                        class="w-full px-3 pt-2 pb-1 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none">
                                        <option value="" class="inline-block text-textgrayform" disabled selected>Select
                                            Division</option>
                                        <template v-if="userDivisionId == 1 || userRoleID == 1">
                                            <option value="1">Aizawl Road South</option>
                                        </template>
                                        <template v-if="userDivisionId == 2 || userRoleID == 1">
                                            <option value="2">Aizawl Road North</option>
                                        </template>
                                        <template v-if="userDivisionId == 4 || userRoleID == 1">
                                            <option value="4">Champhai Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 5 || userRoleID == 1">
                                            <option value="5">Lunglei Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 6 || userRoleID == 1">
                                            <option value="6">Saitual Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 7 || userRoleID == 1">
                                            <option value="7">Mamit Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 8 || userRoleID == 1">
                                            <option value="8">Siaha Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 9 || userRoleID == 1">
                                            <option value="9">Khawzawl Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 10 || userRoleID == 1">
                                            <option value="10">Kolasib Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 11 || userRoleID == 1">
                                            <option value="11">Lawngtlai Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 12 || userRoleID == 1">
                                            <option value="12">Serchhip Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 13 || userRoleID == 1">
                                            <option value="13">Lunglei Road Div-II, Hnahthial Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 14 || userRoleID == 1">
                                            <option value="14">Hmuifang Division Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 15 || userRoleID == 1">
                                            <option value="15">National Highway Div-I Road</option>
                                        </template>
                                        <template v-if="userDivisionId == 16 || userRoleID == 1">
                                            <option value="16">National Highway Div-III Road</option>
                                        </template>
                                    </select>
                                </div>


                                <p class="pb-1 text-sm text-red-600" v-text="errorDivision_id()">Error Here</p>
                            </div>
                            <br>
                            <!-- original code  -->
                            <!-- <div >
                                <label  class="pr-4 text-lg font-bold text-gray-600">Division:</label>

                                <div class="flex justify-evenly">
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text=blue=400  pr-4" type="radio" value="1" v-model="user.division_id" > Aizawl Road South</label>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="2"  v-model="user.division_id" > Aizawl Road North</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="4"  v-model="user.division_id" >Champhai Road</label><br>
                                   <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="5"  v-model="user.division_id" > Lunglei Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="6"  v-model="user.division_id" > Saitual Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="7"  v-model="user.division_id" > Mamit Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="8"  v-model="user.division_id" > Siaha Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="9"  v-model="user.division_id" > Khawzawl Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="10"  v-model="user.division_id" > Kolasib Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="11"  v-model="user.division_id" > Lawngtlai Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="12"  v-model="user.division_id" > Serchhip Road</label><br>
                                    <label  class="cursor-pointer hover:text-gray-600"><input @input="updateDivision_id()" class="hover:text-blue-400 " type="radio" value="13"  v-model="user.division_id" > Hnahthial Road</label><br>
                                </div>
                                <p class="pb-4 text-sm text-red-600" v-text="errorDivision_id()">Error Here</p>
                            </div>
                            <br> -->
                            <!-- original code end -->
                            <label class="pt-2 pr-4 text-lg font-bold text-gray-600">Sub-Division:</label>
                            <div class="relative pb-1 border rounded-lg">
                                <!-- <label for="user.sub_div"
                                    class="absolute px-4 py-1 text-sm font-light text-textblueform">Sub Division
                                </label> -->
                                <select v-model="user.sub_div"
                                    class="w-full px-3 pt-3 mt-1 ml-1 bg-white rounded-lg appearance-none text-textgrayform focus:outline-none"
                                    :errors="errors">
                                    <option value="" class="inline-block text-textgrayform " disabled selected>Select
                                        Sub Division</option>
                                    <option value="1">Sub Division - I</option>
                                    <option value="2">Sub Division - II</option>
                                    <option value="3">Sub Division - III</option>
                                </select>
                            </div>
                            <br>

                            <div>
                                <label class="pr-4 text-lg font-bold text-gray-600">Role:</label>
                                <br>
                                <div class="flex justify-evenly">
                                    <template v-if="userRoleID == 1">
                                        <label class="cursor-pointer hover:text-gray-600"><input
                                                @input="updateRole_id()" class="hover:text=blue=400  pr-4" type="radio"
                                                value="1" v-model="user.role_id"> Super Admin</label>
                                    </template>
                                    <label class="cursor-pointer hover:text-gray-600"><input @input="updateRole_id()"
                                            class="hover:text-blue-400 " type="radio" value="2" v-model="user.role_id">
                                        EE </label>
                                    <label class="cursor-pointer hover:text-gray-600"><input @input="updateRole_id()"
                                            class="hover:text-blue-400 " type="radio" value="3" v-model="user.role_id">
                                        SDO/JE</label>
                                </div>
                            </div>
                            <p class="pb-4 text-sm text-red-600" v-text="errorRole_id()">Error Here</p>
                            <br><br>

                            <div>
                                <div>
                                    <button type="submit"
                                        class="px-3 py-1 text-white bg-green-400 border rounded-lg hover:bg-green-300">
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: "UserAdd",
    data() {
        return {

            user: {
                name: '',
                password: '',
                phone: '',
                email: '',
                division_id: '',
                role_id: '',
                sub_div: '',
                created_by: '',
            },

            errors: {},
            error: null,
            userDivisionId: this.$store.getters.currentUser.division_id,
            userRoleID: this.$store.getters.currentUser.role_id
        }

    },
    mounted() {
        console.log(this.userDivisionId);
        console.log(typeof this.userDivisionId);
    },
    methods: {
        registerUser() {

            this.user.created_by = this.$store.getters.currentUser.id;
            axios.post('/api/createUser', this.user, {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.currentUser.token}`
                }
            })
                .then(response => {

                    this.$router.push({ path: '/userList' });

                })
                .catch(errors => {

                    this.errors = errors.response.data.errors;

                });
        },

        errorName() {
            if (this.hasErrorName) {
                // return this.errors['localcouncil_name'][0];
                return "Please Enter Engineer's name";
            }
        },

        errorRole_id() {
            if (this.hasErrorRole_id) {
                // return this.errors['localcouncil_name'][0];
                return "Enter Post";
            }
        },

        errorEmail() {
            if (this.hasErrorEmail) {
                // return this.errors['localcouncil_name'][0];
                return "Re Enter Email";
            }
        },

        errorPhone() {
            if (this.hasErrorPhone) {
                // return this.errors['localcouncil_name'][0];
                return "Check Phone number( must be 10 digits)";
            }
        },


        errorPassword() {
            if (this.hasErrorPassword) {
                // return this.errors['localcouncil_name'][0];
                return "Check Phone number( must be 10 digits)";
            }
        },

        errorDivision_id() {
            if (this.hasErrorDivision_id) {
                // return this.errors['localcouncil_name'][0];
                return "Select division";
            }
        },



        updateName: function () {
            this.errors['name'] = null;
        },

        updatePassword: function () {
            this.errors['password'] = null;
        },

        updatePhone: function () {
            this.errors['phone'] = null;
        },

        updateDivision_id: function () {
            this.errors['division_id'] = null;
        },

        updateEmail: function () {
            this.errors['email'] = null;
        },

        updateRole_id: function () {
            this.errors['role_id'] = null;
        },

    },


    computed: {

        hasErrorName() {
            return this.errors && this.errors['name'] && this.errors['name'].length > 0;
        },

        hasErrorPassword() {
            return this.errors && this.errors['password'] && this.errors['password'].length > 0;
        },

        hasErrorEmail() {
            return this.errors && this.errors['email'] && this.errors['email'].length > 0;
        },

        hasErrorPhone() {
            return this.errors && this.errors['phone'] && this.errors['phone'].length > 0;
        },

        hasErrorDivision_id() {
            return this.errors && this.errors['division_id'] && this.errors['division_id'].length > 0;
        },

        hasErrorRole_id() {
            return this.errors && this.errors['role_id'] && this.errors['role_id'].length > 0;
        },

    }
}
</script>
