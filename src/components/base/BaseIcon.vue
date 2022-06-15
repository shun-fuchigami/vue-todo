<template>
  <i :class="iconClass"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props:{
    iconClass:{
      type:String,
    }
  },
})
</script>
