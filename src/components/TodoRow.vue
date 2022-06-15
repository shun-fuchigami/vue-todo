<template>
  <li class="p-todo-row">
    <div class="c-todo-name">
      {{ todo.name }}
    </div>
    <div class="c-todo-deadLine">
      {{ todo.deadLine }}
    </div>
    <BaseIcon class="c-cancel-icon" :iconClass="'fa-solid fa-rectangle-xmark'" @click="clickIcon"></BaseIcon>
  </li>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import { Todo } from '@/store/index'
import BaseIcon from './base/BaseIcon.vue';


export default defineComponent({
  name:"TodoList",
  components:{
    BaseIcon
  },
  props:{
    todo:{
      type:Object as PropType<Todo>
    },
  },
  methods:{
    clickIcon(){
      this.$emit('clickIcon',this.todo);
    },
  }
})
</script>

<style lang="scss" scoped>
.p-todo-row {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr .3fr;
  gap: 8px;
}

.c-cancel-icon{
  font-size: 20px;
  color: var(--button-color-2);
  cursor: pointer;
  transition: opacity .3s, transform .3s;
}
.c-cancel-icon:hover{
  opacity: .8;
  transform: scale(1.2);
}
.c-cancel-icon:active{
  opacity: 1;
  transform: scale(1.0);
}


</style>
