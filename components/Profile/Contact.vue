<script setup lang="ts">
const props = defineProps({
  data: String,
});
</script>

<template>
  <div v-if="data">
    <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
    {{ data }}
  </div>
</template>
