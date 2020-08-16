import axios from 'axios';
import card from "../../card/card.vue";
import filters from "../../filters/filters.vue";
import table_of_contents from "../../table_of_contents/table_of_contents.vue";

export default {
  data() {
    return {
      loading: true,
      repos: [],
      names: []
    }
  },
  name: "opensource",
  components: { card, filters, table_of_contents },
  props: {
    github: {
      type: String,
      required: false
    },
    opensource: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Get the list of repositories; run Github API
    axios.get(this.opensource.url,
      {
        params: {
          // Get xxx items by page (f.i. 100)
          per_page: this.opensource.per_page,
          // Get the first 100 public repos
          page: 1
        },
      })
      .then(response => {
        this.repos = response.data;

        // And get repos from 101 till 200
        axios.get(this.opensource.url,
          {
            params: {
              per_page: this.opensource.per_page,
              page: 2
            },
          })
          .then(response => {
            this.repos = this.repos.concat(response.data);

            this.repos.sort();
            this.loading = false;

            // Create an array with just repo's name
            this.names = [];
            for (var i = 0; i < this.repos.length; i++) {
              // Populate the array with repo's name
              this.names.push(this.repos[i].name);
            }
          })
          .catch(error => {
            console.log('Error fetching and parsing data, page 2', error);
          });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  },
};
