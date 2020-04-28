<template>
  <div class="admin-page__row">
    <SnackBar :text="'Login Sucessed!'" />
    <Admin />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SnackBar from "@/components/atoms/SnackBar.vue";
import Admin from "@/components/organisms/Admin.vue";

@Component({
  components: {
    SnackBar,
    Admin
  }
})
export default class AdminPage extends Vue {}
</script>
