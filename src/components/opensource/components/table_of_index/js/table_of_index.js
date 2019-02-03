/*
    Filter an array and keep unique values
    https://stackoverflow.com/a/14438954
*/
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

export default {
    name: "table_of_index",
    data() {
        return {
            indexes: []
        }
    },
    props: {
        names: {
            type: Array,
            required: true
        }
    },
    computed: {
        getIndexTable() {

            // Get the index table i.e. a table with the first letter of repos name
            var sIndex = '';

            // Create the index with the first letter of each repo's name
            for (var i = 0; i < this.indexes.length; i++) {
                sIndex += '<a href="#' + this.indexes[i] + '">' + this.indexes[i] + "</a>&nbsp;-&nbsp;";
            }

            if (sIndex !== '') {
                // Remove the last occurence of "&nbsp;-&nbsp;"
                sIndex = sIndex.slice(0, -13);
            }

            return sIndex;
        }
    },
    mounted() {

        // Create an array for the index table i.e. with the first letter of repo's name

        // Keep only the first letter of each name
        // https://stackoverflow.com/a/50021756
        var arrFirst = this.names.map(([v]) => v);

        // Keep only unique values
        this.indexes = arrFirst.filter(onlyUnique);
    },
};
