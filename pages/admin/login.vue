<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

definePageMeta({
  layout: "auth",
  middleware: ["admin"],
});

const user_store = useUserStore();
const router = useRouter();

const form = ref({
  email: "",
  password: "",
});
const errors = ref({
  email: "",
  password: "",
});

async function onSubmit() {
  try {
    const response = await axiosInstance.post("/admin/login", form.value);
    console.log(response);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    router.push("/admin/dashboard");
    useSweetAlert("success", "Login successful", "You have successfully logged in");
  } catch (error) {
    handleAxiosError(error);
  }
}
</script>

<template>
  <div class="auth-content my-auto">
    <div class="text-center">
      <h5 class="mb-0">Welcome Back !</h5>
      <p class="text-muted mt-2">Sign in to continue to Minia.</p>
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
        <div class="d-flex align-items-start">
          <div class="flex-shrink-0">
            <div class="">
              <NuxtLink to="/admin/forgot-password" class="text-muted">Forgot password?</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In</button>
      </div>
    </form>
    <div class="mt-5 text-center">
      <p class="text-muted mb-0">
        Don't have an account ?
        <a href="auth-register.html" class="text-primary fw-semibold">Signup now</a>
      </p>
    </div>
  </div>
</template>
