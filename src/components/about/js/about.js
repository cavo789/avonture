export default {
    name: "about",
    props: {
        about: {
            type: Object,
            required: false
        },
        socials: {
            type: Array,
            required: false
        },
    },
    computed: {
        link_email() {
            return '<a href="mailto:' + this.about.email + '"><br/>' + this.about.email + '</a>';
        },
        title() {
            return this.about.firstname + '&nbsp;<span class="text-primary">' + this.about.lastname + '</span>';
        }
    }
};
