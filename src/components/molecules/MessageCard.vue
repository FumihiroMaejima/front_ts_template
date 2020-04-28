<template>
  <div class="mx-auto mt-5 message-card__wrapper">
    <v-card class="mx-auto mt-5 message-card__body">
      <div class="message-card__body-text">
        <v-list class="message-card__body-list">
          <v-list-item-content class="message-card__body-list--item-content">
            <v-list-item-title class="message-card__body-list--item-title">
              <v-icon>mdi-account</v-icon>test1
            </v-list-item-title>
            <v-divider class="mx-1"></v-divider>
            <v-list-item-title class="message-card__body-list--item-title">
              <v-icon>mdi-account</v-icon>test2
            </v-list-item-title>
            <v-divider class="mx-1"></v-divider>
            <v-list-item-title class="message-card__body-list--item-title">
              <v-icon>mdi-account</v-icon>test3
            </v-list-item-title>
            <v-divider class="mx-1"></v-divider>
          </v-list-item-content>
        </v-list>
      </div>
    </v-card>
    <v-card
      class="mx-auto mt-5 text-center message-card__header-card"
      :color="boardColor"
      height="75px"
    >
      <v-card-text>
        admin message component.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MessageCard",
  /*
  components: {
  }
  */
  props: {
    boardColor: {
      type: String,
      required: false,
      default: "green"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
