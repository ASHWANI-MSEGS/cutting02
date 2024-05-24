<template>
    <div class="rounded-full border border-gray-400 text-white bg-blue-400 w-10 h-10 flex justify-center items-center">
        {{ userCircle }}
    </div>
</template>

<script>
    export default {
        name: "UserCircle",

        props: [
            'name',
        ],

        computed: {
            userCircle: function () {

                if((this.name.match(/[A-Z]/g))<1)
                {
                    return this.name.match(/[a-z]/g).slice(0, 2).join('');
                }
                else
                return this.name.match(/[A-Z]/g).slice(0, 2).join('');
            }
        }
    }
</script>

<style scoped>

</style>