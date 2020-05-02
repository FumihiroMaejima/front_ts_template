<template>
  <div class="admin-user-info-page__row">
    <AdminUserInfo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminUserInfo from "@/components/organisms/AdminUserInfo.vue";

@Component({
  components: {
    AdminUserInfo
  }
})
export default class AdminUesrInfoPage extends Vue {}
</script>
