import {useUserStore} from "~/store/useUserStore";

export default async function useLogout() {
  const user_store = useUserStore();
  const router = useRouter();
  try {
    await axiosInstance.post("/admin/logout");
    localStorage.removeItem("token");
    const cookie_user = useCookie("user");
    cookie_user.value = null;
    user_store.setUser(null);
    useSweetAlert("success", "Logout successful", "You have successfully logged out");
    router.push("/admin/login");
  } catch (error) {
    handleAxiosError(error);
  }
}
