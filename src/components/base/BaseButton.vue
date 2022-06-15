<template>
  <button
    :type="hasSubmit?'submit':null" 
    @click="hasFunction?clickButton:null" 
    class="c-base-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    hasSubmit:{
      type:Boolean,
      default:false,
    },
    hasFunction:{
      type:Boolean,
      default:false,
    },
  },
  methods:{
    clickButton(){
      this.$emit('clickButton')
    },
  },
})
</script>

<style lang="scss" scoped>
.c-base-button {
  background-color: var(--button-color);
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 50%;
  transition: opacity .3s, transform .3s;

  &:hover{
    cursor: pointer;
    opacity: .8;
    transform: scale(1.02);
  }

  &:active{
    opacity: 1;
    transform: scale(1);
  }
}


</style>
