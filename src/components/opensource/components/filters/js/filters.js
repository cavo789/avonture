/*
    Filter an array and keep unique values
    https://stackoverflow.com/a/14438954
*/
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

export default {
    name: "filters",
    data() {
        return {
            filters: []
        }
    },
    props: {
        repos: {
            type: Array,
            required: true
        }
    },
    mounted() {

        // The first entry is "show all"
        this.filters.push('*');

        // Loop and add one entry by language (javascript, css, html, vbscript, ...)
        for (var i = 0; i < this.repos.length; i++) {
            if ((this.repos[i].language !== '') && (this.repos[i].language !== null)) {
                this.filters.push(this.repos[i].language);
            }
        }

        // Keep only unique values
        this.filters = this.filters.filter(onlyUnique);
    },
};
