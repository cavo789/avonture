import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App, {
        props: {
            about:
            {
                firstname: 'Christophe',
                lastname: 'Avonture',
                pseudo: 'cavo789',
                avatar: 'src/assets/profile.jpg',
                address: 'rue de Pellaines 71, 4287 Racour, Belgique',
                email: 'christophe@avonture.be',
                intro: 'I am passionate about the world of Open Source, programming in recent years mainly in PHP and other web languages. Also an expert in VBA - Excel that I have been practicing for more than twenty years.',
            },
            opensource: {
                url: 'https://api.github.com/users/cavo789/repos',
                per_page: 100
            },
            page_title: 'Christophe Avonture aka cavo789 | My Open Source softwares',
            github: 'https://github.com/cavo789/avonture',
            interests: {
                intro: 'I really love to code and love to refactor my code again and again.',
                quote: 'Vingt fois sur le métier remettez votre ouvrage,<br/>Polissez- le sans cesse, et le repolissez<br>Ajoutez quelquefois, et souvent effacez<br><small>— Nicolas Boileau(1636, 1711) in<cite>L\'Art poétique</cite>.</small>',
                languages: [
                    { icon: 'fab fa-markdown', title: 'Markdown' },
                    { icon: 'fab fa-html5', title: 'HTML 5' },
                    { icon: 'fab fa-css3-alt', title: 'CSS 3' },
                    { icon: 'fab fa-laravel', title: 'Laravel' },
                    { icon: 'fab fa-php', title: 'PHP' },
                    { icon: 'fab fa-js-square', title: 'Javascript' },
                    { icon: 'fab fa-vuejs', title: 'VueJS' },
                    { icon: 'fab fa-angular', title: 'Angular' },
                    { icon: 'fab fa-react', title: 'React' },
                    { icon: 'fab fa-node-js', title: 'Node JS' },
                    { icon: 'fab fa-sass', title: 'Sass' },
                    { icon: 'fab fa-less', title: 'Less' },
                    { icon: 'fab fa-joomla', title: 'Joomla!' },
                    { icon: 'fab fa-gulp', title: 'Gulp' },
                    { icon: 'fab fa-grunt', title: 'Grunt' },
                    { icon: 'fab fa-npm', title: 'NPM' },
                ],
                andmore: [
                    { icon: 'fab fa-github', title: 'GitHub' },
                    { icon: 'fab fa-osi', title: 'Open Source' },
                    { icon: 'fas fa-file-excel', title: 'MS Excel coding' },
                ],
                hate: [
                    { icon: 'fab fa-internet-explorer', title: 'The most afwul thing to use for surfing on the Internet' }
                ],
            },
            socials: [
                { title: 'Retrieve me on Facebook', url: 'https://www.facebook.com/christophe.avonture', icon: 'fab fa-linkedin-in' },
                { title: 'My GitHub page', url: 'https://github.com/cavo789', icon: 'fab fa-github' },
                { title: 'My LinkedIn Profile', url: 'https://be.linkedin.com/in/christopheavonture/fr', icon: 'fab fa-facebook-f' }
            ]
        }
    }),
});
