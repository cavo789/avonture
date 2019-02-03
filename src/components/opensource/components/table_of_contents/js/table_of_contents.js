export default {
    name: "table_of_contents",
    data() {
        return {
            TOC: ''
        }
    },
    props: {
        names: {
            type: Array,
            required: true
        }
    },
    computed: {
        getTOC() {
            // Create the table of contents
            this.TOC = '';

            // Just create links to any repos
            for (var i = 0; i < this.names.length; i++) {
                this.TOC += '<a href="#' + this.names[i] + '">' + this.names[i] + "</a>&nbsp;-&nbsp;";
            }

            if (this.TOC !== '') {
                // Remove the last occurence of "&nbsp;-&nbsp;"
                this.TOC = this.TOC.slice(0, -13);
            }

            return this.TOC;
        },
    }
};
