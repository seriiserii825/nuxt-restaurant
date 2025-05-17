<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"]
});

onMounted(() => {
  useRouteAlert('Login failed')
});
</script>
<template>
  <div class="dashboard">
    <div class="container">
      <h3>Dashboard</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat alias qui nam
        dignissimos dolorem, ab minus accusamus doloremque itaque illum recusandae, possimus hic
        nobis perspiciatis culpa. Eligendi, ullam minus?
      </p>
      <a @click.prevent="useLogout" href="#" class="btn btn-success">Logout</a>
    </div>
  </div>
</template>
