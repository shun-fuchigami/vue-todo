<template>
  <ul class="p-todo-list">
    <li class="c-todo-list-title">
      <div>タスク名</div>
      <div>締め切り日</div>
      <div>削除</div>
    </li>
    <TodoRow 
      class="c-todo-row"
      v-for='todo in $store.getters.getAllTodos' 
      :key="todo.id"
      :todo="todo"
      @clickIcon="clickIcon"
      />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoRow from '@/components/TodoRow.vue'
import {Todo} from '@/store/index'

export default defineComponent({
  name:"TodoList",
  components:{
    TodoRow,
  },
  methods:{
    clickIcon(todo:Todo){
      this.$store.commit('deleteTodo',todo.id)
    }
  }
})
</script>

<style lang="scss" scoped>
  .c-todo-row + .c-todo-row{
    margin-top: 8px;
  }

  .p-todo-list{
    border: 2px solid var(--main-color);
    border-radius: 8px;
    padding: 16px;
  }

  .c-todo-list-title{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr .3fr;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

</style>
