<template>

 <!-- <div  class=" mx-auto bg-white border-grey-light border mt-20 "> -->
    <badger-accordion class="" >
    <badger-accordion-item class="focus:outline-none"> 
        <template slot="header" class="px-6 py-6 mt-5 mb-5">1. Form apply dan</template>    
        <p slot="content" class="p-5">1. Road Cutting Form saw kimchang leh dik taka fill up a, apply tur a ni</p>
        <p slot="content"  class="p-5">2. Submit hlawhtling chuan Memo Id screen ah a rawn lang a nga chhinchhiah tur.</p>
        <p slot="content" class="p-5">3. Memo Id hi phone ah SMS in a lo thleng tel ang.</p>
        <p slot="content" class="p-5">4. Memo Id hmang hian i form submit thlenna chin kha i hre zel thei a ni</p>

    </badger-accordion-item>

    <badger-accordion-item class="focus:outline-none"> 
        <template slot="header" class="px-6 py-6 focus:outline-none">2. Form Submit Track dan</template>    
        <p slot="content" class="p-5">1. Screen hnui bera Track Form tihah khuan i memo id kha enter tur.</p>
        <p slot="content"  class="p-5">2. Track tih button i hmelh velah i Tracking page-ah a lo hruai ang che..</p>
        <p slot="content" class="p-5">3. I form submit kha a awmna chin i track khan a lo hrilh zel ang che.</p>
        <p slot="content" class="p-5">4. Payment pek a ngaih chuan screen ah khan a lo lang mai ang.</p>
        <p slot="content" class="p-5">5. Payment online i pek fel tawh chuan lo nghak ang che.</p>
        <p slot="content" class="p-5">6. I form an approve a permit an pek chhuah tawh che chuan i kawng laih tum atanga ni 3 hmain hemi portal hmang hian in-report leh tur a ni e</p>
        

    </badger-accordion-item>
</badger-accordion> 
<!-- </div> -->

 
    

</template>

<script>
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion';

export default {
    name: "Accordian",

        components: {
        BadgerAccordion,
        BadgerAccordionItem
    },

    data() {
        return{

        }

    },

//     methods: {
//     ...
//     onOpenItem() {
//         // Item opened
//     },
//     onCloseItem() {
//         // Item closed
//     }
// }






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
</style>