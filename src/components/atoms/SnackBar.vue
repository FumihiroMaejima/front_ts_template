<template>
  <v-snackbar
    :color="snackbarColor"
    v-model="snackbarOpen"
    :timeout="time"
    :top="isTop"
    :right="isRight"
  >
    {{ text }}
    <v-btn :color="buttonColor" text @click="snackbarOpen = false">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SnackBar extends Vue {
  // data
  private snackbarOpen = true;

  @Prop({ default: "green" })
  private snackbarColor?: string;
  @Prop({ default: "a snackbar component" })
  private text?: string;
  @Prop({ default: "grey lighten-4" })
  private buttonColor?: string;
  @Prop({ default: 5000 })
  private time?: number;
  @Prop({ default: true })
  private isTop?: boolean;
  @Prop({ default: true })
  private isRight?: boolean;
}
</script>
