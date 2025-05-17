<script lang="ts" setup>
useHead({
  link: [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" },
  ],
});
</script>
<template>
  <div class="default-layout">
    <p>Some default layout content shared across all pages</p>
    <slot />
  </div>
</template>
