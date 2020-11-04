Vue.component('nav-bar', {
    template: `
        <div>
            <nav>
                <div class="name"><a href="/">Yogisha</a></div>
                <ul class="nav-bar">
                    <slot></slot>
                </ul>
                <nav-burger><nav-menu></nav-menu></nav-burger>
            </nav>         
        </div>
        
    `
});
Vue.component('nav-burger', {
    template: `
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    `
});
Vue.component('nav-menu', {
    template: `
        <div class=navbar-menu><slot class="navbar-item"></slot></div>
    `
});
Vue.component('topic', {
    template: `
        
        <div class="topics"><slot></slot></div>

    `
});//need to work on the project component to make it in a grid
Vue.component('project', {
    template: `
        <div class="column is-one-third p-16">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <slot><slot name="pic"></slot>
                <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                        <slot name="project-name"></slot></div>
                    </div></slot>
            </div>
         </div> 
    `
});

const port = new Vue({
    el: '#app',
});