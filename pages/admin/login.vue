<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

definePageMeta({
  layout: "admin",
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

async function onSubmit(){
  try {
    const response = await axiosInstance.post("/admin/login", form.value);
    console.log(response);
    localStorage.setItem("token", response.data.token);
    const cookie_user = useCookie("user");
    cookie_user.value = JSON.stringify(response.data.user);
    user_store.setUser(response.data.user);
    router.push('/admin/dashboard');
    useSweetAlert('success', 'Login successful', 'You have successfully logged in');
  } catch (error) {
    handleAxiosError(error);
  }
}
</script>

<template>
  <div class="container pt-5">
    <h2 class="text-center fw-bold">Login</h2>
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
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="form.password" name="password" type="password" class="form-control" id="exampleInputPassword1" />
        <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
