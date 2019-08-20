var app = new Vue({
    el: '#app',
    data: {
      message: 'You dont know js',
      title : 'vue js example'
    },
    methods: {
        say(text){
            return 'Hello' + text;
        }
    }
  })
  var app2 = new Vue({
      el:'#app2',
      data:{
          title: 'this is my tiitle when you hover your mouse over',
          link: 'https://vuejs.org/v2/guide/',
          message : 'You loaded page ' + new Date().toLocaleString(),
          price : 10000,
          check : false,
          todos: [
              { text: 'Learn javascript' },
              { text: 'Learn vuejs' },
              { text: 'Build something' }
          ],
          counter : 0,
          clientX : 0,
          clientY : 0
      },
      methods:{
          formatPrice(){
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'VND',
              }).format(this.price);
          },
          handClick(e, number){
              console.log(e);
              this.counter += number;
          },
          handMouse(e){
              console.log(e);
              this.clientX = e.clientX;
              this.clientY = e.clientY;
          }
      }

  })

//click mousemove, mouseover, mouseleave
