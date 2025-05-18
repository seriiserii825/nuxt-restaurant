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
  <div class="auth-page">
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div
          class="col-xxl-3 col-lg-4 col-md-5"
          style="position: relative; z-index: 2; background: white">
          <div class="auth-full-page-content d-flex p-sm-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5 text-center">
                  <NuxtLink to="/" class="d-block auth-logo">
                    <img src="/backend/assets/images/logo-sm.svg" alt="" height="28" />
                    <span class="logo-txt">Minia</span>
                  </NuxtLink>
                </div>
                <slot />
                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    Minia . Crafted with
                    <i class="mdi mdi-heart text-danger"></i>
                    by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- end auth full page content -->
        </div>
        <!-- end col -->
        <div class="col-xxl-9 col-lg-8 col-md-7" style="position: relative; z-index: -1;">
          <div class="auth-bg pt-md-5 p-4 d-flex">
            <div class="bg-overlay bg-primary"></div>
            <ul class="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container fluid -->
  </div>
</template>
