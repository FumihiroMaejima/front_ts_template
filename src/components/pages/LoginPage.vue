<template>
  <v-app>
    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script>
import Login from "../organisms/Login.vue";

export default {
  name: "LoginPage",
  components: {
    Login
  }
};
</script>
