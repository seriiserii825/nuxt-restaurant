<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const token = route.params.token;
const email = route.query.email;
console.log("email", email);
console.log("token", token);
</script>

<template>
  <div class="password-reset">
    <h2>password reset</h2>
    <p>{{ token }}</p>
    <p>{{ email }}</p>
  </div>
</template>
