<template>
  <v-footer dark app :elevation="6" inset>
    <v-divider></v-divider>
    {{ title }}
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import cnf from "@/config/global.json";

@Component
export default class GlobalFooter extends Vue {
  public title: string = cnf.footerMessage.title;
}
</script>
