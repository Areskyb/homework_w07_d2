import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '.app',
    data:{
      items:[
        {description:'Clean bedroom',isDone:false},
        {description:'Eat',isDone:true},
        {description:'Throw up',isDone:false}
      ],
        newItem:""
    },
    methods:{
      newTodo:function(){
        this.items.push({
          description: this.newItem,
          isDone: false
        })
      },
      checkItem: function(index){
        this.items[index].isDone ? this.items[index].isDone = false : this.items[index].isDone = true
      },
      prioritize: function(){
        console.log('al;fk');
      }
    }
  })
})