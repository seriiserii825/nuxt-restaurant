<script setup lang="ts">
import { useRoute } from "vue-router";

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

async function onSubmit(){
  try {
    await axiosInstance.post("/admin/reset-password", form.value);
    useSweetAlert('success', 'Password reset', 'Your password has been reset successfully');
    router.push('/admin/login');
  } catch (error) {
    handleAxiosError(error);
  }
}
</script>

<template>
  <div class="password-reset">
    <h2 class="text-center fw-bold">Reset Password</h2>
    <form @submit.prevent="onSubmit" class="m-auto w-50 pt-5">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="form.password" name="password" type="password" class="form-control" id="exampleInputPassword1" />
        <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label">Password Confirmation</label>
        <input v-model="form.password_confirmation" name="password_confirmation" type="password" class="form-control" id="password_confirmation" />
        <span class="text-danger" v-if="errors.password">{{ errors.password_confirmation }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
