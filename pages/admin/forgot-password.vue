<script setup lang="ts">
definePageMeta({
  layout: "auth",
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
  <div class="auth-content my-auto">
    <div class="text-center">
      <h5 class="mb-0">Send email</h5>
    </div>
    <form @submit.prevent="onSubmit" class="mt-4 pt-2">
      <div class="mb-3">
        <FormInput
          v-model="form.email"
          :label="'Email'"
          :placeholder="'Enter email'"
          type="email"
          name="email"
          :error="errors.email" />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Resset password</button>
      </div>
    </form>
  </div>
</template>
