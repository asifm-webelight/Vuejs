export default {
    template: `
    <div>What's Up</div>
    <button :disabled='processing'><slot /></button>
    `,
    data() {
        return{
            processing:true
        }
    },
}