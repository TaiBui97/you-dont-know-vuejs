var app = new Vue({
    el: '#app',
    data: {
        message: 'You dont know js',
        title: 'vue js example'
    },
    methods: {
        say(text) {
            return 'Hello' + text;
        }
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        title: 'this is my tiitle when you hover your mouse over',
        link: 'https://vuejs.org/v2/guide/',
        message: 'You loaded page ' + new Date().toLocaleString(),
        price: 10000,
        check: false,
        todos: [{
                text: 'Learn javascript'
            },
            {
                text: 'Learn vuejs'
            },
            {
                text: 'Build something'
            }
        ],
        counter: 0,
        clientX: 0,
        clientY: 0
    },
    methods: {
        formatPrice() {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
            }).format(this.price);
        },
        handClick(e, number) {
            console.log(e);
            this.counter += number;
        },
        handMouse(e) {
            console.log(e);
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        handMouseChild(e) {
            //e.stopPropagation(); //prevent effect to parent element box

            console.log('handMouseChild', e.target);

        }
    }
})
var app3 = new Vue({
    el: '#app3',
    data: {
        myName: '',
        message: "hello",
        a: 0,
        b: 0,
        number: 20
    },
    methods: {
        handSubmit(e) {
            console.log(e);
            e.preventDefault(); // prevent change page

        },
        handKeyUp(e) {
            this.myName = e.target.value;
        }
        // addA(){
        //     console.log('() A add Run');
        //     return this.a + this.number
        // },
        // addB(){
        //     console.log('() B add Run');
        //     return this.b + this.number
        // }
    },
    computed: {
        addA() {
            console.log('() A add Run');
            return this.a + this.number
        },
        addB() {
            console.log('() B add Run');
            return this.b + this.number
        }
    }
})


var app4 = new Vue({
    el: '#app4',
    data: {
        isActive: true,
        isError: false,
        backgroundImage: 'https://videohive.img.customer.envatousercontent.com/files/cb7508c9-cb21-4131-9cfc-369412411804/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=dfb01d793ada1c3be4a485070113d8c8',
        activeColor : 'red',
        fontSize : 20,

    },
    methods: {
        changleActive() {
            this.isActive = !this.isActive;
        },
        changleError() {
            this.isError = !this.isError;
        }
    },
    computed: {
        objClass() {
            return {
                active: this.isActive,
                error: this.isError
            }
        },
        urlImg() {
            return {
                backgroundImage: 'url(' + this.backgroundImage + ')',
                marginLeft: '20px',
                fontSize: '20px'
            }
        }
    }

})


//click mousemove, mouseover, mouseleave
