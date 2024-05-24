import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            // component: Dashboard,
            component: () =>import( "./components/Dashboard"),
            meta: { title: 'Welcome' }
        },

        /// this is for the admin to go to different div dashboard
        {
            path: '/div_dashboard/:id',
            // component: Dashboard,
            component: () =>import( "./components/Dashboard"),
            meta: { title: 'Welcome' }
        },

        {
           path: '/amountDetails',
         //   component: AmountDetails,
         component: () =>import("./views/common/AmountDetails"),
           meta: { title: 'Amount Received Details'}
        },

        {
                path:'/registerr',
               //  component: Register,
               component: () =>import("./views/Register"),
                meta:{title: 'Registration Page'}

        },

        {
            path:'/form',
            //  component: Form,
             component: () =>import("./views/common/Form"),
            meta:{ title: 'Fill Up Form'}
            // component:require('./components/Register')
        },

         {
            path:'/formSubmitSuccess/:id',
            // component: FormSubmitSuccess,
            component: () =>import("./views/common/FormSubmitSuccess"),
            meta:{ title: 'Form Submit Success'}
         },

         {
        path: '/formList',
      //   component: FormList,
        component: () =>import("./components/FormList"),
        meta:{ title: 'Form List'}
         },



        {
           path: '/formListUnCO',
         //   component: FormListUnapprovedCO,
         component: () =>import("./components/FormListUnapprovedCO"),
           meta:{title: 'Form List To Be Send to EE for Approval'}
        },




     {
        path: '/formListUnCO/:id',
      //   component: FormShowCO,
        component: () =>import("./components/FormShowCO"),
        meta: {title: 'Form Show'}
     },

     {
        path:'/localcouncilAdd',
      //   component: LocalcouncilAdd,
        component: () =>import("./views/localcouncil/LocalCouncilAdd"),
        meta:{ title: 'Add  New Local Council'}
     },

     {
        path:'/localcouncilView',
      //   component: LocalcouncilView,
        component: () =>import("./views/localcouncil/LocalCouncilView"),
        meta:{ title: 'Local Council View'}
     },


   //   SDO

      {
       path:'/UnEstimateFormList',
      //  component: UnEstimateFormList,
       component: () =>import("./views/SDO/UnEstimateFormList"),
       meta:{ title: 'UnEstimate Form List'}
      },

      {
         path:'/estimateCalculator/:id',
         // component: EstimateCalculatorShow,
         component: () =>import("./views/SDO/EstimateCalculatorShow"),
         meta:{ title: 'Enter Estimate'}
      },


     {
      path:'/UnapprovedEstimatedLIst',
      // component: UnapprovedEstimatedList,
      component: () =>import("./views/SDO/UnapprovedEstimatedList"),
      meta:{ title: 'Unapproved Estimated List'}
      },


      {
         path:'/ApprovedEstimatedList',
         // component: ApprovedEstimatedList,
         component: () =>import("./views/SDO/ApprovedEstimatedList"),
         meta:{ title: 'Approved Estimated List'}
      },

      {
         path: '/estimateSubmitSuccess',
         // component: EstimateSubmitSuccess,
         component: () =>import("./views/SDO/EstimateSubmitSuccess"),
         meta: { title: 'Estimate Submitted'}
      },
      {
         path: '/estimateSubmitUnsuccess',
         // component: EstimateSubmitSuccess,
         component: () =>import("./views/SDO/EstimateSubmitUnsuccess"),
         meta: { title: 'Estimate Submitt Status'}
      },

      {
         path:'/EstimateShowSDO/:id',
         // component: EstimateShowSDO,
         component: () =>import("./views/SDO/EstimateShowSDO"),
         meta:{ title: 'Estimated Show'}
      },




      // EE

      {
         path: '/formListUn',
         // component: FormListUn,
         component: () =>import("./views/EE/FormListUn"),
         meta:{ title: 'Unapproved Form List '}
      },

      {
         path: '/formRejectedList',
         // component: FormListUn,
         component: () =>import("./views/EE/FormRejectedList"),
         meta:{ title: 'Rejected Form List '}
      },


     {
         path: '/assigned/:id',
         // component: AssignedShow,
         component: () =>import("./views/EE/AssignedShow"),
         meta: {title: 'Assssment for Road Indemnification '}
      },

      {
         path: '/formList/:id',
         // component: FormShow,
         component: () =>import("./views/EE/FormShow"),
         meta: {title: 'User Form'}

       },

      {
         path:'/UnapprovedEstimatedListEE',
         // component: UnapprovedEstimatedListEE,
         component: () =>import("./views/EE/UnapprovedEstimatedListEE"),
         meta:{ title: 'Unapproved Estimated List'}
      },

      {
           path:'/EstimateShowEE/:id',
           // component: EstimateShowEE,
           component: () =>import("./views/EE/EstimateShowEE"),
          meta:{ title: 'Estimated Show'}
      },



      //common
      {
         path:'/EstimateShowfromTrack/:id',
         // component: EstimateShowfromTrack,
         component: () =>import("./views/common/EstimateShowfromTrack"),
         meta:{ title: 'Estimate Show'}
      },


      {
         path:'/grantedList',
         // component: GrantedList,
         component: () =>import("./views/grant/GrantedList"),
         meta: {title: 'Granted List'}
      },

      {
         path:'/allgrantedList',
         // component: GrantedList,
         component: () =>import("./views/grant/AllGrantedList"),
         meta: {title: 'Granted List'}
      },

      {
         path:'/ungrantedList',
         // component: UngrantedList,
         component: () =>import("./views/grant/UngrantedList"),
         meta: {title: 'Ungranted List'}
      },

       {
          path:'/grantedShow/:id',
         //  component: GrantedShow,
          component: () =>import("./views/grant/GrantedShow"),
          meta: {title: 'Granted Show'}
       },

       {
          path:'/ungrantedShow/:id',
          // component: UngrantedShow,
          component: () =>import("./views/grant/UngrantedShow"),
          meta: {title: 'Ungranted Show'}
       },

      {
         path:'/grantSuccessShow',
         // component: GrantSuccessShow,
         component: () =>import("./views/grant/GrantSuccessShow"),
         meta: {title: 'Granted Success'}
      },



      //Payment

       {
          path:'/paymentPage/:id',
          // component: PaymentPage,
          component: () =>import("./views/payment/PaymentPage"),
          meta:{title: 'Payment Page'}
       },

       {
          path:'/paymentSuccess/:id',
          // component: PaymentSuccess,
          component: () =>import("./views/payment/PaymentSuccess"),
          meta: {title: 'Payment Success'}

       },

       {
          path:'/paymentsuccessList',
          // component: PaymentSuccessList,
          component: () =>import("./views/payment/PaymentSuccessList"),
          meta: {title: 'Payment Success List'}
       },

       {
          path:'/paymentunsuccessList',
          // component: PaymentUnsuccessList,
          component: () =>import("./views/payment/PaymentUnsuccessList"),
          meta: {title: 'Payment Unsuccess List'}
       },

       {
         path:'/paymentPendingList',
         // component: PaymentUnsuccessList,
         component: () =>import("./views/payment/PaymentPendingList"),
         meta: {title: 'Payment Pending List'}
      },


       {
          path:'/paymentShow/:id',
          component: () => import("./views/payment/PaymentShow") ,
          meta: {title: 'Successful Payment Show'}
       },

       {
         path:'/paymentShowUn/:id',
         component: () => import("./views/payment/PaymentUnsuccessShow"),
         meta: {title: 'Unsuccessful Payment Show'}
      },


      {
         path: '/paymentHandler/:id',
         // component: PaymentHandler,
         component: () =>import("./views/payment/PaymentHandler"),
         meta: { title: 'Payment Handler'}
      },

            //
        {
            path: '/Loggin',
            // component: Login,
            component: () =>import("./views/Login"),
            meta:{title: 'Login Page'}

        },

        {
            path: '/search',
            // component: SearchFormBar,
            component: () =>import("./components/SearchBarForm"),

        },



/// for admin local council view of specific districts
        {
           path: '/districtDivision',
           // component: DistrictDivision,
           component: () =>import("./views/localcouncil/DistrictDivision"),
           meta: {title: 'District Division'}
        },


        {
            path: '/adminlocalcouncilList/:id',
            // component: LocalCouncilList,
            component: () =>import("./views/localcouncil/AdminLocalCouncilList"),
            meta: {title: 'Localcouncil/Village council List'}
         },
////////////////////////////////////////////////////////////////////////////////
        {
           path: '/localcouncilList',
           // component: LocalCouncilList,
           component: () =>import("./views/localcouncil/LocalCouncilList"),
           meta: {title: 'Localcouncil/Village council List'}
        },

        {
           path:'/userlist',
           // component: UserList,
           component: () =>import("./views/UserList"),
           meta: {title: 'User List'}
        },

        {
           path:'/profile',
           // component: Profile,
           component: () =>import("./views/Profile"),
           meta: {title: 'Profile'}
        },

        {
           path:'/localcouncilShow/:id',
           // component: LocalCouncilShow,
           component: () =>import("./views/localcouncil/LocalCouncilShow"),
           meta:{title: 'Show Local Council'}
        },

        {
           path:'/successful',
           // component: Successful,
           component: () =>import("./views/Successful"),
           meta:{title: 'Success'}
        },


        {
           path:'/',
         //   component: LandingPage,
         component: () =>import( "./unauthenticate/LandingPage"),
           meta:{title: 'Road Cutting',
           showNavbar: false}
        },

        {
           path:'/instructionPage',
           component: () =>import( "./unauthenticate/InstructionPage"),
           meta:{title: 'Instruction',
           showNavbar: false}

        },

        {
           path: '/submitSuccess/:id',
           // component: submitSuccess,
           component: () =>import("./unauthenticate/submitSuccess"),
           meta:{tilte: 'Form Submit Success',
           showNavbar: false}
        },


        //Track Form
        {
         path:'/trackForm',
         // component: TrackForm,
         component: () =>import("./views/TrackForm"),
         meta:{ title: 'Track Form'}
      },
      {
         path:'/trackFormLanding',
         // component: TrackFormLanding,
         component: () =>import("./unauthenticate/TrackFormLanding"),
         meta:{ title: 'Track Form'}
      },


      //Report Form

      {
         path: '/reportFormLanding',
         // component: ReportFormLanding,
         component: () =>import("./unauthenticate/ReportFormLanding"),
         meta:{ title: 'Report'}
      },

      {
         path: '/reportDateSuccess/:id',
         // component: reportDateSuccess,
         component: () =>import("./unauthenticate/reportDateSuccess"),
         meta:{ title: 'Report Date Success'}
      },

      {
         path: '/reportCompleteSuccess/:id',
         // component: reportCompleteSuccess,
         component: () =>import("./unauthenticate/reportCompleteSuccess"),
         meta:{ title: 'Report Complete Success'}
      },

      {
         path: '/reportDateList',
         // component: ReportDateList,
         component: () =>import("./views/EE/ReportDateList"),
         meta: {title: 'Report Date List'}
      },

      {
         path: '/reportDateShow/:id',
         // component: ReportDateShow,
         component: () =>import("./views/EE/ReportDateShow"),
         meta: {title: 'Report Date Show'}
      },

      {
         path: '/reportCompleteList',
         // component: ReportCompleteList,
         component: () =>import("./views/EE/ReportCompleteList"),
         meta: {title: 'Report Completed List'}
      },

      {
         path: '/reportCompleteShow/:id',
         // component: ReportCompleteShow,
         component: () => import("./views/EE/ReportCompleteShow"),
         meta: {title: 'Report Complete Show'}
      },


      //Refund
      {
         path: '/refundUnrefundList',
         // component: RefundUnrefundList,
         component: () =>import("./views/EE/RefundUnrefundList"),
         meta: {title: 'Unrefunded List'}
      },

      {
         path: '/refundRefundedList',
         // component: RefundRefundedList,
         component: () =>import("./views/EE/RefundRefundedList"),
         meta: {title: 'Refunded List'}
      },

      {
         path: '/refundFineList',
         // component: RefundFineList,
         component:() =>import("./views/EE/RefundFineList"),
         meta: {title: 'Fine List'}
      },
// original code start for modification
// {
//     path: '/refundShow/:id',
//     // component: RefundShow,
//     component: () =>import("./views/EE/RefundShow"),
//     meta: {title: 'Refund/Fine  Show'}
//  },
// original code end for modification
      {
         path: '/refundShow/:id',
         // component: RefundShow,
         component: () =>import("./views/EE/RefundShow"),
         meta: {title: 'Refund  Show'}
      },

      {
         path: '/refundUnrefundShow/:id',
         // component: RefundUnrefundShow,
         component: () =>import("./views/EE/RefundUnrefundShow"),
         meta: {title: 'To Be Refund  Show'}
      },

      {
         path: '/refundFineShow/:id',
         // component: RefundFineShow,
         component: () =>import("./views/EE/RefundFineShow"),
         meta: {title: 'Fine'}
      },


      //Engineer

      {
         path: '/engineerAdd',
         // component: EngineerAdd,
         component: () =>import("./views/engineer/EngineerAdd"),
         meta:{ title: 'Add Engineer'}
      },

      {
         path: '/engineerList',
         // component: EngineerList,
         component: () =>import("./views/engineer/EngineerList"),
         meta:{ title: 'Engineer List'}
      },

      {
         path: '/engineerShow/:id',
         // component: EngineerShow,
         component: () =>import("./views/engineer/EngineerShow"),
         meta:{ title: 'Engineer Details'}
      },

      //Granted Permission show
      {
         path:'/PermissionShow/:id',
         // component: PermissionShow,
         component: () =>import("./unauthenticate/PermissionShow"),
        meta: {title: 'Permission Show'}
     },


      //User

      {
         path: '/userAdd',
         // component: UserAdd,
         component: () =>import("./views/user/UserAdd"),
         meta:{ title: 'Add User'}
      },


      {
         path: '/userDeleteSuccess',
         // component: UserAdd,
         component: () =>import("./views/user/DeleteSuccess"),
         meta:{ title: 'Delete Success'}
      },

      //Feature
      {
         path: '/feature',
         // component: FeatureShow,
         component: () =>import("./views/feature/FeatureShow"),
         meta: {title: 'Feature Show'}
      },



    ],
    mode: 'history'
});
