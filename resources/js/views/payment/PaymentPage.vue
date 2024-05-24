<template>
  <div>
    <!-- Payment Modal Black Screen Open -->
    <div v-if="payModal" @click.prevent="paymentModal" class="fixed top-0 bottom-0 left-0 right-0 z-20 h-full bg-black opacity-75 shadow-4" ></div>
    <!-- Payment Modal Black Screen Closed   -->

    <div class="flex justify-center">
      <div class="flex flex-col md:mt-6 md:ml-6 sm:w-full lg:w-1/2">

        <div class="flex flex-row items-center justify-between h-24 mt-3 bg-white border-b-4 border-dashed rounded-t-lg rounded-b-lg shadow">
          <div class="flex flex-col ml-8">
              <p class="text-sm font-light">Memo No</p>
              <p class="text-lg font-medium">{{ form.memo }}</p>
          </div>
          <button class="px-4 py-1 mr-1 text-white rounded-lg hover:bg-gray-300" @click.prevent="printme">
              <svg height="30pt" viewBox="-27 -67 859.31017 859" width="30pt" xmlns="http://www.w3.org/2000/svg"><path d="m738.554688 628.5h-107.414063c-7.421875 0-13.429687-6.003906-13.429687-13.425781s6.007812-13.425781 13.429687-13.425781h107.414063c22.207031 0 40.277343-18.066407 40.277343-40.28125v-322.242188c0-22.207031-18.066406-40.277344-40.277343-40.277344h-671.335938c-22.210938 0-40.28125 18.070313-40.28125 40.277344v322.242188c0 22.214843 18.066406 40.28125 40.28125 40.28125h107.410156c7.417969 0 13.429688 6.003906 13.429688 13.425781s-6.011719 13.425781-13.429688 13.425781h-107.410156c-37.019531 0-67.1367188-30.117188-67.1367188-67.132812v-322.242188c0-37.007812 30.1171878-67.132812 67.1367188-67.132812h671.335938c37.015624 0 67.132812 30.125 67.132812 67.132812v322.242188c0 37.015624-30.117188 67.132812-67.132812 67.132812zm0 0"/><path d="m644.566406 198.847656h-483.363281v-201.402344h483.363281zm-456.507812-26.855468h429.652344v-147.691407h-429.652344zm0 0"/><path d="m644.566406 722.488281h-483.363281v-322.242187h483.363281zm-456.507812-26.851562h429.652344v-268.535157h-429.652344zm0 0"/><path d="m671.417969 427.101562h-537.066407c-7.417968 0-13.429687-6.007812-13.429687-13.425781 0-7.421875 6.011719-13.429687 13.429687-13.429687h537.066407c7.421875 0 13.429687 6.007812 13.429687 13.429687 0 7.425781-6.007812 13.425781-13.429687 13.425781zm0 0"/><path d="m564.003906 494.234375h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421875 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007813 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 547.941406h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425781 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425781-13.429688 13.425781zm0 0"/><path d="m564.003906 601.648438h-322.238281c-7.417969 0-13.429687-6-13.429687-13.425782 0-7.421875 6.011718-13.429687 13.429687-13.429687h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429687 0 7.417969-6.007813 13.425782-13.429688 13.425782zm0 0"/><path d="m564.003906 655.355469h-322.238281c-7.417969 0-13.429687-6.007813-13.429687-13.425781 0-7.421876 6.011718-13.429688 13.429687-13.429688h322.238281c7.421875 0 13.429688 6.007812 13.429688 13.429688 0 7.417968-6.007813 13.425781-13.429688 13.425781zm0 0"/></svg>
          </button>
        </div>


        <div class="h-auto py-3 bg-white border-gray-200 rounded-t-lg rounded-b-lg shadow">
          <div class="flex justify-start py-2 pl-2 ml-0 md:ml-8">
            <div class="grid grid-cols-2 gap-1 mx-1 md:gap-2 md:mx-4 lg:ml-8">
              <p class="py-1"><b>Paytm leh UPI dang i hman chuan payment zawhah hemi browser-ah hian rawn let leh ang che</b></p>
              <br>
              <p class="py-1"><b>Applicant Details</b></p>
              <p></p>
              <p class="py-1">Name</p>
              <p class="py-1">: {{form.name}}</p>
              <p class="py-1">Email ID</p>
              <p class="py-1">: {{form.email}}</p>
              <p class="py-1">Phone Number</p>
              <p class="py-1">: {{form.phone}}</p>
              <p class="py-1">Residence Address</p>
              <p class="py-1">: {{form.rhouseno}}, {{form.rlocalcouncil_name}}</p>
              <p class="py-1 mb-1">Form Submitted</p>
              <p class="py-1 mb-1">: {{form.created_at}}</p>


              <p class="py-1 mt-1"><b>Estimate Details</b></p>
              <p></p>
              <p class="py-1">Road Name</p>
              <p class="py-1">: {{estimate.road_name}}</p>
              <p class="py-1">Road Type</p>
              <p class="py-1">: {{estimate.road_type}}</p>
              <p class="py-1">Length of Road </p>
              <p class="py-1">: {{estimate.length}} metre</p>
              <p class="py-1">Breadth of Road</p>
              <p class="py-1">: {{estimate.breadth}} metre</p>
              <p class="py-1">Rate</p>
              <p class="py-1">: {{estimate.rate}} per sq metre</p>
              <p class="py-1">Estimated Amount</p>
              <p class="py-1">: Rs. {{estimate.amount}}</p>
              <p class="py-1">Security Deposit</p> 
              <p class="py-1">: Rs. {{estimate.deposit}}</p>
              <p class="py-1">Total</p>
              <p class="py-1">: Rs. {{estimate.total}}</p>
              <button v-if="form.track_status == 4 || form.track_status == 55" @click.prevent="makePayment()" class="px-4 py-2 mt-1 text-sm font-bold text-white border rounded bg-buttonpink hover:bg-green-400" >Payment</button>

              <div v-if="payModal" class="absolute left-0 right-0 z-40 w-2/3 ml-auto mr-auto bg-white rounded-lg shadow top-2 md:h-auto xl:auto md:2/3 lg:w-1/3 xl:w-1/4"><br>
                <!-- <form name="redirect"   method="post" action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction" > -->
                <form name="redirect"   method="post" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction" >

                    <div class="flex justify-center">
                        <svg class="w-2/3 h-2/3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 281.8 202.1" style="enable-background:new 0 0 281.8 202.1;" xml:space="preserve">

                        <ellipse class="st0" cx="140.3" cy="183.7" rx="129.2" ry="10.3"/>
                        <g>
                          <g>
                            <path class="st1" d="M234.6,160.4c0.9,1.7,2.9,0.5,2.9,0.5s-0.1-0.6-1-1c-0.7-0.3-1.6-0.1-2,0.1l-1.1,0l0,0c-0.2,0-0.5,0-0.7,0.1
                              c3.1-1.1,1.7-4.8,1.7-4.8s-1,0-2,1.4c-0.8,1.1-0.5,3-0.4,3.5c-1.2,0.2-2.4,0.5-3.6,0.9c0.1-0.1,0.3-0.3,0.5-0.5
                              c1.2-1.4,0.7-4.1,0.7-4.1c-4.3,0.5-3.4,4.6-3.2,5.5c-1.4,0.7-2.7,1.5-3.9,2.3c0.3-0.4,0.6-1,0.8-1.9c0.5-2-1.3-4.5-1.3-4.5
                              c-4.2,2.6-1.2,6.4-0.6,7.1c-0.7,0.6-1.4,1.2-2.1,1.7c-0.7,0.6-1.3,1.2-1.9,1.8c0.2-0.6,0.4-1.4,0.2-2.7c-0.3-2.3-3.2-4-3.2-4
                              c-3,4.3,1.3,6.9,2.3,7.4c-1.9,2.1-3.1,3.7-3.1,3.8l0.4,0.3c0,0,0.7-1.1,2-2.6c1.6,5.1,7.2,2.5,7.2,2.5s-0.1-1.4-2.2-2.8
                              c-1.3-0.9-3.3-0.7-4.4-0.4c0.8-0.9,1.8-1.9,2.9-2.9c0.4-0.3,0.7-0.7,1.2-1c1.4,4.8,6.6,2.4,6.6,2.4s-0.1-1.3-2-2.5
                              c-1.2-0.8-2.9-0.6-3.9-0.4c1.2-0.9,2.5-1.9,4-2.7c0.9,4.6,5.7,2.7,5.7,2.7s0-1.1-1.6-2.4c-1-0.8-2.7-0.7-3.6-0.6
                              c1.6-0.8,3.4-1.5,5.2-1.8c-0.1,4.1,4.4,3.3,4.4,3.3s0.2-1-1-2.3c-0.9-1-2.7-1.1-3.3-1.1c0.7-0.1,1.3-0.2,2-0.2L234.6,160.4z"/>
                            <g>
                              <g>
                                <path class="st2" d="M198.5,184.9c0,0-9.3-21-2.6-40.5c6.7-19.5,23-25.2,23-25.2s-9.6,11.2-4,28.6c5.3,16.5-4.8,37.1-4.8,37.1
                                  H198.5z"/>
                                <path class="st3" d="M201.7,184.9c0,0-2.4-42.7,7.7-53.9c-9.2,14.1-5.3,53.9-5.3,53.9H201.7z"/>
                              </g>
                              <path class="st3" d="M217.7,184.9h-9.9c0.4-1.8,1.8-7,5.4-11c4.3-4.8,9.8-4.4,9.8-4.4s-3,3.3-3.4,9.1
                                C219.4,181,218.6,183.2,217.7,184.9z"/>
                              <path class="st1" d="M194.7,161.7c7.2,9.4,8.9,21.7,9,23.2h-14.1c-3.6-3.3-7.9-8.6-8-15c-0.1-11.4-5.4-18.2-5.4-18.2
                                S187,151.7,194.7,161.7z"/>
                              <path class="st2" d="M211,184.9h-0.7c1.4-3.2,5-10.8,8.4-12.4C215.3,174.8,212.3,181.6,211,184.9z"/>
                              <path class="st4" d="M199.3,184.9h-1.5c-1.7-5.7-6.9-21.4-13.6-26.6C191.1,162.1,197.5,179.6,199.3,184.9z"/>
                            </g>
                          </g>

                            <rect x="181.6" y="184.9" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 405.0585 371.5274)" class="st5" width="41.9" height="1.7"/>
                        </g>
                        <ellipse transform="matrix(0.7899 -0.6133 0.6133 0.7899 -22.3528 148.9277)" class="st1" cx="206.2" cy="107.1" rx="12.8" ry="12.8"/>
                        <path class="st4" d="M216.9,107.1c0,5.9-4.8,10.7-10.7,10.7c-5.9,0-10.7-4.8-10.7-10.7c0-5.9,4.8-10.7,10.7-10.7
                          C212.1,96.4,216.9,101.2,216.9,107.1z"/>
                        <path class="st6" d="M181.6,186.6H99.1c-4.3,0-7.7-3.5-7.7-7.7V35.5c0-4.3,3.5-7.7,7.7-7.7h82.5c4.3,0,7.7,3.5,7.7,7.7v143.4
                          C189.3,183.1,185.8,186.6,181.6,186.6z"/>
                        <path class="st7" d="M122.2,33.3c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5
                          C121.5,31.9,122.2,32.5,122.2,33.3z"/>
                        <path class="st7" d="M156.9,34.7h-31.5c-0.8,0-1.4-0.6-1.4-1.4l0,0c0-0.8,0.6-1.4,1.4-1.4h31.5c0.8,0,1.4,0.6,1.4,1.4l0,0
                          C158.3,34.1,157.7,34.7,156.9,34.7z"/>
                        <path class="st8" d="M94.8,37.1v141.7c0,2.3,1.9,4.1,4.1,4.1h82.8c2.3,0,4.1-1.9,4.1-4.1V37.1H94.8z"/>
                        <rect x="138.4" y="89.9" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 268.7999 -14.1356)" class="st9" width="6.2" height="74.9"/>
                        <polygon class="st9" points="105.1,128.5 105.1,188.6 105.1,188.7 105.1,188.8 107.8,190.8 110.6,188.8 113.4,190.8 116.2,188.7
                          119,190.8 121.8,188.8 124.5,190.8 127.3,188.7 130.1,190.8 132.9,188.8 135.7,190.8 135.7,190.7 135.7,190.8 138.5,188.7
                          141.3,190.8 141.3,190.7 141.4,190.8 144.1,188.8 146.9,190.8 149.8,188.7 152.6,190.8 155.3,188.8 158,190.8 160.8,188.7
                          163.7,190.8 166.5,188.8 169.2,190.8 172.1,188.7 174.9,190.8 177.8,188.7 177.9,188.7 177.9,128.5 "/>
                        <g>
                          <polygon class="st7" points="170.8,186.8 173.5,188.8 176.3,186.8 176.4,186.8 176.4,128.5 105.9,128.5 105.9,186.7 105.9,186.8
                            105.9,186.9 108.6,188.8 111.3,186.9 114,188.8 116.7,186.8 119.4,188.8 122.1,186.9 124.7,188.8 127.4,186.8 130.2,188.8
                            132.9,186.9 135.6,188.8 135.6,188.8 135.6,188.8 138.3,186.8 141,188.8 141,188.8 141,188.8 143.7,186.9 146.4,188.8 149.2,186.8
                            151.9,188.8 154.5,186.9 157.2,188.8 159.9,186.8 162.6,188.8 165.3,186.9 168,188.8 	"/>
                          <g>

                              <rect x="156" y="156.1" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 327.8969 13.9925)" class="st10" width="1.9" height="29.8"/>

                              <rect x="141.3" y="136.5" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 308.3438 24.6898)" class="st10" width="1" height="60"/>

                              <rect x="156" y="148" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 319.8346 5.9302)" class="st10" width="1.9" height="29.8"/>

                              <rect x="141.3" y="128.4" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 300.2813 16.6274)" class="st10" width="1" height="60"/>

                              <rect x="156" y="139.1" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 310.9739 -2.9304)" class="st10" width="1.9" height="29.8"/>

                              <rect x="141.3" y="119.6" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 291.4208 7.7668)" class="st10" width="1" height="60"/>

                              <rect x="156" y="130.7" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 302.5125 -11.3919)" class="st10" width="1.9" height="29.8"/>

                              <rect x="141.3" y="111.1" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 282.9593 -0.6947)" class="st10" width="1" height="60"/>
                          </g>
                        </g>
                        <path class="st6" d="M226.2,84.4H197c-0.9,0-1.6-0.7-1.6-1.6V63.4c0-0.9,0.7-1.6,1.6-1.6h29.2c0.9,0,1.6,0.7,1.6,1.6v19.4
                          C227.9,83.7,227.1,84.4,226.2,84.4z"/>
                        <path class="st11" d="M209.8,82h-16.1c-0.6,0-1.1-0.5-1.1-1.1v-4.4c0-0.6,0.5-1.1,1.1-1.1h16.1c0.6,0,1.1,0.5,1.1,1.1V81
                          C210.9,81.5,210.4,82,209.8,82z"/>
                        <polygon class="st12" points="221.9,68 197.4,68 208.7,67.3 217.3,57.2 226.4,68.1 "/>
                        <g>
                          <path class="st13" d="M29.4,169.9l-1.8,0.8c0-0.2-0.8-2.5-0.8-2.5l1.9-0.7L29.4,169.9z"/>
                          <path class="st14" d="M28.4,171.1c0,0-1.1,6.3-1.1,6.5c0,0.1,0,0.3,0,0.7c0,0.5-0.2,0.9-0.7,1.1c-0.2,0-0.3,0.1-0.3,0.1
                            c-0.1,0-3.3-10.6-3.3-10.6s3.3-1.3,3.6-0.8C27.1,168.5,27.2,170.5,28.4,171.1z"/>
                          <g>
                            <polygon class="st7" points="27.8,174.7 26.8,174.5 26.7,174.9 27.7,175.1 		"/>
                            <polygon class="st7" points="27.7,175.4 26.7,175.2 26.6,175.6 27.6,175.8 		"/>
                            <polygon class="st7" points="27.6,176.1 26.6,175.8 26.5,176.2 27.5,176.5 		"/>
                          </g>
                        </g>
                        <path class="st13" d="M83.2,117.1c0,0,1.1-1.1,1.2-1.8c0.2-1.1,1.1-1.9,0.9-1c-0.1,0.9,0,0.5,0.4,0.2c0.4-0.3,0.8-0.7,0.9-1.7
                          c0.1-1,0.7-0.6,0.5,1.2c-0.2,1.8-1,1.9-1.4,2.5c-0.4,0.6-1.5,1.8-1.5,1.8L83.2,117.1z"/>
                        <path class="st15" d="M71.7,116.9c0.3-0.8,0.3-1.8-0.1-2.5c-0.4-0.8-1.3-1.3-2.2-1.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0.1-0.2,0.2-0.4,0.3
                          c-0.5,0.6-1.2,1-1.9,1.3c-0.9,0.4-1.8,0.5-2.7,0.7c-0.5,0.1-1.1,0.4-1.4,0.8c-0.4,0.5-0.4,1.3-0.2,2c0.1,0.7,0.1,1.3,0.3,2
                          c0.1,0.5,0.1,0.5,0.2,1.2c0.1,0.6,0.3,1,0.6,1.5c0.2,0.3,0.2,1.3,0.6,1.4c0.2,0,0.2-0.8,0.3-1c0.1-0.2,0.2-0.4,0.3-0.6
                          c0.3-1.1,0.3-2.2,1-3c0.4-0.5,1-0.7,1.6-0.8c0.7-0.1,1.2,0.4,1.9,0.3C70,119,71.2,117.9,71.7,116.9z"/>
                        <rect x="64.1" y="121.8" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 131.9326 248.5048)" class="st13" width="3.8" height="4.9"/>
                        <path class="st13" d="M69.6,118.9c0,0,0.2,4.6-1.2,5.4c-1.4,0.7-3.3-0.4-4-0.9s-1.1-1.5-1.1-1.5s-0.5-0.7-0.5-1.3
                          c0-0.6,0.1-1.3,0.6-0.9c0.8,0.6,0.4,0.1,0.4,0.1s-0.3-0.6,0.3-1.3C64.8,117.8,69.6,116.4,69.6,118.9z"/>
                        <g>
                          <path class="st13" d="M78.1,178.1l0.4,1.9c-0.2,0-2.6,0.3-2.6,0.3l-0.3-1.9L78.1,178.1z"/>
                          <path class="st14" d="M79,179.2c0,0,5.8,2.2,5.9,2.3c0.1,0,0.3,0.1,0.6,0.1c0.5,0.1,0.8,0.4,0.9,0.8c0,0.2,0,0.3,0,0.3
                            c0,0.1-10.7,1.1-10.7,1.1s-0.6-3.4,0-3.6C76.3,180,78.3,180.3,79,179.2z"/>
                          <g>
                            <polygon class="st7" points="82.4,180.5 82,181.5 82.3,181.6 82.7,180.7 		"/>
                            <polygon class="st7" points="83,180.8 82.6,181.7 83,181.8 83.4,180.9 		"/>
                            <polygon class="st7" points="83.6,181 83.3,181.9 83.6,182 84,181.1 		"/>
                          </g>
                        </g>
                        <path class="st11" d="M68.8,125l6.1-1.4l8.5-6.7l1.4,1.2l-6.5,7.9l-8.7,4.9l-4.6,14.4L52,144.3l4.9-15.1l-5-4.2l-2.2-11.6l1.8-0.2
                          l3.4,9.5l8.2,2.6l0.7,0c0,0,2.2,1.8,3.4,1.3c0.9-0.4,0.8-1.5,0.8-1.5L68.8,125z"/>
                        <polyline class="st14" points="65.3,145.2 74.6,154.4 79.3,178.1 75.3,178.6 69.4,158.9 58.7,151.8 47.2,165.5 29.1,170.2
                          27.8,166.5 43.3,160 52.1,144.1 "/>
                        <path class="st6" d="M114.2,64.4L34.9,52.4c-2.6-0.4-5,1.4-5.4,4l-0.7,4.8L27.3,71l-4.5,29.8c-0.4,2.6,1.4,5,4,5.4l79.3,12.1
                          c2.6,0.4,5-1.4,5.4-4l4.5-29.8l1.5-9.8l0.7-4.8C118.6,67.2,116.8,64.8,114.2,64.4z"/>
                        <g>
                          <path class="st16" d="M41.6,71.2l0.4-2.3l-2.2-0.3l-0.4,2.4c0.4-0.1,0.8-0.1,1.2-0.1C40.9,70.9,41.3,71,41.6,71.2z"/>
                          <path class="st16" d="M42.7,74.2c0.2-1.4-0.7-2.7-2.1-2.9s-2.7,0.7-2.9,2.1c-0.2,1.4,0.7,2.7,2.1,2.9
                            C41.1,76.6,42.4,75.6,42.7,74.2z"/>
                          <path class="st16" d="M38.7,76.4l-0.3,1.8l2.2,0.3l0.3-1.9c-0.4,0.1-0.8,0.1-1.2,0.1C39.3,76.7,39,76.6,38.7,76.4z"/>
                          <path class="st16" d="M47.2,76l0.3-2.2L43,73.1c0.1,0.4,0.1,0.8,0.1,1.2c-0.1,0.4-0.2,0.7-0.3,1L47.2,76z"/>
                          <path class="st16" d="M42,71.5c0.4,0.3,0.7,0.7,0.9,1.1l4.7,0.7l0.4-2.3c0.1-0.7-0.4-1.3-1-1.4l-4.6-0.7L42,71.5z"/>
                          <path class="st16" d="M38.3,76.2c-0.4-0.3-0.7-0.7-0.9-1.1l-4.3-0.6l-0.3,1.8c-0.1,0.7,0.4,1.3,1,1.4l4.1,0.6L38.3,76.2z"/>
                          <path class="st16" d="M42.5,75.7c-0.3,0.4-0.7,0.7-1.1,0.9L41,78.7l4.4,0.7c0.7,0.1,1.3-0.4,1.4-1l0.3-1.9L42.5,75.7z"/>
                          <path class="st16" d="M33.5,71.8L33.2,74l4,0.6c-0.1-0.4-0.1-0.8-0.1-1.2c0.1-0.4,0.2-0.7,0.3-1L33.5,71.8z"/>
                          <path class="st16" d="M37.8,72c0.3-0.4,0.7-0.7,1.1-0.9l0,0l0.4-2.6l-3.9-0.6c-0.7-0.1-1.3,0.4-1.4,1l-0.4,2.4L37.8,72z"/>
                        </g>
                        <path class="st16" d="M102.3,112.9l-16.9-2.6c-1.2-0.2-2.1-1.3-1.9-2.5l0.6-3.7c0.2-1.2,1.3-2.1,2.5-1.9l16.9,2.6
                          c1.2,0.2,2.1,1.3,1.9,2.5l-0.6,3.7C104.7,112.3,103.5,113.1,102.3,112.9z"/>
                        <g>
                          <path class="st7" d="M48.3,86.1l-15.5-2.3c-0.6-0.1-1.1,0.1-1.2,0.5l-0.4,2.6c-0.1,0.4,0.4,0.8,1,0.9l15.5,2.3
                            c0.6,0.1,1.1-0.1,1.2-0.5l0.4-2.6C49.4,86.6,48.9,86.2,48.3,86.1z"/>
                          <path class="st7" d="M67.6,89.1l-15.5-2.3c-0.6-0.1-1.1,0.1-1.2,0.5l-0.4,2.6c-0.1,0.4,0.4,0.8,1,0.9L67,93.1
                            c0.6,0.1,1.1-0.1,1.2-0.5l0.4-2.6C68.7,89.5,68.2,89.2,67.6,89.1z"/>
                          <path class="st7" d="M86.9,92l-15.5-2.3c-0.6-0.1-1.1,0.1-1.2,0.5l-0.4,2.6c-0.1,0.4,0.4,0.8,1,0.9L86.3,96
                            c0.6,0.1,1.1-0.1,1.2-0.5l0.4-2.6C87.9,92.5,87.5,92.1,86.9,92z"/>
                          <path class="st7" d="M106.2,94.9l-15.5-2.3c-0.6-0.1-1.1,0.1-1.2,0.5l-0.4,2.6c-0.1,0.4,0.4,0.8,1,0.9l15.5,2.3
                            c0.6,0.1,1.1-0.1,1.2-0.5l0.4-2.6C107.2,95.4,106.8,95,106.2,94.9z"/>
                        </g>
                        <path class="st13" d="M51.5,113.4c0,0-0.3-1.5,0-2.1c0.4-1,0.1-2.2-0.2-1.4c-0.4,0.9-0.3,0.5-0.5,0c-0.2-0.5-0.3-1,0.1-1.9
                          c0.5-0.9-0.3-0.9-1.1,0.8c-0.8,1.7-0.1,2.2-0.1,2.8c0,0.7,0.3,2.3,0.3,2.3L51.5,113.4z"/>
                        <path class="st11" d="M158.6,110.6H122c-2,0-3.5-1.2-3.5-2.7V92.2c0-1.5,1.6-2.7,3.5-2.7h36.6c2,0,3.5,1.2,3.5,2.7v15.8
                          C162.2,109.4,160.6,110.6,158.6,110.6z"/>
                        <g>
                          <path class="st7" d="M135.5,98.1c0,0.6-0.1,1.2-0.3,1.6c-0.2,0.5-0.5,0.9-0.8,1.2c-0.4,0.3-0.8,0.6-1.3,0.7
                            c-0.5,0.2-1.2,0.3-1.9,0.3h-0.9v3.5c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1s-0.2,0.1-0.3,0.1s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0
                            c-0.1,0-0.3,0-0.3-0.1c-0.1,0-0.1-0.1-0.2-0.1s-0.1-0.1-0.1-0.2v-9.8c0-0.3,0.1-0.5,0.2-0.6c0.1-0.1,0.3-0.2,0.5-0.2h2.6
                            c0.3,0,0.5,0,0.7,0c0.2,0,0.5,0.1,0.8,0.1s0.7,0.2,1,0.4c0.3,0.2,0.6,0.4,0.9,0.7c0.2,0.3,0.4,0.6,0.5,0.9
                            C135.4,97.2,135.5,97.6,135.5,98.1z M133.2,98.2c0-0.4-0.1-0.7-0.2-0.9s-0.3-0.4-0.5-0.5s-0.4-0.2-0.6-0.2c-0.2,0-0.4,0-0.7,0h-0.9
                            v3.7h1c0.4,0,0.6,0,0.9-0.1c0.2-0.1,0.4-0.2,0.6-0.4s0.3-0.4,0.3-0.6S133.2,98.5,133.2,98.2z"/>
                          <path class="st7" d="M144.9,104.8c0.1,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.2-0.1,0.3s-0.2,0.1-0.3,0.1c-0.2,0-0.4,0-0.6,0
                            c-0.3,0-0.5,0-0.7,0c-0.2,0-0.3,0-0.4-0.1s-0.1-0.1-0.2-0.1s-0.1-0.1-0.1-0.2l-0.7-2.2h-4.1l-0.7,2.1c0,0.1-0.1,0.1-0.1,0.2
                            c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.3,0-0.6,0c-0.3,0-0.5,0-0.6,0s-0.2-0.1-0.3-0.1s-0.1-0.2-0.1-0.3
                            c0-0.1,0.1-0.3,0.1-0.5l3.4-9.6c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2-0.1,0.4-0.1c0.2,0,0.4,0,0.7,0
                            c0.3,0,0.6,0,0.8,0c0.2,0,0.3,0,0.5,0.1c0.1,0,0.2,0.1,0.2,0.1c0,0.1,0.1,0.1,0.1,0.3L144.9,104.8z M139.9,96.9L139.9,96.9
                            l-1.5,4.6h3.1L139.9,96.9z"/>
                          <path class="st7" d="M149.4,101.5v3.8c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1s-0.2,0.1-0.3,0.1c-0.1,0-0.3,0-0.5,0
                            c-0.2,0-0.4,0-0.5,0s-0.3,0-0.3-0.1s-0.1-0.1-0.2-0.1s-0.1-0.1-0.1-0.2v-3.8l-3-5.9c-0.1-0.2-0.2-0.4-0.2-0.5c0-0.1,0-0.2,0.1-0.3
                            c0.1-0.1,0.2-0.1,0.4-0.1s0.4,0,0.7,0c0.3,0,0.5,0,0.6,0c0.2,0,0.3,0,0.4,0.1c0.1,0,0.2,0.1,0.2,0.1c0,0.1,0.1,0.1,0.1,0.2l1.2,2.7
                            c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.6,0.3,0.9h0c0.1-0.3,0.2-0.6,0.3-0.9s0.2-0.6,0.3-0.8l1.2-2.7c0-0.1,0.1-0.2,0.1-0.2
                            c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.3,0,0.6,0c0.3,0,0.6,0,0.7,0c0.2,0,0.3,0.1,0.4,0.1c0.1,0.1,0.1,0.1,0,0.3
                            s-0.1,0.3-0.2,0.5L149.4,101.5z"/>
                        </g>
                        <g>
                          <path class="st9" d="M256.6,153.3c-0.6-0.8-1.4-1.6-1.8-2.5c-0.6-1.3-0.4-2.9,0.1-4.2c0.4-1.4,1.1-2.7,1.4-4.1
                            c0.9-3.4,0-7.3-2.4-9.9c-0.5-0.6-1.1-1.1-1.6-1.8c-1-1.5-1-3.5-0.8-5.3c0.3-1.8,0.8-3.6,0.7-5.4c-0.1-2.2-1.2-4.3-2.9-5.7
                            c-1.7-1.4-3.9-1.9-6.1-1.9c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0v0c-2.2,0-4.4,0.5-6.1,1.8c-1.7,1.4-2.8,3.5-3,5.7
                            c-0.1,1.8,0.4,3.6,0.6,5.4c0.2,1.8,0.2,3.8-0.8,5.3c-0.4,0.6-1,1.2-1.6,1.7c-2.4,2.6-3.4,6.4-2.5,9.9c0.4,1.4,1,2.7,1.4,4.1
                            c0.4,1.4,0.6,2.9,0,4.2c-0.4,0.9-1.2,1.7-1.8,2.5c-2.4,3-3.4,7.4-1.4,10.6c0.8,1.3,2.1,2.2,3.4,3.1c2,1.3,4.2,2.3,6.5,2.8
                            c1,0.2,2.1,0.4,3.1,0.2c0.7-0.2,1.2-0.1,1.9-0.1c0.7,0,1.2-0.1,1.9,0.1c1,0.3,2.1,0.1,3.1-0.1c2.3-0.5,4.5-1.5,6.5-2.7
                            c1.3-0.8,2.5-1.8,3.4-3C259.9,160.8,259,156.3,256.6,153.3z"/>
                          <path class="st17" d="M253.9,150.2l-10,10.7l-0.4-21.1c1.5-2,7.5-10,7.5-10l-7.5,8.1l-0.2-12.8c0.7-0.9,5.4-7.2,5.4-7.2l-5.4,5.8
                            l-0.2-9l-0.2,11.5l-5.2-5.7c0,0,4.2,5.7,5.2,7.1l-0.2,13l-7.4-8.2c0,0,6,8.1,7.4,10.1l-0.3,21.3l-10.2-11.1c0,0,9.1,12.4,10.1,13.8
                            l0,3.1l1.8,0l-0.1-6.3C245.9,160.8,253.9,150.2,253.9,150.2z"/>
                        </g>
                        <rect x="242.3" y="169.7" class="st17" width="1.8" height="3.4"/>
                        <polygon class="st6" points="235.3,173.2 251.2,173.2 248.2,185.8 238.3,185.8 "/>
                        <rect x="235.3" y="172.3" class="st18" width="15.9" height="1"/>
                        <g>
                          <path class="st6" d="M142.5,53.5h-6.9l-11,24.9h6.9l6-14.4v0l1.4-3.6l1.9,4.7l5.5,13.2h7.2L142.5,53.5z"/>
                          <polygon class="st11" points="139.2,64.6 138.9,64.6 139,63.5 139.1,63.5 	"/>
                          <polygon class="st11" points="139.7,68.1 138.3,68.1 138.6,66.4 139.4,66.4 	"/>
                          <polygon class="st11" points="140.2,71.5 137.7,71.5 138,69.8 139.9,69.8 	"/>
                          <polygon class="st11" points="140.7,75 137.1,75 137.4,73.2 140.4,73.2 	"/>
                          <polygon class="st11" points="141.2,78.4 136.5,78.4 136.8,76.7 140.9,76.7 	"/>
                        </g>
                        <g>
                          <path class="st7" d="M203.9,102.8h5.6v0c-0.3,0.5-0.5,0.8-0.6,0.8h-1.5c0.2,0.2,0.3,0.5,0.4,0.9h1.6c0,0,0,0,0,0
                            c-0.4,0.5-0.5,0.8-0.6,0.8h-1c0,0.3-0.2,0.6-0.4,1c-0.3,0.4-0.6,0.7-0.9,0.8c-0.5,0.3-1.1,0.4-1.6,0.4v0c0,0,1.1,1.4,3.4,4H207
                            c-2.2-2.6-3.3-3.9-3.3-3.9v-0.8l0,0c0.2,0,0.4,0,0.7,0c1.2,0,2-0.4,2.3-1.2c0-0.1,0.1-0.2,0.1-0.4h-3.4c0,0,0,0,0,0
                            c0.4-0.5,0.6-0.8,0.6-0.8h2.7v0c-0.2-0.3-0.4-0.5-0.9-0.7c-0.3-0.1-0.6-0.2-0.8-0.2h-1.5v0C203.7,103.1,203.9,102.8,203.9,102.8z"
                            />
                        </g>
                        </svg>
                    </div>

                    <p class="flex justify-center mx-2 mt-4"> Do you want to proceed this payment?</p>
                    <input type="hidden" name="encRequest" v-model="encRequest" >
                    <input type="hidden" name="access_code" v-model="access_code" >
                    <div class="flex justify-center mb-3">
                      <button  @click="paymentHandler" type="submit" class="flex items-center px-6 mt-4 mr-1 text-sm text-white rounded-lg shadow bg-buttonpink hover:bg-red-500 sm:mt-6 focus:outline-none" >Yes</button>
                      <button  @click.prevent="paymentModal" class="flex items-center px-5 py-1 mt-4 ml-1 text-sm text-black border rounded-lg shadow hover:bg-red-500 sm:mt-6 focus:outline-none" >No</button>
                    </div>
                </form>
              </div>
            </div>
          </div>

          <div class="mx-4 mb-2">
            <p class="pt-1">Terms and Condition :
            </p>
            <p class="py-2 pl-2" >i)	Security Deposit is calculated from the 10% of the Estimated Amount, which will be returned back to the applicant(conditions apply)
            </p>
            <p class="py-2 pl-2" >ii)	Total Amount = Estimated Amount + Security Deposit
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Vue from 'vue';

export default {


  name: 'PaymentPage',


  components: {

  },

  data: function(){
    return{

      // paymentM: false,
      payModal: false,
      estimate: '',
      form:'',
      price: '',



      encRequest: '',
      access_code: '',
      decrypted_data: '',



      merchant_data: {

      // key: "rzp_test_ZZBegX2dkTiAYZ",
      // tid:"1606313198631",
      billing_notes:'',
      // merchant_id:'280503',
      merchant_id:'',
      order_id:'',
      amount: '',
      currency:'INR',
      redirect_url:'',
      cancel_url:'',
      //redirect_url:'https://pwdroadcutting.mizoram.gov.in/api/auth/responseHandler',
      //redirect_url:'http://localhost:8000/api/auth/responseHandler',
      //redirect_url: 'http://10.180.243.18:8000/api/auth/responseHandler',
     // cancel_url:'https://pwdroadcutting.mizoram.gov.in/api/auth/responseHandler',
      //cancel_url:'http://localhost:8000/api/auth/responseHandler',
      language:'EN',

      // billing_name:"Charli",
      // billing_address:"Room no 1101, near Railway station Ambad",
      // billing_city:"Indore",
      // billing_state:"MP",
      // billing_zip:"425001",
      // billing_country:"India",
      // billing_tel:"9876543210",
      // billing_email:"test@test.com",
      // delivery_name:"Chaplin",
      // delivery_address:"room no.701 near bus stand",
      // delivery_city:"Hyderabad",
      // delivery_state:"Andhra",
      // delivery_zip:"234",
      // delivery_country:"wer",
      // delivery_tel:"dsf",
      // merchant_param1:"dsf",
      // merchant_param2:"sdf",
      // merchant_param3:"dsf",
      // merchant_param4:"sdf",
      // merchant_param5:"sdf",
      // promo_code:"sdf",
      // customer_identifier:"dfsd",
      // access_Code:"AVIJ96HJ19BU63JIUB",
      // working_key:"130CB2942C6C0D0101E770B9BBEA4235",



        /// The amount is shown in currency subunits. Actual amount is ₹599.

      //  handler:  (response) =>{
      //     this.verifySignature(response);
      //   },

      }
    }
  },
 mounted() {
            axios.get('/api/auth/showPaymentPage/' + this.$route.params.id)
                .then(response => {
                    console.log(response.data)
                    this.form = response.data.form;
                    this.merchant_data.billing_notes = this.form.id;


                      this.merchant_data.merchant_id = response.data.merchant_id;
                      this.merchant_data.redirect_url = response.data.redirect_url;
                      this.merchant_data.cancel_url = response.data.cancel_url;


           axios.get('/api/auth/estimateFindByForm/' + this.form.id)
                .then(response=>{
                    console.log(response.data)
                    this.estimate = response.data.estimate;
                    this.price = this.estimate.total;
                    this.merchant_data.amount = this.price;
                    // this.merchant_data.billing_name = this.estimate.form_memo;
                    // this.merchant_data.order_id = this.estimate.form_memo;


                })
                .catch(error=>{
                    this.loading = false;
                });


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


    },

  methods:{

     paymentModal() {
          this.payModal=!this.payModal;
    },


    paymentHandler(){

      //  this.$router.push('/paymentHandler');

    },


    // Initializing the payment request
    makePayment:function(){

    axios.post("/api/auth/cryptoRequest", this.merchant_data)
    .then(response => {

      this.encRequest = response.data.encrypted_data;
      this.access_code = response.data.access_code;
      this.decrypted_data = response.data.decrypted_data;
      this.paymentModal();

    })
    .catch(err => {
        throw err;
    });




    },

    automaticSubmit() {
      this.$refs.submitBtn.click();
    },

    //  submit(response) {

    //     axios.post("/api/auth/save-payment", {
    //       payment_id: response.razorpay_payment_id,
    //       order_id: this.rzpOptions.notes.order_id,
    //       amount: this.rzpOptions.amount
    //     })
    //     .then(res => {
    //        this.$router.push('/paymentSuccess/'+ this.$route.params.id);
    //       this.notifyUser(res);
    //     })
    //     .catch(err => {
    //       throw err;
    //     });
    // },
    notifyUser(res) {

      this.$router.push('/');

    },

    verifySignature:function(response){

      axios.post('/api/auth/save-payment',{
        payment_id: response.razorpay_payment_id,
          order_id: this.rzpOptions.notes.order_id,
          amount: this.rzpOptions.amount,
          division_id: this.form.division_id,
          form_id: this.form.id,
          form_memo: this.estimate.form_memo,

         } )
       .then((res)=>{

          this.$router.push('/paymentSuccess/'+ this.form.id);
        //  console.log("PAYMENT RESPONSE",res)

      })
       .catch((err)=>{console.log('error')})
    },

               printme: function() {

                window.print();
            },


    },

  //    created() {
  //    var imported = document.createElement("script");
  //    imported.src = "https://checkout.razorpay.com/v1/checkout.js";
  //    document.head.appendChild(imported);
  //  }
}


</script>

<style scoped>
input{
  border: 1px solid rgb(0, 217, 255);
  padding:8px 40px;
  text-align: center;
}
button{
  background: rgb(0, 241, 161);
  border: none;
  padding: 8px 30px;
  margin: 16px;
}


                            .st0{fill:#EAECFD;}
                            .st1{fill:#F7931E;}
                            .st2{fill:#F2557E;}
                            .st3{fill:#F47F9E;}
                            .st4{fill:#FBBE17;}
                            .st5{fill:#5F37F7;}
                            .st6{fill:#1F4490;}
                            .st7{fill:#FFFFFF;}
                            .st8{fill:#D7E4FF;}
                            .st9{fill:#B8C6F4;}
                            .st10{fill:#E0EDFE;}
                            .st11{fill:#EE266A;}
                            .st12{fill:#EAEAEA;}
                            .st13{fill:#F6C5AE;}
                            .st14{fill:#393E5C;}
                            .st15{fill:#333333;}
                            .st16{fill:#FBAE17;}
                            .st17{fill:#94B2FF;}
                            .st18{fill:#ABC8E9;}

</style>


