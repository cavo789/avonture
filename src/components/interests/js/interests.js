import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faCss3Alt,
  faGithub,
  faGrunt,
  faGulp,
  faHtml5,
  faInternetExplorer,
  faJoomla,
  faJsSquare,
  faLaravel,
  faLess,
  faMarkdown,
  faNodeJs,
  faNpm,
  faOsi,
  faPhp,
  faReact,
  faSass,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAngular,
  faCss3Alt,
  faFileExcel,
  faGithub,
  faGrunt,
  faGulp,
  faHtml5,
  faInternetExplorer,
  faJoomla,
  faJsSquare,
  faLaravel,
  faLess,
  faMarkdown,
  faNodeJs,
  faNpm,
  faOsi,
  faPhp,
  faReact,
  faSass,
  faVuejs
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  name: "interests",
  components: {
    library,
    FontAwesomeIcon
  },
  props: {
    interests: {
      type: Object,
      required: true
    }
  },
  methods: {
    getIcon(icon) {
      return [icon.prefix, icon.name];
    }
  }
};
