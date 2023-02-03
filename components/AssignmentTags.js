export default {
    template: `
    <div class = "flex gap-2">
    <button 
        v-for = "tag in tags" 
        @click = "$emit('change', tag)"
        class = "border rounded px-1 py-px text-xs"
        :class = "{
            'border-blue-500 text-blue-500':tag === currentTag
        }"
        >{{ tag }}</button>
    </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    }
    ,

    // data() {
    //     return {
    //         currentTag: 'all'
    //     }
    // },

    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)]
        }
    }
}