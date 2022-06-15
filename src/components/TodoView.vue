<template>
  <div class="p-todo-view">
    <h1>TODO-LIST</h1>
    <TodoForm></TodoForm>
    <TodoLists></TodoLists>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoLists from './TodoLists.vue'
import TodoForm from '@/components/TodoForm.vue'

export default defineComponent({
  name:"TodoList",
  components:{
    TodoLists,
    TodoForm,
  }
})
</script>

<style lang="scss" scoped>
  h1 {
    color: #fff;
    background-color: var(--main-color);
    border-radius: 0 0 8px 8px;
    margin-top: 0;
    margin-bottom: 100px;
    padding: 8px;
    padding-top: 50px;
    text-align: center;
    widows: 100%;
  }
  .p-todo-view{
    margin: 0 auto;
    padding: 0 8px;
    max-width: 800px;
    height: calc(100vh - 100px);
  }
</style>
