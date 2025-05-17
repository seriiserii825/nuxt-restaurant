import type { TUser } from "~/types/TUser";

export default defineNuxtRouteMiddleware((to, from) => {
  // const admin_user = useCookie("user");
  const admin_user = useCookie("user", { default: () => null }) as Ref<TUser | null>;

  // If the user is not logged in, redirect to the home page
  if (!admin_user.value) {
    if (to.path !== "/admin/login") {
      return navigateTo({
        path: "/",
        query: { alert: "You are not logged in as admin!!!" },
      });
    }
  }

  // If the user is logged in and is an admin, redirect to the admin/dashboard page
  if (to.path === "/admin/login" && admin_user.value && admin_user.value.role === "admin") {
    return navigateTo({path: "/admin/dashboard", query: { alert: "You are already logged in as admin" }});
  }

  // If the user is logged in and does not have the admin role, redirect to home
  if (to.path.startsWith("/admin") && admin_user.value && admin_user.value?.role !== "admin") {
    return navigateTo({
      path: "/",
      query: { alert: "You are logged in, but not as admin, please logout and login as admin" },
    });
  }
});
