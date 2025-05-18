<script setup lang="ts">
onMounted(() => {
  useRouteAlert('Login failed')
});
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <a href="/admin/login" class="btn btn-success">Login</a>
    <a href="#" @click.prevent="useLogout" class="btn btn-danger">Logout</a>
  </div>
</template>
