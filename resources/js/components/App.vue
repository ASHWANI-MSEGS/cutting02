<template>
    <div class="h-full lg:mx-auto max-w-screen">
        <!-- <div v-if="paymentModal10" @click.prevent="paymentModal20" class="fixed top-0 bottom-0 left-0 right-0 z-20 h-full bg-black opacity-75 shadow-4" ></div>
    -->

        <template v-if="!currentUser">
            <!-- Login Modals UnShowna -->
            <transition name="fade" mode="out-in">
                <div v-if="!showLogin" @click="clearLogin"
                    class="fixed top-0 bottom-0 left-0 right-0 z-20 h-full bg-black opacity-75 shadow-4"></div>
            </transition>

            <!-- Login Modals UnShowna Close -->
            <div class="w-screen">
                <!-- Home HeaderBar     -->
                <div ref="topPort"
                    class="flex items-center justify-between w-screen h-16 px-1 py-3 border-gray-300 lg:px-32 xl:px-64">
                    <router-link to="/" class="pt-6 pb-5 font-bold text-gray-500 uppercase text-md">
                        <span class="hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="230" height="20" viewBox="0 0 282 26.434">
                                <g id="Roadcutting" transform="translate(-17.7 -16.9)">
                                    <path id="Path_17" data-name="Path 17"
                                        d="M28.763,36.832H24.881v6.754H17.7V18.2H29.306a14.8,14.8,0,0,1,5.978,1.126,9.074,9.074,0,0,1,3.92,3.261,8.756,8.756,0,0,1,1.359,4.968,8.917,8.917,0,0,1-1.281,4.813,8.82,8.82,0,0,1-3.688,3.222l5.473,7.957H33.382Zm3.416-11.994a4.9,4.9,0,0,0-3.338-.97H24.881v7.414h4a4.9,4.9,0,0,0,3.338-.97,3.428,3.428,0,0,0,1.126-2.756A3.307,3.307,0,0,0,32.178,24.838Z"
                                        transform="translate(0 -0.795)" fill="#1f4490" />
                                    <path id="Path_18" data-name="Path 18"
                                        d="M90.27,41.587A13.2,13.2,0,0,1,85.224,23.3a12.538,12.538,0,0,1,5.046-4.7,16.114,16.114,0,0,1,14.44,0,13.2,13.2,0,0,1,5.046,18.282,12.538,12.538,0,0,1-5.046,4.7,16.114,16.114,0,0,1-14.44,0Zm10.713-5.163a6.847,6.847,0,0,0,2.484-2.562,7.553,7.553,0,0,0,.893-3.8,8.091,8.091,0,0,0-.893-3.8,6.847,6.847,0,0,0-2.484-2.562A6.7,6.7,0,0,0,97.49,22.8,7.085,7.085,0,0,0,94,23.693a6.847,6.847,0,0,0-2.484,2.562,7.553,7.553,0,0,0-.893,3.8,8.091,8.091,0,0,0,.893,3.8A6.847,6.847,0,0,0,94,36.425a6.7,6.7,0,0,0,3.493.893A6.347,6.347,0,0,0,100.984,36.425Z"
                                        transform="translate(-40.198 0)" fill="#1f4490" />
                                    <path id="Path_19" data-name="Path 19"
                                        d="M175.282,18.2h-7.065L157,43.586h7.065L170.2,28.913h0l1.475-3.688,1.941,4.852,5.551,13.508H186.5Z"
                                        transform="translate(-85.229 -0.795)" fill="#1f4490" />
                                    <path id="Path_20" data-name="Path 20"
                                        d="M238.3,18.2h11.994a16.778,16.778,0,0,1,7.414,1.553,12.077,12.077,0,0,1,5.007,4.425,12.314,12.314,0,0,1,1.786,6.715,12.314,12.314,0,0,1-1.786,6.715,11.843,11.843,0,0,1-5.007,4.425,16.661,16.661,0,0,1-7.414,1.553H238.3V18.2Zm11.684,19.641a7.334,7.334,0,0,0,5.24-1.863,6.7,6.7,0,0,0,1.98-5.124,6.7,6.7,0,0,0-1.98-5.124,7.334,7.334,0,0,0-5.24-1.863h-4.542V37.8h4.542Z"
                                        transform="translate(-134.971 -0.795)" fill="#1f4490" />
                                    <path id="Path_21" data-name="Path 21"
                                        d="M332.323,18.142a15.537,15.537,0,0,0-6.288-1.242,15.205,15.205,0,0,0-7.181,1.708c-.039,0-.078.039-.116.039l17.584,2.329A11.879,11.879,0,0,0,332.323,18.142Zm.078,16.225a7.533,7.533,0,0,1-5.978,2.989,7.732,7.732,0,0,1-3.688-.893,6.312,6.312,0,0,1-2.484-2.562,7.979,7.979,0,0,1-.893-3.8,8.09,8.09,0,0,1,.893-3.8,6.568,6.568,0,0,1,2.484-2.562,7.211,7.211,0,0,1,3.688-.893,7.533,7.533,0,0,1,5.978,2.989l3.61-3.261-19.253-2.562a12.174,12.174,0,0,0-2.834,3.3,13.031,13.031,0,0,0-1.824,6.832,12.774,12.774,0,0,0,1.824,6.832,12.583,12.583,0,0,0,4.968,4.7,15.074,15.074,0,0,0,7.181,1.669,15.537,15.537,0,0,0,6.288-1.242,11.969,11.969,0,0,0,4.619-3.532Z"
                                        transform="translate(-180.125)" fill="#1f4490" />
                                    <path id="Path_22" data-name="Path 22"
                                        d="M383,18.2v4.037l7.181.97V18.2Zm16.807,7.88v5.939c0,4.076-1.591,6.094-4.774,6.094-3.222,0-4.813-2.018-4.813-6.094V24.8L383,23.867V32.29q0,5.648,3.144,8.734c2.1,2.057,5.007,3.066,8.772,3.066s6.715-1.009,8.811-3.066,3.144-4.968,3.144-8.734V27.05Zm0-7.88v6.288l7.065.932V18.2Z"
                                        transform="translate(-223.504 -0.795)" fill="#1f4490" />
                                    <path id="Path_23" data-name="Path 23"
                                        d="M449.8,18.2v5.706h7.8V26.74l7.181.97v-3.8h7.763V18.2Zm7.8,10.17V43.586h7.181V29.3Z"
                                        transform="translate(-264.375 -0.795)" fill="#1f4490" />
                                    <path id="Path_24" data-name="Path 24"
                                        d="M510.1,18.2v5.706h7.8v5.978l7.181.97V23.906h7.763V18.2Zm7.763,13.275V43.586h7.181V32.446Z"
                                        transform="translate(-301.269 -0.795)" fill="#1f4490" />
                                    <path id="Path_25" data-name="Path 25"
                                        d="M575.5,33.843v9.743h7.181V34.813Zm0-15.643V32.213l7.181.97V18.2Z"
                                        transform="translate(-341.283 -0.795)" fill="#1f4490" />
                                    <path id="Path_26" data-name="Path 26"
                                        d="M624.318,18.2V31.708L613.1,18.2h-5.9V33.843l7.026.932V30.039l4.425,5.318,12.693,1.708V18.2Zm-4.153,19.02,5.279,6.366h5.9V38.695ZM607.2,35.473v8.113h7.026V36.4Z"
                                        transform="translate(-360.678 -0.795)" fill="#1f4490" />
                                    <path id="Path_27" data-name="Path 27"
                                        d="M682.361,38.87a12.558,12.558,0,0,0,3.571,2.756,15.074,15.074,0,0,0,7.181,1.669,20.413,20.413,0,0,0,5.667-.815,15.169,15.169,0,0,0,2.717-1.048ZM697.421,36.5a9.407,9.407,0,0,1-3.882.815,7.377,7.377,0,0,1-3.726-.932,6.408,6.408,0,0,1-2.523-2.562,7.933,7.933,0,0,1-.893-3.765,6.809,6.809,0,0,1,7.22-7.259,7.987,7.987,0,0,1,6.172,2.834l4.58-4.115a12.7,12.7,0,0,0-4.736-3.416,15.912,15.912,0,0,0-6.366-1.2,15.566,15.566,0,0,0-7.3,1.708,12.538,12.538,0,0,0-5.046,4.7,13.032,13.032,0,0,0-1.824,6.832,12.775,12.775,0,0,0,1.824,6.832c.039.039.039.078.078.155l22.746,3.028h.039v-10.6H697.46V36.5Z"
                                        transform="translate(-404.669)" fill="#1f4490" />
                                    <path id="Path_28" data-name="Path 28" d="M194.811,45.564H194.5l.155-1.164h.039Z"
                                        transform="translate(-108.173 -16.826)" fill="#ee266a" />
                                    <path id="Path_29" data-name="Path 29" d="M194.4,53.686H193l.272-1.786h.854Z"
                                        transform="translate(-107.255 -21.414)" fill="#ee266a" />
                                    <path id="Path_30" data-name="Path 30" d="M193.984,62.747H191.5L191.772,61h1.98Z"
                                        transform="translate(-106.337 -26.982)" fill="#ee266a" />
                                    <path id="Path_31" data-name="Path 31" d="M193.61,71.747H190L190.272,70h3.066Z"
                                        transform="translate(-105.42 -32.489)" fill="#ee266a" />
                                    <path id="Path_32" data-name="Path 32" d="M193.136,80.847H188.4l.311-1.747h4.153Z"
                                        transform="translate(-104.441 -38.056)" fill="#ee266a" />
                                </g>
                            </svg>
                        </span>
                        <span class="block ml-1 md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="27" height="27" viewBox="0 0 27 27">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_177" data-name="Rectangle 177" width="27" height="27"
                                            transform="translate(15 34)" fill="#fff" stroke="#707070"
                                            stroke-width="1" />
                                    </clipPath>
                                </defs>
                                <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(-15 -34)"
                                    clip-path="url(#clip-path)">
                                    <g id="Roadcutting_icon" data-name="Roadcutting icon"
                                        transform="translate(15 35.12)">
                                        <path id="Path_100" data-name="Path 100"
                                            d="M16.722.765H10.26L0,23.985H6.48l5.607-13.4v-.009l1.35-3.366,1.782,4.428L20.3,23.994H27Z"
                                            fill="#1f4490" />
                                        <path id="Path_101" data-name="Path 101" d="M13.6,11.142H13.32l.135-1.08h.054Z"
                                            fill="#ee266a" />
                                        <path id="Path_102" data-name="Path 102"
                                            d="M14.067,14.355H12.789l.261-1.611h.783Z" fill="#ee266a" />
                                        <path id="Path_103" data-name="Path 103"
                                            d="M14.535,17.568H12.249l.27-1.611H14.3Z" fill="#ee266a" />
                                        <path id="Path_104" data-name="Path 104" d="M15.012,20.772h-3.3l.27-1.6h2.79Z"
                                            fill="#ee266a" />
                                        <path id="Path_105" data-name="Path 105" d="M15.48,23.985H11.169l.27-1.6h3.807Z"
                                            fill="#ee266a" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </router-link>
                    <button @click="toggleLogin"
                        class="flex items-center px-5 py-2 mr-1 text-blue-700 border border-red-200 rounded-lg md:mr-0 hover:text-blue-500 focus:outline-none">
                        Login
                    </button>
                </div>
                <!-- Home HeaderBar Closed -->

                <!-- Login Modals -->
                <transition name="fade" mode="out-in">
                    <div v-if="!showLogin"
                        class="absolute left-0 right-0 z-40 w-2/3 ml-auto mr-auto bg-white rounded-lg shadow top-2 h-84 md:h-84 xl:h-84 md:w-2/3 lg:w-1/3 xl:w-1/4">
                        <br>
                        <form @submit.prevent="authenticate" class="">
                            <!-- Login Close Button -->
                            <div class="absolute top-0 right-0">
                                <button @click="clearLogin" class="mt-6 mr-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.877" height="11.877"
                                        viewBox="0 0 11.877 11.877">
                                        <g id="Group_9" data-name="Group 9" transform="translate(-1238.562 -230.423)">
                                            <path id="Path_35" data-name="Path 35" d="M3285,232l8.847,8.847"
                                                transform="translate(-2045 0.015)" fill="none" stroke="#e37198"
                                                stroke-linecap="round" stroke-width="2" />
                                            <path id="Path_36" data-name="Path 36" d="M0,0,8.847,8.847"
                                                transform="matrix(0.017, 1, -1, 0.017, 1248.846, 231.862)" fill="none"
                                                stroke="#e37198" stroke-linecap="round" stroke-width="2" />
                                        </g>
                                    </svg>
                                </button>
                            </div>

                            <!-- Login Close Button Close -->
                            <div class="flex justify-center text-xl font-bold text-blue-600 ">
                                Login
                            </div>

                            <div class="relative mx-10 mt-6 mb-3 border rounded-lg md:mt-10">
                                <label class="absolute px-4 pt-3 pb-2 text-xs font-bold text-blue-500 ">User
                                    Email</label>
                                <input type="text" v-model="login.email"
                                    class="w-full px-4 pt-8 pb-3 text-xs text-gray-900 rounded-lg focus:outline-none "
                                    placeholder="Enter User Email">
                            </div>

                            <div class="relative mx-10 mb-8 border rounded-lg md:mb-8 lg:mb-8 xl:mx-13">
                                <label class="absolute px-4 pt-3 pb-2 text-xs font-bold text-blue-500 ">Password</label>
                                <input @keyup.enter="authenticate" type="password" v-model="login.password"
                                    class="w-full px-4 pt-8 pb-3 text-xs text-gray-900 rounded-lg focus:outline-none "
                                    placeholder="Enter Password">
                            </div>

                            <div class="mb-0 md:mb-8">
                                <div class="flex justify-center ">
                                    <button type="button" @click="authenticate"
                                        class="px-8 py-2 text-sm text-white border rounded-lg mt-9 bg-buttonpink hover:bg-red-500 focus:outline-none">
                                        Login</button>
                                </div>
                                <div class="py-1 row" v-if="authError">
                                    <p class="error">
                                        {{ errorM }}
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </transition>
                <!-- Close Login Modals -->
                <router-view></router-view>

                <!-- Footer Element -->
                <div class="flex flex-col items-center justify-center w-screen h-24 bg-white ">

                    <div class="flex flex-row items-center justify-center mb-2">
                        <div class="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="1" viewBox="0 0 127.791 1">
                                <line id="Line_1" data-name="Line 1" x1="127.791" transform="translate(0 0.5)"
                                    fill="none" stroke="#5d5b5b" stroke-width="1" />
                            </svg>
                        </div>
                        <div class="">
                            <svg width="30" height="30" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.982 447.982"
                                style="enable-background:new 0 0 447.982 447.982;" xml:space="preserve">
                                <g>
                                    <path
                                        d="M382.398,65.632c-0.009-0.009-0.017-0.02-0.026-0.029c-0.01-0.01-0.021-0.018-0.031-0.029
                                C340.061,23.313,283.864,0.03,224.086,0.005c-0.034,0-0.066-0.005-0.1-0.005c-0.035,0-0.069,0.005-0.104,0.005
                                c-59.785,0.028-115.987,23.32-158.266,65.594c-0.002,0.002-0.003,0.003-0.005,0.005c-0.001,0.001-0.002,0.002-0.003,0.003
                                c0,0-0.001,0.001-0.002,0.002C23.301,107.915,0.002,164.163,0.002,223.993s23.299,116.078,65.604,158.384
                                c42.307,42.306,98.555,65.605,158.385,65.605c59.829,0,116.078-23.299,158.384-65.605c42.307-42.306,65.605-98.555,65.605-158.384
                                C447.98,164.174,424.69,107.936,382.398,65.632z M429.393,272.298L282.926,233.05c0.13-0.847,0.233-1.702,0.326-2.56h151.618
                                C434.435,244.828,432.565,258.81,429.393,272.298z M409.843,323.789l-131.291-75.796c0.348-0.788,0.677-1.586,0.992-2.391
                                l146.476,39.251C421.913,298.458,416.474,311.489,409.843,323.789z M377.63,368.441L270.471,261.273
                                c0.535-0.666,1.059-1.341,1.566-2.029l131.281,75.79C395.868,347.02,387.254,358.209,377.63,368.441z M335.033,403.319
                                L259.24,272.04c0.692-0.509,1.371-1.036,2.04-1.574l107.157,107.167C358.207,387.257,347.019,395.87,335.033,403.319z
                                M284.849,426.021L245.6,279.545c0.805-0.314,1.602-0.643,2.39-0.991l75.8,131.289
                                C311.488,416.475,298.455,421.915,284.849,426.021z M124.193,409.844l75.8-131.289c0.785,0.346,1.579,0.674,2.38,0.987
                                l-39.249,146.477C149.521,421.913,136.492,416.474,124.193,409.844z M79.545,377.634l107.157-107.167
                                c0.669,0.538,1.348,1.065,2.04,1.574L112.95,403.319C100.964,395.87,89.776,387.257,79.545,377.634z M44.664,335.034l131.281-75.79
                                c0.507,0.689,1.031,1.364,1.566,2.03L70.353,368.441C60.728,358.21,52.114,347.021,44.664,335.034z M21.963,284.853l146.476-39.251
                                c0.314,0.806,0.644,1.603,0.992,2.391L38.14,323.789C31.508,311.489,26.069,298.458,21.963,284.853z M18.59,175.682l146.466,39.248
                                c-0.13,0.847-0.233,1.702-0.326,2.56H13.111C13.548,203.152,15.418,189.17,18.59,175.682z M38.138,124.2l131.29,75.8
                                c-0.346,0.784-0.673,1.577-0.986,2.378L21.965,163.127C26.07,149.525,31.508,136.497,38.138,124.2z M70.356,79.542l107.158,107.167
                                c-0.538,0.669-1.064,1.347-1.573,2.04L44.662,112.955C52.113,100.966,60.729,89.775,70.356,79.542z M112.952,44.665l75.793,131.278
                                c-0.692,0.509-1.37,1.035-2.039,1.573L79.549,70.349C89.779,60.726,100.967,52.114,112.952,44.665z M163.126,21.967l39.249,146.477
                                c-0.801,0.313-1.595,0.64-2.379,0.987l-75.8-131.289C136.494,31.511,149.523,26.073,163.126,21.967z M323.787,38.141l-75.8,131.289
                                c-0.787-0.348-1.584-0.676-2.389-0.99l39.249-146.476C298.453,26.07,311.486,31.509,323.787,38.141z M368.434,70.35
                                L261.276,177.517c-0.669-0.538-1.347-1.064-2.039-1.573l75.793-131.278C347.016,52.114,358.204,60.727,368.434,70.35z
                                M403.32,112.956l-131.278,75.793c-0.509-0.692-1.036-1.37-1.573-2.039L377.627,79.542
                                C387.254,89.775,395.869,100.966,403.32,112.956z M426.017,163.127l-146.477,39.251c-0.313-0.801-0.64-1.594-0.986-2.378
                                l131.29-75.8C416.474,136.498,421.912,149.526,426.017,163.127z M224.052,270.613c-0.022,0-0.044-0.003-0.066-0.003
                                c-0.021,0-0.042,0.003-0.063,0.003c-25.676-0.037-46.554-20.935-46.554-46.62c0-25.708,20.915-46.622,46.622-46.622
                                s46.622,20.915,46.622,46.622C270.613,249.68,249.731,270.58,224.052,270.613z M233.047,165.058
                                c-0.847-0.13-1.702-0.233-2.561-0.326V13.113c14.337,0.436,28.319,2.306,41.807,5.477L233.047,165.058z M217.486,164.732
                                c-0.858,0.094-1.713,0.197-2.56,0.326L175.68,18.592c13.487-3.172,27.469-5.042,41.806-5.479V164.732z M13.111,230.49h151.618
                                c0.094,0.858,0.197,1.713,0.326,2.56L18.589,272.299C15.417,258.811,13.547,244.828,13.111,230.49z M214.924,282.927
                                c0.847,0.13,1.703,0.233,2.562,0.326v151.619c-14.338-0.437-28.32-2.307-41.808-5.479L214.924,282.927z M230.486,283.255
                                c0.859-0.094,1.715-0.197,2.562-0.327l39.246,146.467c-13.488,3.171-27.47,5.041-41.808,5.477V283.255z M283.252,217.49
                                c-0.094-0.858-0.197-1.713-0.326-2.56l146.466-39.248c3.172,13.488,5.042,27.47,5.479,41.808H283.252z" />
                                    <path d="M223.991,188.649c-19.488,0-35.344,15.855-35.344,35.344s15.855,35.344,35.344,35.344s35.344-15.855,35.344-35.344
                                S243.479,188.649,223.991,188.649z M223.991,246.337c-12.32,0-22.344-10.023-22.344-22.344s10.023-22.344,22.344-22.344
                                s22.344,10.023,22.344,22.344S236.311,246.337,223.991,246.337z" />
                                </g>
                            </svg>
                        </div>
                        <div class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="1" viewBox="0 0 127.791 1">
                                <line id="Line_1" data-name="Line 1" x1="127.791" transform="translate(0 0.5)"
                                    fill="none" stroke="#5d5b5b" stroke-width="1" />
                            </svg>
                        </div>
                    </div>

                    <div class="hidden md:block">
                        <center>
                            <p class="text-xs font-hairline text-gray-900">Crafted with care by <a href="#"
                                    class="text-red-600">Mizoram State e-Governance Society (MSeGS)</a>, hosted by
                                department of ICT, Government of Mizoram</p>
                        </center>
                    </div>
                    <div class="block md:hidden">
                        <center>
                            <p class="mx-1 text-xs font-hairline text-gray-900">Crafted with care by <a href="#"
                                    class="text-red-600">Mizoram State e-Governance Society (MSeGS)</a>,</p>
                            <p class="mx-1 text-xs font-hairline text-gray-900">hosted by department of ICT, Government
                                of Mizoram</p>
                        </center>
                    </div>
                </div>
                <!-- End of Footer Element -->
            </div>
        </template>

        <template v-if="currentUser">
            <template v-if="!$route.meta.showNavbar">
                <!-- Mobile view a dropdown menu Unshow na Screen dum -->
                <transition name="fade" mode="out-in">
                    <div v-if="!show" @click="show = !show"
                        class="fixed top-0 bottom-0 left-0 right-0 z-20 h-full bg-black opacity-75 shadow-4"></div>
                </transition>
                <!-- Mobile view a dropdown menu Unshow na Screen dum CLOSED -->

                <div class="relative flex max-w-screen">
                    <!-- Dropdown Clear -->
                    <div v-show="!showDropdown" @click="clearDropdown"
                        class="absolute top-0 bottom-0 left-0 right-0 z-50"></div>
                    <!-- Dropdown Clear Closed -->

                    <div class="hidden pl-1 bg-white md:block md:w-1/4 lg:w-1/5 ">
                        <Sidebar />
                    </div>


                    <div class="flex flex-col flex-1">
                        <!-- Header  Bar -->
                        <div class="flex items-center justify-between h-16 bg-white max-w-screen">


                            <div class="relative md:hidden">
                                <div class="block px-4 md:hidden md:px-0">
                                    <button @click="toggleSidebarMobile"
                                        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-blue-200 hover:border-blue-200">
                                        <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Menu</title>
                                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                        </svg>
                                    </button>
                                </div>
                                <!-- Menu Items for mobile hidden at large screen -->
                                <SidebarMobile />
                                <!-- Menu item for mobile hidden for large screen CLOSED -->


                            </div>


                            <div class="px-4 pt-6 pb-5 font-bold text-gray-500 uppercase text-md">
                                {{ title }}
                            </div>

                            <div class="flex flex-row items-center mr-6">
                                <span class="hidden md:block">
                                    <p class="px-4">Hi there, {{ currentUser.name }}</p>
                                </span>
                                <DropdownUser />
                            </div>

                        </div>
                        <!-- Header Bar CLOSED -->

                        <!-- ROUTER-VIEW  or BODY-->

                        <div class="flex h-auto ">
                            <transition name="faderouter" mode="out-in">
                                <router-view
                                    class="flex-grow min-h-screen p-6 overflow-y-hidden bg-bgcontent "></router-view>
                            </transition>
                        </div>

                        <!-- ROUTER-VIEW or BODY CLOSED -->


                        <!-- Footer Element -->
                        <div class="flex flex-col items-center justify-center h-24 bg-white ">

                            <div class="flex flex-row items-center justify-center mb-2">
                                <div class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="1"
                                        viewBox="0 0 127.791 1">
                                        <line id="Line_1" data-name="Line 1" x1="127.791" transform="translate(0 0.5)"
                                            fill="none" stroke="#5d5b5b" stroke-width="1" />
                                    </svg>
                                </div>
                                <div class="">
                                    <svg width="30" height="30" version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 447.982 447.982"
                                        style="enable-background:new 0 0 447.982 447.982;" xml:space="preserve">
                                        <g>
                                            <path
                                                d="M382.398,65.632c-0.009-0.009-0.017-0.02-0.026-0.029c-0.01-0.01-0.021-0.018-0.031-0.029
                                    C340.061,23.313,283.864,0.03,224.086,0.005c-0.034,0-0.066-0.005-0.1-0.005c-0.035,0-0.069,0.005-0.104,0.005
                                    c-59.785,0.028-115.987,23.32-158.266,65.594c-0.002,0.002-0.003,0.003-0.005,0.005c-0.001,0.001-0.002,0.002-0.003,0.003
                                    c0,0-0.001,0.001-0.002,0.002C23.301,107.915,0.002,164.163,0.002,223.993s23.299,116.078,65.604,158.384
                                    c42.307,42.306,98.555,65.605,158.385,65.605c59.829,0,116.078-23.299,158.384-65.605c42.307-42.306,65.605-98.555,65.605-158.384
                                    C447.98,164.174,424.69,107.936,382.398,65.632z M429.393,272.298L282.926,233.05c0.13-0.847,0.233-1.702,0.326-2.56h151.618
                                    C434.435,244.828,432.565,258.81,429.393,272.298z M409.843,323.789l-131.291-75.796c0.348-0.788,0.677-1.586,0.992-2.391
                                    l146.476,39.251C421.913,298.458,416.474,311.489,409.843,323.789z M377.63,368.441L270.471,261.273
                                    c0.535-0.666,1.059-1.341,1.566-2.029l131.281,75.79C395.868,347.02,387.254,358.209,377.63,368.441z M335.033,403.319
                                    L259.24,272.04c0.692-0.509,1.371-1.036,2.04-1.574l107.157,107.167C358.207,387.257,347.019,395.87,335.033,403.319z
                                    M284.849,426.021L245.6,279.545c0.805-0.314,1.602-0.643,2.39-0.991l75.8,131.289
                                    C311.488,416.475,298.455,421.915,284.849,426.021z M124.193,409.844l75.8-131.289c0.785,0.346,1.579,0.674,2.38,0.987
                                    l-39.249,146.477C149.521,421.913,136.492,416.474,124.193,409.844z M79.545,377.634l107.157-107.167
                                    c0.669,0.538,1.348,1.065,2.04,1.574L112.95,403.319C100.964,395.87,89.776,387.257,79.545,377.634z M44.664,335.034l131.281-75.79
                                    c0.507,0.689,1.031,1.364,1.566,2.03L70.353,368.441C60.728,358.21,52.114,347.021,44.664,335.034z M21.963,284.853l146.476-39.251
                                    c0.314,0.806,0.644,1.603,0.992,2.391L38.14,323.789C31.508,311.489,26.069,298.458,21.963,284.853z M18.59,175.682l146.466,39.248
                                    c-0.13,0.847-0.233,1.702-0.326,2.56H13.111C13.548,203.152,15.418,189.17,18.59,175.682z M38.138,124.2l131.29,75.8
                                    c-0.346,0.784-0.673,1.577-0.986,2.378L21.965,163.127C26.07,149.525,31.508,136.497,38.138,124.2z M70.356,79.542l107.158,107.167
                                    c-0.538,0.669-1.064,1.347-1.573,2.04L44.662,112.955C52.113,100.966,60.729,89.775,70.356,79.542z M112.952,44.665l75.793,131.278
                                    c-0.692,0.509-1.37,1.035-2.039,1.573L79.549,70.349C89.779,60.726,100.967,52.114,112.952,44.665z M163.126,21.967l39.249,146.477
                                    c-0.801,0.313-1.595,0.64-2.379,0.987l-75.8-131.289C136.494,31.511,149.523,26.073,163.126,21.967z M323.787,38.141l-75.8,131.289
                                    c-0.787-0.348-1.584-0.676-2.389-0.99l39.249-146.476C298.453,26.07,311.486,31.509,323.787,38.141z M368.434,70.35
                                    L261.276,177.517c-0.669-0.538-1.347-1.064-2.039-1.573l75.793-131.278C347.016,52.114,358.204,60.727,368.434,70.35z
                                    M403.32,112.956l-131.278,75.793c-0.509-0.692-1.036-1.37-1.573-2.039L377.627,79.542
                                    C387.254,89.775,395.869,100.966,403.32,112.956z M426.017,163.127l-146.477,39.251c-0.313-0.801-0.64-1.594-0.986-2.378
                                    l131.29-75.8C416.474,136.498,421.912,149.526,426.017,163.127z M224.052,270.613c-0.022,0-0.044-0.003-0.066-0.003
                                    c-0.021,0-0.042,0.003-0.063,0.003c-25.676-0.037-46.554-20.935-46.554-46.62c0-25.708,20.915-46.622,46.622-46.622
                                    s46.622,20.915,46.622,46.622C270.613,249.68,249.731,270.58,224.052,270.613z M233.047,165.058
                                    c-0.847-0.13-1.702-0.233-2.561-0.326V13.113c14.337,0.436,28.319,2.306,41.807,5.477L233.047,165.058z M217.486,164.732
                                    c-0.858,0.094-1.713,0.197-2.56,0.326L175.68,18.592c13.487-3.172,27.469-5.042,41.806-5.479V164.732z M13.111,230.49h151.618
                                    c0.094,0.858,0.197,1.713,0.326,2.56L18.589,272.299C15.417,258.811,13.547,244.828,13.111,230.49z M214.924,282.927
                                    c0.847,0.13,1.703,0.233,2.562,0.326v151.619c-14.338-0.437-28.32-2.307-41.808-5.479L214.924,282.927z M230.486,283.255
                                    c0.859-0.094,1.715-0.197,2.562-0.327l39.246,146.467c-13.488,3.171-27.47,5.041-41.808,5.477V283.255z M283.252,217.49
                                    c-0.094-0.858-0.197-1.713-0.326-2.56l146.466-39.248c3.172,13.488,5.042,27.47,5.479,41.808H283.252z" />
                                            <path d="M223.991,188.649c-19.488,0-35.344,15.855-35.344,35.344s15.855,35.344,35.344,35.344s35.344-15.855,35.344-35.344
                                    S243.479,188.649,223.991,188.649z M223.991,246.337c-12.32,0-22.344-10.023-22.344-22.344s10.023-22.344,22.344-22.344
                                    s22.344,10.023,22.344,22.344S236.311,246.337,223.991,246.337z" />
                                        </g>
                                    </svg>
                                </div>

                                <div class="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="1"
                                        viewBox="0 0 127.791 1">
                                        <line id="Line_1" data-name="Line 1" x1="127.791" transform="translate(0 0.5)"
                                            fill="none" stroke="#5d5b5b" stroke-width="1" />
                                    </svg>
                                </div>
                            </div>


                            <div class="hidden md:block">
                                <center>
                                    <p class="text-xs font-hairline text-gray-900">Crafted with care by <a href="#"
                                            class="text-red-600">Mizoram State e-Governance Society (MSeGS)</a>, hosted
                                        by department of ICT, Government of Mizoram</p>
                                </center>
                            </div>
                            <div class="block md:hidden">
                                <center>
                                    <p class="mx-1 text-xs font-hairline text-gray-900">Crafted with care by <a href="#"
                                            class="text-red-600">Mizoram State e-Governance Society (MSeGS)</a>,</p>
                                    <p class="mx-1 text-xs font-hairline text-gray-900">hosted by department of ICT,
                                        Government of Mizoram</p>
                                </center>
                            </div>

                        </div>
                        <!-- End of Footer Element -->
                    </div>
                </div>
            </template>
        </template>

    </div>

</template>

<script>

import { login } from '../helpers/auth';
export default {
    name: "App",

    // props: [
    //     'user'
    // ],

    components: {
        UserCircle: () => import('./UserCircle'),
        SearchBar: () => import('../components/SearchBar'),
        Sidebar: () => import('./Sidebar.vue'),
        SidebarMobile: () => import('./SidebarMobile.vue'),
        DropdownUser: () => import('./DropdownUser.vue'),


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
            accountStatus: null


        }
    },



    methods: {



        paymentModal20() {
            this.$store.dispatch("paymentModal3");
        },

        // Login Methods ho

        toggleLogin() {
            this.showLogin = !this.showLogin;
        },

        clearLogin() {

            this.showLogin = true;
            this.errorM = null;
            this.login = {};

        },
        checkUserAccount() {
            return new Promise((resolve, reject) => {
                axios.get('/api/checkIfUserDisabled/' + this.login.email)
                    .then(response => {
                        console.log(response.data.status, "checking the status");
                        this.accountStatus = response.data.status; 
                        resolve(); // Resolve the promise after updating accountStatus
                    })
                    .catch(error => reject(error));
            });
        },
        authenticate() {
            this.checkUserAccount()
                .then(() => {
                    // console.log(this.accountStatus, "let me see");
                    if (!this.accountStatus) {
                        this.$store.dispatch('login');
                        login(this.$data.login)
                            .then((res) => {
                                this.$store.commit("loginSuccess", res);
                                this.$router.push({ path: '/home' });
                            })
                            .catch((error) => {
                                this.$store.commit("loginFailed", { error });
                            });
                    } else {
                        alert("Admin has disabled this account.");
                    }
                })
                .catch(error => console.log(error))
        },

        // Login Methods Closed

        logout() {
            this.$store.commit('logout');
            this.showDropdown = "true";
            this.$router.push('/');

        },

        toggleDropdown() {
            this.showDropdown = !this.showDropdown
        },


        clearDropdown() {
            this.showDropdown = "true"
        },

        toggleSidebarMobile: function () {

            this.$store.dispatch('sidebarMobileToggel');

        },


    },

    computed: {


        currentUser() {
            return this.$store.getters.currentUser
        },

        notAdmin() {
            if (this.$store.getters.currentUser === null) { return true }
            else if (this.$store.getters.currentUser.role_id == 3) { return true }
            else if (this.$store.getters.currentUser.role_id == 1) { return false }
            else if (this.$store.getters.currentUser.role_id == 2) { return false }
        },

        authError() {
            if (this.$store.getters.authError) {
                this.errorM = this.$store.getters.authError;
                return true;
            }

            else return false
        },

    },



    created() {

        this.title = this.$route.meta.title;
    },

    watch: {

        $route(to, from) {
            this.title = to.meta.title;
        },
        title() {
            document.title = this.title + '| PWD Road Cutting'
        }
    },

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
