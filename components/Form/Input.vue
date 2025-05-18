<script setup lang="ts">
import { ref } from "vue";
const model = defineModel();
const props = defineProps({
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  name: String,
  error: String,
});

const password_type = ref("password");

function togglePassword() {
  if (password_type.value === "password") {
    password_type.value = "text";
  } else {
    password_type.value = "password";
  }
}
</script>

<template>
  <div v-if="type == 'password'" class="input-group auth-pass-inputgroup">
    <input
      v-model="model"
      :type="password_type"
      class="form-control"
      :name="name"
      :placeholder="placeholder"
      aria-label="Password"
      aria-describedby="password-addon" />
    <button @click="togglePassword" class="btn btn-light shadow-none ms-0" type="button" :id="name">
      <i class="mdi mdi-eye-outline"></i>
    </button>
    <span v-if="error" class="text-danger">{{ error }}</span>
  </div>
  <div class="input" v-else>
    <label class="form-label">{{ label }}</label>
    <input v-model="model" :type="type" :name="name" class="form-control" id="name" :placeholder="placeholder" />
    <span v-if="error" class="text-danger">{{ error }}</span>
  </div>
</template>
