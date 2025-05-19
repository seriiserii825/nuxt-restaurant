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
useGetUserApi();
</script>
<template>
  <div class="admin-layout">
    <AdminHeader />
    <AdminSidebar />
    <div style="padding-left: 250px;">
      <slot />
    </div>
  </div>
</template>
