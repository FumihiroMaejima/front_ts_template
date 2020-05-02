<template>
  <v-icon dark right>{{ icon }}</v-icon>
</template>

<script>
export default {
  name: "VuetifyIcon",
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
