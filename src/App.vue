<template>
  <v-app>
    <!-- <GlobalHeader/> -->
    <AuthGlobalHeader />
    <v-content>
      <router-view />
    </v-content>
    <GlobalFooter />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GlobalFooter from "@/components/_global/GlobalFooter.vue";
// import GlobalHeader from '@/components/_global/GlobalHeader.vue'
import AuthGlobalHeader from "@/components/_global/AuthGlobalHeader.vue";

@Component({
  components: {
    GlobalFooter,
    AuthGlobalHeader
  }
})
export default class App extends Vue {}
</script>
