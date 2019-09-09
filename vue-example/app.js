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
        activeColor: 'red',
        fontSize: 20,

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
var app5 = new Vue({
    el: '#app5',
    data: {
        isActiveForm: 'login',
        loginType: 'username',
        employees: [{
                name: "Ram",
                email: "ram@gmail.com",
                age: 23
            },
            {
                name: "Shyam",
                email: "shyam23@gmail.com",
                age: 28
            },
            {
                name: "John",
                email: "john@gmail.com",
                age: 33
            },
            {
                name: "Bob",
                email: "bob32@gmail.com",
                age: 41
            }
        ],
        scores: {
            math: 9.0,
            english: 7.0,
            physics: 8.5

        },
        arrUsers: [{
                email: 'user1@gmail.com',
                isActive: false
            },
            {
                email: 'user2@gmail.com',
                isActive: true
            },
            {
                email: 'user3@gmail.com',
                isActive: false
            },
            {
                email: 'user4@gmail.com',
                isActive: true
            },
            {
                email: 'user5@gmail.com',
                isActive: false
            }

        ]

    },
    methods: {
        changleForm(tab) {
            this.isActiveForm = tab;
        }
    },
    computed: {
        // normal syntax
        usersActive() {
            return this.arrUsers.filter(function (u) {
                return u.isActive === true;
            })

        },
        //es6 syntax
        usersAcitveDemo() {
            return this.arrUsers.filter((u) => {
                return u.isActive === true;
            })
        }
    }

})

var app6 = new Vue({
    el: '#app6',
    data: {
        title: "Giày thể thao sneaker nữ vải cổ cao ngôi sao phong cách ulzzang hàn quốc giá rẻ màu trắng màu đen màu đỏ màu vàng chất siêu đẹp",
        priceOrigin: 100000,
        priceSale: 0.2,
        selectedProduct: 0,
        listProductDetails: [{
                qty: 5,
                textColor: "Mau vang",
                image: "//vn-test-11.slatic.net/p/8101441891052007225dacd265e8a5c6.jpg_80x80q80.jpg_.webp"
            },
            {
                qty: 0,
                textColor: "Mau do",
                image: "//vn-test-11.slatic.net/p/6af685f574d3af2a9fb1ea5a152ef9ad.jpg_80x80q80.jpg_.webp"

            }, {
                qty: 4,
                textColor: "Mau den",
                image: "//vn-test-11.slatic.net/p/b7956e7b7336aa086a248e0a9bd8e20f.jpg_80x80q80.jpg_.webp"
            }
        ]

    },
    methods: {
        handClick(e, index) {
            console.log(e, index);
            this.selectedProduct = index;
        },
        classActive(index) {
            return {
                activeproduct: this.selectedProduct === index
            }

        }

    },
    computed: {
        formatPrice() {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
            }).format(this.priceOrigin);
        },
        priceSaleOff() {
            var lastPrice = this.priceOrigin - this.priceOrigin * this.priceSale
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
            }).format(lastPrice);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetails[index];
        }

    }
})
//click mousemove, mouseover, mouseleave
