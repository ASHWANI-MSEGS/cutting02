<template>
          <div>
            
            <div >
                <div class="tab__header">
                    <a href="#" class="tab__link mb-1 p-4 block bg-homeblue hover:bg-blue-700 no-underline text-white flex justify-between rounded" @click.prevent="active1 = !active1">
                        <strong>1. Road Cutting Form Submit dan</strong>
                        <span class="text-white" v-show="!active1">
                          <svg version="1.1" id="Layer_1" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">

                          <rect y="9.8" class="st0" width="25" height="5.5"/>
                          <rect x="0" y="9.8" transform="matrix(3.623162e-14 1 -1 3.623162e-14 25.05 5.000019e-02)" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                        <span class="text-white" v-show="active1">
                          <svg version="1.1" id="Layer_1" class="w-5 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                            
                                    <rect x="0" y="9.8" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                    </a>
                </div>
                <div class="tab__content py-6 p-2 bg-white text-gray-600" v-show="active1"><slot />
                  <p class="mx-10 my-1"> 1. Apply button kha hmet la Road Cutting Form kha fill up ang che.</p>
                  <p class="mx-10 my-1">2. A hmasa berah i hming i chhu lut ang a, Email i neih chuan email chhut luhna turah chhu lut tel ang che.</p>
                  <p class="mx-10 my-1">3. I phone number SMS dawn theihna ngei kha chhu lut leh la, kawng laih tur sei zawng nen.</p>
                  <p class="mx-10 my-1">4. I residential address i chhu lut leh ang a, Road cutting tihna address nen a in an chuan Same as Residential address button kha hmet ang che</p>
                  <p class="mx-10 my-1">5. Payment online i pek fel tawh chuan lo nghak ang che.</p>
                  <p class="mx-10 my-1">6. I form an approve a permit an pek chhuah tawh che chuan i kawng laih tum atanga ni 3 hmain hemi portal hmang hian in-report leh tur a ni e.</p>

                </div>            
            </div>

             <div >
                <div class="tab__header">
                    <a href="#" class="tab__link mb-1 p-4 block bg-homeblue hover:bg-blue-700 no-underline text-white flex justify-between rounded" @click.prevent="active2 = !active2">
                        <strong>2. Form Submit Track dan</strong>
                        <span class="stroke-current text-white" v-show="!active2">
                          <svg version="1.1" id="Layer_1" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">

                              <rect y="9.8" class="st0" width="25" height="5.5"/>
                              <rect x="0" y="9.8" transform="matrix(3.623162e-14 1 -1 3.623162e-14 25.05 5.000019e-02)" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                        <span class="stroke-current text-white" v-show="active2">
                          <svg version="1.1" id="Layer_1" class="w-5 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                            
                                    <rect x="0" y="9.8" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                    </a>
                </div>
                <div class="tab__content py-6 p-2 bg-white text-gray-600" v-show="active2"><slot />
                  <p class="mx-10 my-1">1. Track Form tihah khian i memo number kha chhut luh tur.</p>
                  <p class="mx-10 my-1">2. Track tih button i hmelh velah Tracking page-ah a lo hruai ang che.</p>
                  <p class="mx-10 my-1">3. I form submit kha a awmna chin i track khan a lo hrilh zel ang che.</p>
                  <p class="mx-10 my-1">4. Payment pek a ngaih chuan screen ah khan payment button a lo lang mai ang.</p>
                  <p class="mx-10 my-1">5. Online a paymenty i pek fel tawh chuan lo nghak ang che.</p>
                  <p class="mx-10 my-1">6. I form an approve a permit an pek chhuah tawh che chuan i kawng laih tum atanga ni 3 hmain hemi portal hmang hian in-report leh tur a ni e.</p>

                </div>            
            </div>

            <div >
                <div class="tab__header">
                    <a href="#" class="tab__link mb-1 p-4 block bg-homeblue hover:bg-blue-700 no-underline text-white flex justify-between rounded" @click.prevent="active3 = !active3">
                        <strong>3. Roadcutting/ Kawng laih hmaa in report dan tur(Permission hmu tawh tan chauh)</strong>
                        <span class="text-white" v-show="!active3">
                          <svg version="1.1" id="Layer_1" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">

                              <rect y="9.8" class="st0" width="25" height="5.5"/>
                              <rect x="0" y="9.8" transform="matrix(3.623162e-14 1 -1 3.623162e-14 25.05 5.000019e-02)" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                        <span class="text-white" v-show="active3">
                          <svg version="1.1" id="Layer_1" class="w-5 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                            
                                    <rect x="0" y="9.8" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                    </a>
                </div>
                <div class="tab__content py-6 p-2 bg-white text-gray-600" v-show="active3"><slot />
                  <p class="mx-10 my-1"> 1. Report form ah khian i memo number kha chhu lut la .</p>
                  <p class="mx-10 my-1">2. I chhut luh a i report button i hmeh velah in reportna tur page-ah a hruai lut ang che.</p>
                  <p class="mx-10 my-1">3. In reportna tur page ah khan i kawng laih ni tur thlang la, submit ang che.</p>
                  <p class="mx-10 my-1">4. I kawng laih ni tur atanga ni thum hmain in-report ngei ngei tur a ni.</p>
                  <p class="mx-10 my-1">5. Kawng i laih zawh velah Security Deposit la let turin i in report leh a ngai a.</p>
                  <p class="mx-10 my-1">6. Report form ah vek khan i memo number chu lutin report button ah i click leh ang.</p>
                  <p class="mx-10 my-1">7. Report na tur page ah khan A/C number, IFSC Code leh a dang te chhu lut la Submit ang che.</p>
                  <p class="mx-10 my-1">8. Security Deposit dawng tura tih tur te i tih fel chuan I AC ah Security Deposit hi an rawn return leh ang</p>
                  <hr>
                </div>            
            </div>

            <div >
                <div class="tab__header">
                    <a href="#" class="tab__link mb-1 p-4 block bg-homeblue hover:bg-blue-700 no-underline text-white flex justify-between rounded" @click.prevent="active4 = !active4">
                        <strong>4. Video Tutorial</strong>
                        <span class="text-white" v-show="!active4">
                          <svg version="1.1" id="Layer_1" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">

                              <rect y="9.8" class="st0" width="25" height="5.5"/>
                              <rect x="0" y="9.8" transform="matrix(3.623162e-14 1 -1 3.623162e-14 25.05 5.000019e-02)" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                        <span class="text-white" v-show="active4">
                          <svg version="1.1" id="Layer_1" class="w-5 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                            
                                    <rect x="0" y="9.8" class="st0" width="25" height="5.5"/>
                          </svg>
                        </span>
                    </a>
                </div>
                <div class="tab__content py-6 p-2 bg-white text-gray-600" v-show="active4"><slot />
                  <p class="mx-2 md:mx-10 my-1">1. Road Cutting Form Submit/Track dan</p>
                  <p class="mx-2 md:mx-10 my-1"> <iframe class="w-11/12 md:w-full" width="420" height="315"
                    src="https://www.youtube.com/embed/ZADI62mUV68" frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">
                    </iframe></p>
        
                  <hr>
                </div>            
            </div>
          </div>

 
    

</template>

<script>

export default {
    name: "Accordian",

  props: [
    'title'
  ],
  data() {
    return {
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      mydatas: [
        { id: 1, name: 'Form apply dan', text: 'Lorem'},
        { id: 2, name: 'Form Submit Track dan', text: 'Ipsum'},
        { id: 3, name: 'three', text: 'Yea...'}
      ]
    }
  },






}
</script>


<style scoped>

 .tab-content {
         max-height: 0;
         -webkit-transition: max-height .35s;
         -o-transition: max-height .35s;
         transition: max-height .35s;
         }
         /* :checked - resize to full height */
         .tab input:checked ~ .tab-content {
         max-height: 100vh;
         }
         /* Label formatting when open */
         .tab input:checked + label{
         /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
         font-size: 1.25rem; /*.text-xl*/
         padding: 1.25rem; /*.p-5*/
         border-left-width: 2px; /*.border-l-2*/
         border-color: #6574cd; /*.border-indigo*/
         background-color: #f8fafc; /*.bg-gray-100 */
         color: #6574cd; /*.text-indigo*/
         }
         /* Icon */
         .tab label::after {
         float:right;
         right: 0;
         top: 0;
         display: block;
         width: 1.5em;
         height: 1.5em;
         line-height: 1.5;
         font-size: 1.25rem;
         text-align: center;
         -webkit-transition: all .35s;
         -o-transition: all .35s;
         transition: all .35s;
         }

        .tab input[type=checkbox]:checked + label::after {
         transform: rotate(315deg);
         background-color: #6574cd; /*.bg-indigo*/
         color: #f8fafc; /*.text-grey-lightest*/
         }
         .tab input[type=radio]:checked + label::after {
         transform: rotateX(180deg);
         background-color: #6574cd; /*.bg-indigo*/
         color: #f8fafc; /*.text-grey-lightest*/
         }
         .st0{fill:#FFFFFF;}
</style>

                