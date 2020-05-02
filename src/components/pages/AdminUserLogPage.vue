<template>
  <div class="admin-user-log-page__row">
    <AdminUserLog />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminUserLog from "@/components/organisms/AdminUserLog.vue";

@Component({
  components: {
    AdminUserLog
  }
})
export default class AdminUesrLogPage extends Vue {}
</script>
