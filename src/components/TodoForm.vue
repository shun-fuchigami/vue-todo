<template>
  <form @submit.prevent="submitNewTodo" class="p-todo-form">
      <BaseInput 
      :type="text"
      :value="todoName"
      :placeholder="'タスク名を入力してください'"
      @inputValue="inputName"
        >
        <template #before>タスク名</template>
      </BaseInput>
      <BaseInput 
        :type="'datetime-local'"
        :value="todoDeadLine"
        @inputValue="inputDeadLine"
        >
        <template #before>締め切り日</template>
      </BaseInput>
    <BaseButton :hasSubmit="true">新規作成</BaseButton>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './base/BaseButton.vue'
import BaseInput from './base/BaseInput.vue'

export default defineComponent({
  components: { BaseButton, BaseInput, },
  data(){
    return {
      todoName:"" as string,
      todoDeadLine:"" as string,
    }
  },
  methods:{
    submitNewTodo(){
      if(this.checkNewTodo){
        const deadLine = this.todoDeadLine.replace("T"," ").replaceAll("-","/")
        this.$store.commit('addTodo',{name:this.todoName,deadLine:deadLine})
        this.todoName = "";
        this.todoDeadLine = "";
      } else {
        alert("タスク名、締め切り日のどちらも入力してください。")
      }
    },
    inputName(value:string){
      this.todoName=value;
    },
    inputDeadLine(value:string){
      this.todoDeadLine=value;
    },
  },
  computed:{
    checkNewTodo():boolean{
      if(!this.todoName || !this.todoDeadLine){
        return false
      } else{
        return true
      }
    },
  }
})
</script>

<style lang="scss" scoped>
.p-todo-form{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.c-base-button {
  width: 100px;
  border-radius: 8px;
}


</style>