import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faStar, faTv } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBook, faGithub, faStar, faTv);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  name: "card",
  components: {
    library,
    faBook,
    faGithub,
    faStar,
    faTv,
    FontAwesomeIcon
  },
  data() {
    return {
      lastIndex: ""
    };
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
      return this.repo.html_url + "/blob/master/LICENSE";
    },
    getRepoTitle() {
      // index is zero based so add 1
      return this.index + 1 + ".&nbsp;" + this.repo.name;
    },
    getWikiUrl() {
      return this.repo.html_url + "/wiki";
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
    },
    getRepoDescription() {

      // Add a small "Archived" info in case of
      var archived = '';
      if (this.repo.archived) {
        archived = "&nbsp;&nbsp;<mark>Archived</mark>";
      }

      // Get the description and replace "**WORD**" by "<mark>WORD</mark>"
      var re = /([^*]*)\*{2}([^*]*)\*{2}([^*]*)/;
      var sDescription = this.repo.description;
      var result = sDescription.replace(re, '$1 <mark>$2</mark> $3');
      return result + archived;
    }
  }
};
