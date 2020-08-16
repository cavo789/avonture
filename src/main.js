import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: h =>
    h(App, {
      props: {
        about: {
          firstname: "Christophe",
          lastname: "Avonture",
          pseudo: "cavo789",
          avatar: "src/assets/profile.jpg",
          address: "rue de Pellaines 71, 4287 Racour, Belgique",
          email: "christophe@avonture.be",
          intro:
            "I am passionate about the world of Open Source, programming in recent years mainly in PHP and other web languages. Also an expert in VBA - Excel that I have been practicing for more than twenty years."
        },
        opensource: {
          url: "https://api.github.com/users/cavo789/repos",
          per_page: 100
        },
        page_title:
          "Christophe Avonture aka cavo789 | My Open Source softwares",
        github: "https://github.com/cavo789/avonture",
        interests: {
          intro:
            "I really love to code and love to refactor my code again and again.",
          quote:
            "Vingt fois sur le métier remettez votre ouvrage,<br/>Polissez- le sans cesse, et le repolissez<br>Ajoutez quelquefois, et souvent effacez<br><small>— Nicolas Boileau (1636, 1711) in <cite>L'Art poétique</cite>.</small>",
          languages: [
            {
              icon: { prefix: "fab", name: "markdown" },
              title: "Markdown"
            },
            {
              icon: { prefix: "fab", name: "html5" },
              title: "HTML 5"
            },
            {
              icon: { prefix: "fab", name: "css3-alt" },
              title: "CSS 3"
            },
            {
              icon: { prefix: "fab", name: "laravel" },
              title: "Laravel"
            },
            {
              icon: { prefix: "fab", name: "php" },
              title: "PHP"
            },
            {
              icon: { prefix: "fab", name: "js-square" },
              title: "Javascript"
            },
            {
              icon: { prefix: "fab", name: "vuejs" },
              title: "VueJS"
            },
            {
              icon: { prefix: "fab", name: "angular" },
              title: "Angular"
            },
            {
              icon: { prefix: "fab", name: "react" },
              title: "React"
            },
            {
              icon: { prefix: "fab", name: "node-js" },
              title: "Node JS"
            },
            {
              icon: { prefix: "fab", name: "sass" },
              title: "Sass"
            },
            {
              icon: { prefix: "fab", name: "less" },
              title: "Less"
            },
            {
              icon: { prefix: "fab", name: "joomla" },
              title: "Joomla!"
            },
            {
              icon: { prefix: "fab", name: "gulp" },
              title: "Gulp"
            },
            {
              icon: { prefix: "fab", name: "grunt" },
              title: "Grunt"
            },
            {
              icon: { prefix: "fab", name: "npm" },
              title: "NPM"
            }
          ],
          andmore: [
            {
              icon: { prefix: "fab", name: "github" },
              title: "GitHub"
            },
            {
              icon: { prefix: "fab", name: "osi" },
              title: "Open Source"
            },
            {
              icon: { prefix: "fas", name: "file-excel" },
              title: "MS Excel coding"
            }
          ],
          hate: [
            {
              icon: {
                prefix: "fab",
                name: "internet-explorer"
              },
              title: "The most awful thing to use for surfing on the Internet"
            }
          ]
        },
        socials: [
          {
            icon: {
              prefix: "fab",
              name: "facebook-f"
            },
            title: "Retrieve me on Facebook",
            url: "https://www.facebook.com/christophe.avonture"
          },
          {
            icon: {
              prefix: "fab",
              name: "github"
            },
            title: "My GitHub page",
            url: "https://github.com/cavo789"
          },
          {
            icon: {
              prefix: "fab",
              name: "linkedin-in"
            },
            title: "My LinkedIn Profile",
            url: "https://be.linkedin.com/in/christopheavonture/fr"
          }
        ]
      }
    })
});
