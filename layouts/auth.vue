<script lang="ts" setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    },
    {
      rel: "stylesheet",
      href: "/backend/assets/css/icons.min.css",
    },
    {
      rel: "stylesheet",
      href: "/backend/assets/css/app.min.css",
    },
  ],
});
</script>
<template>
  <div class="empty-layout">
    <div class="empty-layout__body">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #ccc;
}
.empty-layout__body {
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 0.5rem;
}
</style>
