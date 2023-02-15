<template>
  <button class="app-btn" :disabled="disabled" :variant="variant" @click="$emit('click:app-button','hoge')">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  disabled?:boolean
  variant?:"danger"
}
defineProps<Props>()

defineEmits<{(e:"click:app-button",val:string):void}>()

</script>
<style scoped>
.app-btn {
  padding: 1rem;
}
</style>