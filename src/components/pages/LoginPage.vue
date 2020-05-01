<template>
  <v-app>
    <v-content>
      <Login />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Login from "@/components/organisms/Login.vue";

@Component({
  components: {
    Login
  }
})
export default class LoginPage extends Vue {}
</script>
