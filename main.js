Vue.component("topic", {
  template: `
        
        <div class="topics"><slot></slot></div>

    `,
}); //need to work on the project component to make it in a grid
Vue.component("project", {
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
    `,
});
Vue.component("contact", {
  template: `
        <div>
            <ul class="social has-text-centered">
                <li>
                    <slot></slot>
                </li>
            </ul>
        </div>
    `,
});

const port = new Vue({
  el: "#app",
  data: {
    showNav: false,
  },
});
