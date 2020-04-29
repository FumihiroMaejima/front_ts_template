<template>
  <div class="admin-account-page__row">
    <AdminAccount />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminAccount from "@/components/organisms/AdminAccount.vue";

@Component({
  components: {
    AdminAccount
  }
})
export default class AdminAccountPage extends Vue {}
</script>
