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
          // Get xxx items by page (f.i. 10)
          per_page: this.opensource.per_page
        },
      })
      .then(response => {
        this.repos = response.data;
        this.loading = false;

        // Create an array with just repo's name
        this.names = [];
        for (var i = 0; i < this.repos.length; i++) {
          // Populate the array with repo's name
          this.names.push(this.repos[i].name);
        }

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  },
};
