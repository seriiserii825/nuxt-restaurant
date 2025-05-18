<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const route = useRoute();
const router = useRouter();
const token = route.params.token;

const form = ref({
  email: route.query.email,
  token: token,
  password: "",
  password_confirmation: "",
});
const errors = ref({
  email: "",
  password: "",
  password_confirmation: "",
});

async function onSubmit() {
  try {
    await axiosInstance.post("/admin/reset-password", form.value);
    useSweetAlert("success", "Password reset", "Your password has been reset successfully");
    router.push("/admin/login");
  } catch (error) {
    handleAxiosError(error);
  }
}
</script>

<template>
  <div class="auth-content my-auto">
    <div class="text-center">
      <h5 class="mb-0">Change password</h5>
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
        <FormInput
          v-model="form.password"
          :label="'Password'"
          :placeholder="'Enter password'"
          type="password"
          name="password"
          :error="errors.password" />
      </div>
      <div class="mb-3">
        <FormInput
          v-model="form.password_confirmation"
          :label="'Confirm password'"
          :placeholder="'Enter password again'"
          type="password"
          name="password_confirmation"
          :error="errors.password_confirmation" />
      </div>
      <div class="mb-3">
        <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">
          Change password
        </button>
      </div>
    </form>
  </div>
</template>
