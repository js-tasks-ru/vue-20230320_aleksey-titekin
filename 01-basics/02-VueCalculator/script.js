import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const app = createApp({
    data() {
        return {
            a: 0,
            b: 0,
            picked: ''
        }
    },

    computed: {
        calcResult() {
            let c =0;
            switch (this.picked) {
                case 'sum': 
                    c = this.a + this.b;
                    break;
                case 'subtract': 
                    c = this.a - this.b;
                    break;
                case 'multiply':
                    c = this.a * this.b;
                    break;
                case 'divide':
                    c = this.a / this.b;
                    break;
            }
            return c;
        }
    }
})

const vm = app.mount('#app')