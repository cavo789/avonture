/*
    Filter an array and keep unique values
    https://stackoverflow.com/a/14438954
*/
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
/*
var Isotope = require('isotope-layout');

var cards = document.querySelector('.cards');

var iso = new Isotope(cards, {
    itemSelector: ".grid-item",
    layoutMode: "fitRows"
});
*/
export default {
    name: "filters",
    data() {
        return {
            filters: [],
            option: {
                getSortData: {
                    id: "id"
                },
                sortBy: "id"
            }
        }
    },
    props: {
        repos: {
            type: Array,
            required: true
        }
    },
    methods: {
        filterRepo(e) {
            // e.target.value will return the value of the button
            // i.e. the value to use for filtering (like "PHP", "Javascript", ...)
            var filterValue = e.target.value;

            alert(filterValue);
            //var filterValue = $(this).attr("data-filter");

            // And filter on that value
            //iso.filter('PHP');
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
