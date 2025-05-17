<script setup lang="ts">
import {useUserStore} from '~/store/useUserStore';

definePageMeta({
  layout: "admin",
});
const user_store = useUserStore();
const router = useRouter();

async function logout(){
  try {
    await axiosInstance.post("/admin/logout");
    localStorage.removeItem("token");
    const cookie_user = useCookie("user");
    cookie_user.value = null;
    user_store.setUser(null);
    useSweetAlert('success', 'Logout successful', 'You have successfully logged out');
    router.push('/admin/login');
  } catch (error) {
    
  }
}
</script>
<template>
  <div class="dashboard">
    <div class="container">
      <h3>Dashboard</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat alias qui nam
        dignissimos dolorem, ab minus accusamus doloremque itaque illum recusandae, possimus hic
        nobis perspiciatis culpa. Eligendi, ullam minus?
      </p>
      <a @click.prevent="logout" href="#" class="btn btn-success">Logout</a>
    </div>
  </div>
</template>
