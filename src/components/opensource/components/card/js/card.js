export default {
    name: "card",
    data() {
        return {
            lastIndex: ''
        }
    },
    props: {
        repo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        getLicenseUrl() {
            return this.repo.html_url + '/blob/master/LICENSE';
        },
        getRepoTitle() {
            // index is zero based so add 1
            return (this.index + 1) + '.&nbsp;' + this.repo.name;
        },
        getWikiUrl() {
            return this.repo.html_url + '/wiki';
        },
        getIndexEntry() {
            // Get the first letter of the name ('B' if name is 'Base64')
            var sFirst = this.repo.name.substr(0, 1);
            // Check if the last processed letter wasn't that name
            if (sFirst !== this.lastIndex) {
                // If no, remember the name and return the letter
                this.lastIndex = sFirst;
                return this.lastIndex;
            }
            // That letter was already processed, return false
            return false;
        }
    },
};
