<script setup lang="ts">
import {ProfileContact} from "#components";
import { useUserStore } from "~/store/useUserStore";

definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const user_store = useUserStore();
const { user } = storeToRefs(user_store);
console.log(user.value, "user.value");

let user_photo = "/backend/assets/images/users/avatar-2.jpg";
if (user.value && user.value.photo) {
  const user_store_photo = user.value.photo;
  if (user_store_photo) {
    user_photo = user_store_photo;
  }
}
</script>
<template>
  <div class="admin-profile" v-if="user">
    <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm order-2 order-sm-1">
                    <div class="d-flex align-items-start mt-3 mt-sm-0">
                      <div class="flex-shrink-0">
                        <div class="avatar-xl me-3">
                          <img :src="user_photo" alt="" class="img-fluid rounded-circle d-block" />
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div>
                          <h5 class="font-size-16 mb-1">{{ user.name }}</h5>
                          <p class="text-muted font-size-13">{{ user.email }}</p>
                          <div
                            class="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                            <ProfileContact v-if="user.phone" :data="user.phone" />
                            <ProfileContact v-if="user.address" :data="user.address" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- container-fluid -->
    </div>
  </div>
  <div v-else>
    <p>No user</p>
  </div>
</template>
