import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookF, faGithub, faLinkedinIn);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  name: "about",
  components: {
    library,
    faFacebookF,
    faGithub,
    faLinkedinIn,
    FontAwesomeIcon
  },
  props: {
    about: {
      type: Object,
      required: false
    },
    socials: {
      type: Array,
      required: false
    }
  },
  computed: {
    link_email() {
      return (
        '<a href="mailto:' +
        this.about.email +
        '"><br/>' +
        this.about.email +
        "</a>"
      );
    },
    title() {
      return (
        this.about.firstname +
        '&nbsp;<span class="text-primary">' +
        this.about.lastname +
        "</span>"
      );
    }
  },
  methods: {
    getIcon(icon) {
      return [icon.prefix, icon.name];
    }
  }
};
