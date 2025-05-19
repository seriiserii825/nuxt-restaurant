<script setup lang="ts">
const show = ref(false);
const avatar_img = ref("/backend/assets/images/users/avatar-1.jpg");
</script>

<template>
  <div class="dropdown d-inline-block">
    <button
      @click="show = !show"
      type="button"
      class="btn header-item bg-light-subtle border-start border-end"
      id="page-header-user-dropdown"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <img class="rounded-circle header-profile-user" :src="avatar_img" alt="Header Avatar" />
      <span class="d-none d-xl-inline-block ms-1 fw-medium">Shawn L.</span>
      <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
    </button>
    <div class="dropdown-menu dropdown-menu-end" :class="{ show: show }">
      <!-- item-->
      <NuxtLink class="dropdown-item" to="/admin/profile">
        <i class="mdi mdi mdi-face-man font-size-16 align-middle me-1"></i>
        Profile
      </NuxtLink>
      <a class="dropdown-item" href="auth-lock-screen.html">
        <i class="mdi mdi-lock font-size-16 align-middle me-1"></i>
        Lock Screen
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#" @click.prevent="useLogout">
        <i class="mdi mdi-logout font-size-16 align-middle me-1"></i>
        Logout
      </a>
    </div>
  </div>
</template>
