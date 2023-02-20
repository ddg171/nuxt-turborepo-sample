<template>
  <h1 :data-trantision="trantision">
    <slot />
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  trantision: string
}>()

</script>
