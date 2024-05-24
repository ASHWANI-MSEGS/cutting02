<template>
    <ul class="flex list-reset  font-sans">
        <li v-if="pagination.current_page > 1">
            <a class="block hover:bg-white hover:text-blue-400  border-r  border-l border-t border-b border-black-300 px-3 py-2" 
                href="#"
                @click.prevent="change(pagination.current_page -1)"
            >
                Previous
            </a>
        </li>
         <template v-if="pagination.last_page>1"> 
        <li v-for="page in pages" :key="page" >
            <a :class="[page == pagination.current_page ? ' text-white bg-blue-200 border-r  border-t border-b border-black-300':'hover:text-blue-400 hover:bg-white text-blue border-r  border-t border-b border-black-300', 'block px-3 py-2']" 
               href="#"
               @click.stop="change(page)"
            >
                {{ page }}
            </a>
        </li>
         </template> 
        <li v-if="pagination.current_page < pagination.last_page">
            <a class="block border-r  border-t border-b border-black-300 hover:bg-white hover:text-blue-400 px-3 py-2" 
               href="#"
               @click.prevent="change(pagination.current_page + 1)"
            >
                Next
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            pagination: {
                type: Object,
                required: true
            },
            offset: {
                type: Number,
                default: 4
            }
        },
        computed: {
            pages() {
                if (!this.pagination.to) {
                    return null;
                }
                let from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                let to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                let pages = [];
                for (let page = from; page <= to; page++) {
                    pages.push(page);
                }
                return pages;
            },
        },
        methods: {
            change: function(page) {
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        }
    }
</script>