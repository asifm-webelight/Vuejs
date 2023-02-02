import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {

    components: { AssignmentList, AssignmentCreate },
    template: `
    <section>
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>

        <assignment-list :assignments="filters.completed" title="Completed" class="mt-5"></assignment-list>
 
        <assignment-create @add = "add"></assignment-create>
    </section>
    `,

    data() {

        return {
            assignments: [
                { name: 'Java', complete: false, id: 1, tag: 'Back-End' },
                { name: 'Laravel', complete: false, id: 2, tag: 'Back-End' },
                { name: 'Vuejs', complete: false, id: 3, tag: 'Front-End' },
                { name: 'React Js', complete: false, id: 4, tag: 'Front-End' },
                { name: 'Node Js', complete: false, id: 5, tag: 'Back-End' },
            ],
        }
    },

    computed: {

        // inProgress() {
        //     return this.assignments.filter(assignment => !assignment.complete)
        // },
        // completed() {
        //     return this.assignments.filter(assignment => assignment.complete)
        // }

        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }

    }

}