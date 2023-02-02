export default {
    template: `
    <form @submit.prevent = "add">
        <div class = "border border-gray-600 mt-5 text-black">
            <input v-model = "newAssignment" placeholder = "New Assignment..." class = "p-2"/>
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