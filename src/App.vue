<template>
  <TodoView></TodoView>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'normalize.css';
import TodoView from '@/components/TodoView.vue'

export default defineComponent({
  name: 'App',
  components: {
    TodoView
  }
});
</script>

<style lang="scss">
body{
  --main-color:#2E038C;
  --button-color:#2E038C;
  --button-color-2:#F20587;
}

ul{
  padding: 0;
}


</style>
