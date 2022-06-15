<template>
  <div 
    class="p-base-input" 
    :class="{focus}" 
    >
    <label class="c-base-input-label">
      <slot name="before"></slot>
      <input 
        class="c-base-input"
        :type="type" 
        :value="value"
        :placeholder="placeholder"
        @input="inputValue"
        @focus="focusOn"
        @blur="focusOut"
      >
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{
      focus:false,
    }
  },
  props:{
    type:String,
    value:String,
    placeholder:String,
  },
  methods:{
    inputValue(e:Event){
      const target = e.target as HTMLInputElement
      this.$emit('inputValue',target.value)
    },
    focusOn(){
      this.focus = true;
    },
    focusOut(){
      this.focus = false;
    }
  },
})
</script>

<style lang="scss" scoped>


.c-base-input{
  line-height: 1.8;
  padding: 0 8px;
  border: 2px solid var(--main-color);
  border-radius: 8px;
  transition: opacity .3s, transform .3s;
  
  &-label{
    display: grid;
    grid-template-columns: 80px minmax(217px,.5fr);
    gap: 8px;
    align-items: center;
  }

}

.p-base-input{
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

  &.focus{
    opacity: .8;
    transform: scale(1.02);
  }
}


</style>