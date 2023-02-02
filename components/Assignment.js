export default {
    template: `
    <li>

    <label class="p-2 flex ">

        <input type="checkbox" v-model="assignment.complete" class="mr-4">

        {{assignment.name}}

    </label>

</li>
    `,

    props: {
        assignment: Object
    }
}