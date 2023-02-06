export default {
    template: `
    <form @submit.prevent = "add" class="mt-5">
        <div class = "border border-gray-600 text-black flex">
            <input v-model = "newAssignment" placeholder = "New Assignment..."/>
            <button type = "submit" class = "bg-white p-2 border-l">ADD</button>
        </div>
    </form>
    `,

    // props:{
    //     assignments: Array
    // },
    date() {

        return {

            newAssignment: ''
        }
    },

    methods: {

        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = ' ';

        }
    }
}