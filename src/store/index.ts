import { createStore, Store } from 'vuex'


export interface Todo {
  id:number,
  name:string,
  deadLine:string,
  isDone:boolean,
}

export default createStore({
  state: {
    todos:[
      {
        id:0,
        name:"todo1",
        deadLine: "2022/06/15 20:33",
        isDone:false,
      }, 
      {
        id:1,
        name:"todo2",
        deadLine: "2022/06/15 20:33",
        isDone:false,
      }, 
      {
        id:2,
        name:"todo3",
        deadLine: "2022/06/15 20:33",
        isDone:true,
      }, 
    ] as Todo[]
  },
  getters: {
    getAllTodos(state):Todo[]{
      return state.todos;
    },
    getDoneTodos(state):Todo[]{
      return state.todos.filter(todo=>{
        return todo.isDone
      })
    },
    getNotDoneTodos(state):Todo[]{
      return state.todos.filter(todo=>{
        return !todo.isDone
      })
    },
  },
  mutations: {
    addTodo(state, todo:{name:string,deadLine:string}):void{
      const ids = state.todos.map(todo=>{
        return todo.id
      })

      const nextId:number = ids.reduce((previous,next)=>{
        return previous < next ? next : previous; 
      })

      console.log(nextId);

      const newTodo:Todo= {
        id:nextId,
        name:todo.name,
        deadLine:todo.deadLine,
        isDone:false,
      } 

      state.todos.push(newTodo);
    },
    updateIsDone(state,id:number):void{
      state.todos = state.todos.map(todo=>{
        todo.id === id ? todo.isDone = !todo.isDone : null;
        return todo;
      })
    },
    deleteTodo(state,id:number):void{
      state.todos = state.todos.filter(todo=>{
        return todo.id !== id ;  
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
