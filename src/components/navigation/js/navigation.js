export default {
    name: "navigation",
    props: {
        avatar: {
            type: String,
            required: false
        },
        firstname: {
            type: String,
            required: false
        },
        lastname: {
            type: String,
            required: false
        }
    },
    computed: {
        fullname() {
            return this.firstname + ' ' + this.lastname
        }
    }
};
