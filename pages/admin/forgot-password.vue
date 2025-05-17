<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const form = ref({
  email: "",
});
const errors = ref({
  email: "",
});

async function onSubmit(){
  try {
    await axiosInstance.post("/admin/forgot-password", form.value);
    useSweetAlert('success', 'Email sent', 'Please check your email for the reset password link');
  } catch (error) {
    handleAxiosError(error);
  }
}
</script>

<template>
  <div class="container pt-5">
    <h2 class="text-center fw-bold">Forgot password</h2>
    <form @submit.prevent="onSubmit" class="m-auto w-50 pt-5">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="form.email"
          name="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp" />
        <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
