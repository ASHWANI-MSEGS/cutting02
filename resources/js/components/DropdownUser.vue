<template>
    <div class="relative block">
        <button @click="toggleDropdown"
            class="px-4 py-3 rounded-full cursor-pointer focus:outline-none focus:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="12" viewBox="0 0 4 18">
                <g id="Group_33" data-name="Group 33" transform="translate(-1839 -47)">
                    <circle id="Ellipse_27" data-name="Ellipse 27" cx="2" cy="2" r="2" transform="translate(1839 47)"
                        fill="#414141" />
                    <circle id="Ellipse_29" data-name="Ellipse 29" cx="2" cy="2" r="2" transform="translate(1839 61)"
                        fill="#414141" />
                    <circle id="Ellipse_28" data-name="Ellipse 28" cx="2" cy="2" r="2" transform="translate(1839 54)"
                        fill="#414141" />
                </g>
            </svg>
        </button>

        <div v-show="!showDropdown"
            class="absolute right-0 z-50 w-48 pt-4 mt-1 bg-white rounded-b-lg rounded-l-lg bottom-o">
            <template v-if="currentUser.role_id == 2">
                <router-link to="/localcouncilAdd">
                    <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500 "
                        @click="clearDropdown">
                        <!-- <img class="w-5 h-5 text-black fill-current" :src="addlc" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_211" data-name="Rectangle 211" width="30" height="30"
                                        transform="translate(90 426)" fill="#ff1a68" stroke="#707070"
                                        stroke-width="1" />
                                </clipPath>
                            </defs>
                            <g id="Mask_Group_9" data-name="Mask Group 9" transform="translate(-90 -426)"
                                clip-path="url(#clip-path)">
                                <g id="add_LC" data-name="add LC" transform="translate(89.936 425.649)">
                                    <path id="Path_134" data-name="Path 134" d="M6.041,16.778" fill="#ff1a68" />
                                    <path id="Path_135" data-name="Path 135"
                                        d="M21.595,15.4a16.4,16.4,0,0,0-1.761-.708,7.957,7.957,0,1,0-9.532.01A14.876,14.876,0,0,0,5.383,17.4,15.266,15.266,0,0,0,.142,26.047a3.573,3.573,0,0,0,3.481,4.3h14.43a1.174,1.174,0,0,0,0-2.348H3.613a1.233,1.233,0,0,1-.941-.445,1.2,1.2,0,0,1-.243-1.022A12.941,12.941,0,0,1,14.744,16.282c.1,0,.2.01.314.01s.213,0,.314-.01a12.756,12.756,0,0,1,5.222,1.235,1.17,1.17,0,0,0,1-2.115Zm-6.254-1.467h-.567a5.626,5.626,0,1,1,.567,0Z"
                                        fill="#ff1a68" />
                                    <path id="Path_136" data-name="Path 136"
                                        d="M28.891,23.608H25.673V20.39a1.174,1.174,0,0,0-2.348,0v3.218H20.107a1.174,1.174,0,1,0,0,2.348h3.218v3.218a1.174,1.174,0,0,0,2.348,0V25.956h3.218a1.174,1.174,0,1,0,0-2.348Zm0,0"
                                        fill="#ff1a68" />
                                </g>
                            </g>
                        </svg>
                        <p class="pl-3 text-sm">Add Local Council</p>
                    </button>
                </router-link>
            </template>

            <template v-if="currentUser.role_id == 2 || currentUser.role_id == 3">
            <router-link to="/localcouncilList" class="hover:bg-gray-100">
                <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500" @click="clearDropdown">
                    <!-- <img class="w-5 h-5" :src="lclist" /> -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                        style="enable-background:new 0 0 300 300;" xml:space="preserve">

                        <path class="st1"
                            d="M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191
                            c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7s-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9
                            C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z" />
                        <path class="st1" d="M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7S52,93.7,58.5,93.7h120.7
                            C185.7,93.7,190.9,88.5,190.9,82L190.9,82z" />
                        <path class="st1" d="M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h73.9
                            C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z" />
                        <path class="st1" d="M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7s-5.2-11.7-11.7-11.7
                            H58.5z" />
                        <path class="st1" d="M295.4,247.5c-0.1-0.2-0.1-0.5-0.2-0.7c-3.2-14.3-11.1-27.3-22.5-36.5c-4.4-3.6-9.2-6.6-14.3-9
                            c5.7-6.4,9.1-14.9,9.1-24.1c0-20.2-16.4-36.6-36.6-36.6c-9.2,0-17.6,3.4-24,9c-8.1-7.4-18.9-11.9-30.7-11.9
                            c-25.2,0-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7
                            c-1.5,7,0.3,14.3,4.8,19.8s11.2,8.7,18.3,8.7h114.4c7.1,0,13.7-3.2,18.3-8.7c4.4-5.6,6.2-12.9,4.8-20c-0.1-0.2-0.1-0.4-0.1-0.6h20.4
                            c5.7,0,11-2.6,14.7-7C295,259,296.5,253.2,295.4,247.5z M218,164.7c3.3-3.4,7.8-5.5,12.9-5.5c9.9,0,17.9,8,17.9,17.9
                            s-8,17.9-17.9,17.9c-3.6,0-7-1.1-9.8-2.9c-4.9-3.2-8.1-8.7-8.1-15C213,172.3,214.9,167.9,218,164.7z M176.2,160.9
                            c7.8,0,14.7,4.1,18.7,10.2c2.3,3.5,3.6,7.7,3.6,12.1c0,2.7-0.5,5.3-1.4,7.7c-3.1,8.5-11.3,14.6-20.9,14.6c-12.3,0-22.3-10-22.3-22.3
                            C153.9,170.9,163.9,160.9,176.2,160.9z M233.4,276.3H118.9c0,0-0.2-0.1-0.1-0.4c5.4-26.2,28.3-45.5,54.8-46.7c0.9,0,1.8-0.1,2.6-0.1
                            c6.2,0,12.1,1,17.8,2.8c11.2,3.6,21,10.6,28.3,19.8c4.4,5.5,7.8,11.9,9.9,18.8c0.6,1.8,1,3.6,1.4,5.5
                            C233.6,276.2,233.4,276.3,233.4,276.3z M276.8,251.7h-27c-5.1-10.4-12.4-19.7-21.4-27.1c-3.9-3.1-7.9-6-12.2-8.3
                            c4.7-1.6,9.6-2.4,14.8-2.4c22.1,0,41.5,15.9,46,37.6C276.9,251.6,276.8,251.7,276.8,251.7z" />
                        <path class="st1" d="M244.9,276.2L244.9,276.2z" />
                    </svg>
                    <p class="pl-3 text-sm">Local Council List</p>
                </button>
            </router-link>
        </template>
            <template v-if="currentUser.role_id == 1">
            <router-link to="/districtDivision" class="hover:bg-gray-100">
                <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500" @click="clearDropdown">
                    <!-- <img class="w-5 h-5" :src="lclist" /> -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                        style="enable-background:new 0 0 300 300;" xml:space="preserve">

                        <path class="st1"
                            d="M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191
                            c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7s-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9
                            C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z" />
                        <path class="st1" d="M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7S52,93.7,58.5,93.7h120.7
                            C185.7,93.7,190.9,88.5,190.9,82L190.9,82z" />
                        <path class="st1" d="M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h73.9
                            C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z" />
                        <path class="st1" d="M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7s-5.2-11.7-11.7-11.7
                            H58.5z" />
                        <path class="st1" d="M295.4,247.5c-0.1-0.2-0.1-0.5-0.2-0.7c-3.2-14.3-11.1-27.3-22.5-36.5c-4.4-3.6-9.2-6.6-14.3-9
                            c5.7-6.4,9.1-14.9,9.1-24.1c0-20.2-16.4-36.6-36.6-36.6c-9.2,0-17.6,3.4-24,9c-8.1-7.4-18.9-11.9-30.7-11.9
                            c-25.2,0-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7
                            c-1.5,7,0.3,14.3,4.8,19.8s11.2,8.7,18.3,8.7h114.4c7.1,0,13.7-3.2,18.3-8.7c4.4-5.6,6.2-12.9,4.8-20c-0.1-0.2-0.1-0.4-0.1-0.6h20.4
                            c5.7,0,11-2.6,14.7-7C295,259,296.5,253.2,295.4,247.5z M218,164.7c3.3-3.4,7.8-5.5,12.9-5.5c9.9,0,17.9,8,17.9,17.9
                            s-8,17.9-17.9,17.9c-3.6,0-7-1.1-9.8-2.9c-4.9-3.2-8.1-8.7-8.1-15C213,172.3,214.9,167.9,218,164.7z M176.2,160.9
                            c7.8,0,14.7,4.1,18.7,10.2c2.3,3.5,3.6,7.7,3.6,12.1c0,2.7-0.5,5.3-1.4,7.7c-3.1,8.5-11.3,14.6-20.9,14.6c-12.3,0-22.3-10-22.3-22.3
                            C153.9,170.9,163.9,160.9,176.2,160.9z M233.4,276.3H118.9c0,0-0.2-0.1-0.1-0.4c5.4-26.2,28.3-45.5,54.8-46.7c0.9,0,1.8-0.1,2.6-0.1
                            c6.2,0,12.1,1,17.8,2.8c11.2,3.6,21,10.6,28.3,19.8c4.4,5.5,7.8,11.9,9.9,18.8c0.6,1.8,1,3.6,1.4,5.5
                            C233.6,276.2,233.4,276.3,233.4,276.3z M276.8,251.7h-27c-5.1-10.4-12.4-19.7-21.4-27.1c-3.9-3.1-7.9-6-12.2-8.3
                            c4.7-1.6,9.6-2.4,14.8-2.4c22.1,0,41.5,15.9,46,37.6C276.9,251.6,276.8,251.7,276.8,251.7z" />
                        <path class="st1" d="M244.9,276.2L244.9,276.2z" />
                    </svg>
                    <p class="pl-3 text-sm">Local Council List</p>
                </button>
            </router-link>
        </template>

            <template v-if="currentUser.role_id == 2">
                <router-link to="/engineerAdd">
                    <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500 "
                        @click="clearDropdown">
                        <!-- <img class="w-5 h-5 text-black fill-current" :src="addlc" /> -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_211" data-name="Rectangle 211" width="30" height="30"
                                        transform="translate(90 426)" fill="#ff1a68" stroke="#707070"
                                        stroke-width="1" />
                                </clipPath>
                            </defs>
                            <g id="Mask_Group_9" data-name="Mask Group 9" transform="translate(-90 -426)"
                                clip-path="url(#clip-path)">
                                <g id="add_LC" data-name="add LC" transform="translate(89.936 425.649)">
                                    <path id="Path_134" data-name="Path 134" d="M6.041,16.778" fill="#ff1a68" />
                                    <path id="Path_135" data-name="Path 135"
                                        d="M21.595,15.4a16.4,16.4,0,0,0-1.761-.708,7.957,7.957,0,1,0-9.532.01A14.876,14.876,0,0,0,5.383,17.4,15.266,15.266,0,0,0,.142,26.047a3.573,3.573,0,0,0,3.481,4.3h14.43a1.174,1.174,0,0,0,0-2.348H3.613a1.233,1.233,0,0,1-.941-.445,1.2,1.2,0,0,1-.243-1.022A12.941,12.941,0,0,1,14.744,16.282c.1,0,.2.01.314.01s.213,0,.314-.01a12.756,12.756,0,0,1,5.222,1.235,1.17,1.17,0,0,0,1-2.115Zm-6.254-1.467h-.567a5.626,5.626,0,1,1,.567,0Z"
                                        fill="#ff1a68" />
                                    <path id="Path_136" data-name="Path 136"
                                        d="M28.891,23.608H25.673V20.39a1.174,1.174,0,0,0-2.348,0v3.218H20.107a1.174,1.174,0,1,0,0,2.348h3.218v3.218a1.174,1.174,0,0,0,2.348,0V25.956h3.218a1.174,1.174,0,1,0,0-2.348Zm0,0"
                                        fill="#ff1a68" />
                                </g>
                            </g>
                        </svg>
                        <p class="pl-3 text-sm">Add Engineer</p>
                    </button>
                </router-link>
            </template>

            <router-link to="/engineerList" class="hover:bg-gray-100">
                <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500" @click="clearDropdown">
                    <!-- <img class="w-5 h-5" :src="lclist" /> -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                        style="enable-background:new 0 0 300 300;" xml:space="preserve">

                        <path class="st1"
                            d="M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191
                            c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7s-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9
                            C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z" />
                        <path class="st1" d="M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7S52,93.7,58.5,93.7h120.7
                            C185.7,93.7,190.9,88.5,190.9,82L190.9,82z" />
                        <path class="st1" d="M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h73.9
                            C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z" />
                        <path class="st1" d="M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7s5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7s-5.2-11.7-11.7-11.7
                            H58.5z" />
                        <path class="st1" d="M295.4,247.5c-0.1-0.2-0.1-0.5-0.2-0.7c-3.2-14.3-11.1-27.3-22.5-36.5c-4.4-3.6-9.2-6.6-14.3-9
                            c5.7-6.4,9.1-14.9,9.1-24.1c0-20.2-16.4-36.6-36.6-36.6c-9.2,0-17.6,3.4-24,9c-8.1-7.4-18.9-11.9-30.7-11.9
                            c-25.2,0-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7
                            c-1.5,7,0.3,14.3,4.8,19.8s11.2,8.7,18.3,8.7h114.4c7.1,0,13.7-3.2,18.3-8.7c4.4-5.6,6.2-12.9,4.8-20c-0.1-0.2-0.1-0.4-0.1-0.6h20.4
                            c5.7,0,11-2.6,14.7-7C295,259,296.5,253.2,295.4,247.5z M218,164.7c3.3-3.4,7.8-5.5,12.9-5.5c9.9,0,17.9,8,17.9,17.9
                            s-8,17.9-17.9,17.9c-3.6,0-7-1.1-9.8-2.9c-4.9-3.2-8.1-8.7-8.1-15C213,172.3,214.9,167.9,218,164.7z M176.2,160.9
                            c7.8,0,14.7,4.1,18.7,10.2c2.3,3.5,3.6,7.7,3.6,12.1c0,2.7-0.5,5.3-1.4,7.7c-3.1,8.5-11.3,14.6-20.9,14.6c-12.3,0-22.3-10-22.3-22.3
                            C153.9,170.9,163.9,160.9,176.2,160.9z M233.4,276.3H118.9c0,0-0.2-0.1-0.1-0.4c5.4-26.2,28.3-45.5,54.8-46.7c0.9,0,1.8-0.1,2.6-0.1
                            c6.2,0,12.1,1,17.8,2.8c11.2,3.6,21,10.6,28.3,19.8c4.4,5.5,7.8,11.9,9.9,18.8c0.6,1.8,1,3.6,1.4,5.5
                            C233.6,276.2,233.4,276.3,233.4,276.3z M276.8,251.7h-27c-5.1-10.4-12.4-19.7-21.4-27.1c-3.9-3.1-7.9-6-12.2-8.3
                            c4.7-1.6,9.6-2.4,14.8-2.4c22.1,0,41.5,15.9,46,37.6C276.9,251.6,276.8,251.7,276.8,251.7z" />
                        <path class="st1" d="M244.9,276.2L244.9,276.2z" />
                    </svg>
                    <p class="pl-3 text-sm">Engineer List</p>
                </button>
            </router-link>

            <router-link to="/userList">
                <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500" @click="clearDropdown">
                    <!-- <img class="w-5 h-5" :src="userlist" /> -->
                    <svg version="1.1" id="Layer_1" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                        style="enable-background:new 0 0 300 300;" xml:space="preserve">

                        <path class="st1"
                            d="M85.5,288.3c0,6.5-5.2,11.7-11.7,11.7h-27C21,300,0,279,0,253.1V46.9C0,21,21,0,46.9,0H191
                            c25.8,0,46.9,21,46.9,46.9v69.7c0,6.5-5.2,11.7-11.7,11.7c-6.5,0-11.7-5.2-11.7-11.7V46.9c0-12.9-10.5-23.4-23.4-23.4H46.9
                            C34,23.4,23.4,34,23.4,46.9v206.3c0,12.9,10.5,23.4,23.4,23.4h27C80.3,276.6,85.5,281.8,85.5,288.3L85.5,288.3z" />
                        <path class="st1" d="M190.9,82c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7h120.7
                            C185.7,93.7,190.9,88.5,190.9,82L190.9,82z" />
                        <path class="st1" d="M144.1,128.9c0-6.5-5.2-11.7-11.7-11.7H58.5c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7h73.9
                            C138.9,140.6,144.1,135.4,144.1,128.9L144.1,128.9z" />
                        <path class="st1" d="M58.5,164.1c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7h48.7c6.5,0,11.7-5.2,11.7-11.7
                            c0-6.5-5.2-11.7-11.7-11.7H58.5z" />
                        <path class="st1"
                            d="M267.9,271.3c-0.1-0.3-0.1-0.6-0.2-0.9c-4-17.8-13.9-34-28-45.6c-5.5-4.5-11.5-8.3-17.8-11.2
                            c7.1-8,11.4-18.6,11.4-30.1c0-25.2-20.5-45.7-45.7-45.7s-45.7,20.5-45.7,45.7c0,11.5,4.3,22.1,11.4,30.1
                            c-6.4,2.9-12.4,6.7-17.8,11.2c-14.4,11.9-24.4,28.5-28.2,46.7c-1.5,7,0.3,14.3,4.8,19.8c4.5,5.5,11.2,8.7,18.3,8.7h114.4
                            c7.1,0,13.7-3.2,18.3-8.7C267.5,285.7,269.3,278.4,267.9,271.3z M187.5,161.1c12.3,0,22.3,10,22.3,22.3c0,12.3-10,22.3-22.3,22.3
                            s-22.3-10-22.3-22.3C165.2,171.1,175.2,161.1,187.5,161.1z M244.9,276.2c0,0.2-0.2,0.3-0.2,0.3H130.3c0,0-0.1,0-0.1,0
                            s-0.2-0.1-0.1-0.4c5.6-27.1,29.8-46.8,57.4-46.8S239.3,249.1,244.9,276.2C244.9,276.2,244.9,276.2,244.9,276.2z" />
                        <path class="st1" d="M244.9,276.2L244.9,276.2z" />
                    </svg>
                    <p class="pl-3 text-sm">User List</p>
                </button>
            </router-link>

            <template v-if="currentUser.role_id == 2 || currentUser.role_id == 1 ">
                <router-link to="/userAdd">
                    <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500"
                        @click="clearDropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect id="Rectangle_211" data-name="Rectangle 211" width="30" height="30"
                                        transform="translate(90 426)" fill="#ff1a68" stroke="#707070"
                                        stroke-width="1" />
                                </clipPath>
                            </defs>
                            <g id="Mask_Group_9" data-name="Mask Group 9" transform="translate(-90 -426)"
                                clip-path="url(#clip-path)">
                                <g id="add_LC" data-name="add LC" transform="translate(89.936 425.649)">
                                    <path id="Path_134" data-name="Path 134" d="M6.041,16.778" fill="#ff1a68" />
                                    <path id="Path_135" data-name="Path 135"
                                        d="M21.595,15.4a16.4,16.4,0,0,0-1.761-.708,7.957,7.957,0,1,0-9.532.01A14.876,14.876,0,0,0,5.383,17.4,15.266,15.266,0,0,0,.142,26.047a3.573,3.573,0,0,0,3.481,4.3h14.43a1.174,1.174,0,0,0,0-2.348H3.613a1.233,1.233,0,0,1-.941-.445,1.2,1.2,0,0,1-.243-1.022A12.941,12.941,0,0,1,14.744,16.282c.1,0,.2.01.314.01s.213,0,.314-.01a12.756,12.756,0,0,1,5.222,1.235,1.17,1.17,0,0,0,1-2.115Zm-6.254-1.467h-.567a5.626,5.626,0,1,1,.567,0Z"
                                        fill="#ff1a68" />
                                    <path id="Path_136" data-name="Path 136"
                                        d="M28.891,23.608H25.673V20.39a1.174,1.174,0,0,0-2.348,0v3.218H20.107a1.174,1.174,0,1,0,0,2.348h3.218v3.218a1.174,1.174,0,0,0,2.348,0V25.956h3.218a1.174,1.174,0,1,0,0-2.348Zm0,0"
                                        fill="#ff1a68" />
                                </g>
                            </g>
                        </svg>
                        <p class="pl-3 text-sm">Add User</p>
                    </button>
                </router-link>
            </template>

            <router-link to="/trackForm">
                <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500" @click="clearDropdown">
                    <!-- <img class="w-5 h-5" :src="trackform" /> -->
                    <svg version="1.1" id="Layer_1" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                        style="enable-background:new 0 0 300 300;" xml:space="preserve">
                        <path class="st1"
                            d="M124.7,1.3C56,1.3,0.1,48.4,0.1,106.2c0,72.3,111.9,185.8,116.6,190.6c4.1,4.2,11.8,4.2,15.9,0
                            c4.8-4.8,116.6-118.4,116.6-190.6C249.3,48.4,193.4,1.3,124.7,1.3L124.7,1.3z M124.7,277.3C99.2,249.9,20.9,161.7,20.9,106.2
                            c0-48.2,46.6-87.4,103.8-87.4S228.6,58,228.6,106.2C228.6,161.7,150.3,249.9,124.7,277.3L124.7,277.3z M124.7,277.3" />
                        <rect y="1.3" class="st2" width="249.5" height="298.7" />
                        <path class="st1" d="M197.4,105.4h-11.3c-4.4-23.7-25-42.5-51.1-46.5V48.6c0-5.2-4.6-9.5-10.4-9.5c-5.7,0-10.4,4.2-10.4,9.5v10.3
                            c-26.1,4-46.7,22.8-51.1,46.5H52c-5.7,0-10.4,4.2-10.4,9.5s4.6,9.5,10.4,9.5h11.3c4.4,23.7,25,42.5,51.1,46.5v10.3
                            c0,5.2,4.6,9.5,10.4,9.5c5.7,0,10.4-4.2,10.4-9.5v-10.3c26.1-4,46.7-22.8,51.1-46.5h11.3c5.7,0,10.4-4.2,10.4-9.5
                            S203.2,105.4,197.4,105.4L197.4,105.4z M124.7,152.7c-22.9,0-41.5-17-41.5-37.8C83.2,94,101.8,77,124.7,77s41.5,17,41.5,37.8
                            C166.3,135.7,147.6,152.7,124.7,152.7L124.7,152.7z M124.7,152.7" />
                    </svg>
                    <p class="pl-3 text-sm">Track Form</p>
                </button>
            </router-link>

            <router-link to="/profile">
                <button class="flex flex-row pt-4 pl-5 focus:outline-none hover:text-gray-500" @click="clearDropdown">
                    <!-- <img class="w-5 h-5 text-white fill-current " :src="profile" /> -->
                    <svg version="1.1" id="Layer_1" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                        style="enable-background:new 0 0 300 300;" xml:space="preserve">
                        <g>
                            <path class="st1" d="M279,191.6c-9.8-8.6-21.7-16.1-35.4-22.1c-5.8-2.6-12.7,0-15.3,5.9c-2.6,5.8,0,12.7,5.9,15.3
                                c11.5,5.1,21.4,11.3,29.5,18.4c9.9,8.7,15.6,21.4,15.6,34.7v21.4c0,6.4-5.2,11.6-11.6,11.6H41.1c-6.4,0-11.6-5.2-11.6-11.6v-21.4
                                c0-13.3,5.7-25.9,15.6-34.7c11.7-10.3,45.7-34.2,109.3-34.2c47.2,0,85.6-38.4,85.6-85.6S201.6,3.6,154.4,3.6S68.8,42,68.8,89.2
                                c0,27.6,13.1,52.2,33.5,67.8C65.1,165.3,42,181,29.9,191.6c-14.9,13.1-23.5,32.1-23.5,52v21.4c0,19.1,15.6,34.7,34.7,34.7h226.7
                                c19.1,0,34.7-15.6,34.7-34.7v-21.4C302.5,223.7,293.9,204.7,279,191.6L279,191.6z M92,89.2c0-34.4,28-62.5,62.5-62.5
                                s62.5,28,62.5,62.5s-28,62.5-62.5,62.5S92,123.7,92,89.2L92,89.2z M92,89.2" />
                        </g>
                    </svg>
                    <p class="pl-3 text-sm">Profile</p>
                </button>
            </router-link>

            <template v-if="currentUser.role_id == 2">
                <router-link to="/feature">
                    <button class="flex flex-row pt-4 pb-4 pl-5 focus:outline-none hover:text-gray-500"
                        @click="clearDropdown">
                        <!-- <img class="w-5 h-5 text-white fill-current " :src="profile" /> -->
                        <svg version="1.1" id="Layer_1" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                            style="enable-background:new 0 0 300 300;" xml:space="preserve">
                            <g>
                                <path class="st1" d="M279,191.6c-9.8-8.6-21.7-16.1-35.4-22.1c-5.8-2.6-12.7,0-15.3,5.9c-2.6,5.8,0,12.7,5.9,15.3
                                    c11.5,5.1,21.4,11.3,29.5,18.4c9.9,8.7,15.6,21.4,15.6,34.7v21.4c0,6.4-5.2,11.6-11.6,11.6H41.1c-6.4,0-11.6-5.2-11.6-11.6v-21.4
                                    c0-13.3,5.7-25.9,15.6-34.7c11.7-10.3,45.7-34.2,109.3-34.2c47.2,0,85.6-38.4,85.6-85.6S201.6,3.6,154.4,3.6S68.8,42,68.8,89.2
                                    c0,27.6,13.1,52.2,33.5,67.8C65.1,165.3,42,181,29.9,191.6c-14.9,13.1-23.5,32.1-23.5,52v21.4c0,19.1,15.6,34.7,34.7,34.7h226.7
                                    c19.1,0,34.7-15.6,34.7-34.7v-21.4C302.5,223.7,293.9,204.7,279,191.6L279,191.6z M92,89.2c0-34.4,28-62.5,62.5-62.5
                                    s62.5,28,62.5,62.5s-28,62.5-62.5,62.5S92,123.7,92,89.2L92,89.2z M92,89.2" />
                            </g>
                        </svg>
                        <p class="pl-3 text-sm">Features</p>
                    </button>
                </router-link>
            </template>

            <hr>


            <button @click="logout" class="flex flex-row py-4 pl-5 focus:outline-none hover:text-gray-500">
                <!-- <img class="w-5 h-5" :src="logoutimg" /> -->
                <svg version="1.1" id="Layer_1" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"
                    style="enable-background:new 0 0 300 300;" xml:space="preserve">
                    <g>
                        <path class="st1" d="M205.3,232c-6.5,0-11.7,5.2-11.7,11.7v32.8H26V23.4h167.6v32.8c0,6.5,5.2,11.7,11.7,11.7
                            c6.5,0,11.7-5.2,11.7-11.7V11.7C217,5.2,211.8,0,205.3,0h-191C7.8,0,2.6,5.2,2.6,11.7v276.6c0,6.5,5.2,11.7,11.7,11.7h191
                            c6.5,0,11.7-5.2,11.7-11.7v-44.5C217,237.3,211.8,232,205.3,232L205.3,232z M205.3,232" />
                        <path class="st1" d="M281.6,141.7l-31.5-31.5c-4.6-4.6-12-4.6-16.6,0c-4.6,4.6-4.6,12,0,16.6l11.5,11.5h-97.1
                            c-6.5,0-11.7,5.2-11.7,11.7c0,6.5,5.2,11.7,11.7,11.7H245l-11.5,11.5c-4.6,4.6-4.6,12,0,16.6c4.6,4.6,12,4.6,16.6,0l31.5-31.5l0,0
                            c2.4-2.4,3.3-5.1,3.4-8.3C285,146.8,283.6,143.8,281.6,141.7L281.6,141.7z M281.6,141.7" />
                    </g>
                </svg>
                <p class="pl-3 text-sm">Logout</p>
            </button>
        </div>
    </div>

</template>

<script>
export default {
    name: "DropdownMobile",

    computed: {

        currentUser() {
            return this.$store.getters.currentUser
        },
    },

    data: function () {

        return {

            showDropdown: 'true',

            login: {
                email: '',
                password: ''
            },
            error: null,
            errorM: null,

            title: '',
            show: 'true',
            showLogin: 'true',


        }
    },

    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },


        clearDropdown() {
            this.showDropdown = "true"
        },


        logout() {
            this.$store.commit('logout');
            this.showDropdown = "true";
            this.$router.push('/');

        },
    }

}
</script>

<style scoped>
.error-field {
    @apply .border .border-red-500 .border-dotted
}

.error {
    text-align: center;
    color: red;
}


.st0 {
    fill: #1F4490;
}

.st1 {
    fill: #EE266A;
}

.st2 {
    fill: none;
}


/* Report logo */
.streport0 {
    fill: #1F4490;
}

.streport1 {
    fill: #EE266A;
}

/* Report Completed Logo */

.stcomplete0 {
    fill: #EE266A;
}

.stcomplete1 {
    fill: #1F4490;
}

/* Unrefunded Logo */
.unrefunded0 {
    fill: #1F4490;
}

.unrefunded1 {
    fill: #EE266A;
}

/* Refunded Logo */
.refunded0 {
    fill: #EE266A;
}

.refunded1 {
    fill: #1F4490;
}

/* Fined Logo */
.fined0 {
    fill: #EE266A;
}

.fined1 {
    fill: #1F4490;
}







.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-4em);


}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease;
}

.faderouter-enter,
.faderouter-leave-to {
    opacity: 0;
    transform: translateX(4em);

}

.faderouter-enter-active,
.faderouter-leave-active {
    transition: all .1s ease-out;
}
</style>
