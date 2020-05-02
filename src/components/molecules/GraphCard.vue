<template>
  <div class="mx-auto mt-5 graph-card__wrapper">
    <v-card class="mx-auto mt-5 graph-card__body">
      <div class="graph-card__body-text">
        <v-card-text class="graph-card__body-text--title"
          >Admin Card Title</v-card-text
        >
        <v-card-text class="graph-card__body-text--text">
          <p>Admin cardText1.</p>
          <p>Admin cardText2.</p>
          <v-divider class="mx-1"></v-divider>
          <p>Admin cardText3.</p>
        </v-card-text>
      </div>
    </v-card>
    <v-card
      class="mx-auto mt-5 text-center graph-card__header-card"
      :color="graphBoardColor"
      height="130px"
    >
      <v-card-text>
        <v-sheet :color="sheetColor">
          <v-sparkline
            :labels="labels"
            :value="value"
            :color="lineColor"
            stroke-linecap="round"
            smooth
          >
          </v-sparkline>
        </v-sheet>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GraphCard extends Vue {
  @Prop()
  private labels!: object;
  @Prop()
  private value!: object;
  @Prop()
  private lineColor!: string;
  @Prop({ default: "rgba(255, 255, 255, .7)" })
  private sheetColor?: string;
  @Prop({ default: "green" })
  private graphBoardColor?: string;
}
</script>

<style lang="scss"></style>
