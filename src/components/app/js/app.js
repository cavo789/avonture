import about from '../../about/about.vue';
import github_corner from "../../github_corner/github_corner.vue";
import interests from "../../interests/interests.vue";
import navigation from '../../navigation/navigation.vue';
import opensource from "../../opensource/opensource.vue";

export default {
    name: 'App',
    components: { about, github_corner, interests, navigation, opensource },
    props: {
        about: {
            type: Object
        },
        page_title: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: false
        },
        interests: {
            type: Object,
            required: false
        },
        opensource: {
            type: Object,
            required: false
        },
        socials: {
            type: Array,
            required: false
        }
    },
    created() {
        // Set the <title></title> of the page
        document.title = this.page_title
    }
};
