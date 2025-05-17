<script setup lang="ts">
onMounted(() => {
  useRouteAlert('Login failed')
});
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <a href="#" @click.prevent="useLogout" class="btn btn-danger">Logout</a>
  </div>
</template>
