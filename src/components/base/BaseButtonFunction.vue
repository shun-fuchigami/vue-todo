<template>
  <button @click="clickButton" class="c-base-button-function">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods:{
    clickButton(){
      this.$emit('clickButton')
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
