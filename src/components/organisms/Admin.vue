<template>
  <div>
    <v-row class="admin__row-message">
      <v-col cols="12" sm="12" md="12" lg="12">
        <MessageCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="4">
        <GraphCard
          :labels="graphXAxis"
          :value="[423, 446, 675, 510, 590, 610, 760]"
          :lineColor="lineColor"
          :sheetColor="sheetColor"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <GraphCard
          :labels="graphXAxis"
          :value="sampleData"
          :lineColor="lineColor"
          :sheetColor="sheetColor"
          :graphBoardColor="'deep-purple lighten-2'"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <GraphCard
          :labels="graphXAxis"
          :value="sampleData"
          :lineColor="lineColor"
          :sheetColor="sheetColor"
          :graphBoardColor="'cyan lighten-1'"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="4">
        <GraphCard
          :labels="graphXAxis"
          :value="sampleData"
          :lineColor="lineColor"
          :sheetColor="sheetColor"
          :graphBoardColor="'yellow darken-1'"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <GraphCard
          :labels="graphXAxis"
          :value="sampleData"
          :lineColor="lineColor"
          :sheetColor="sheetColor"
          :graphBoardColor="'light-green lighten-2'"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <GraphCard
          :labels="graphXAxis"
          :value="sampleData"
          :lineColor="lineColor"
          :sheetColor="'rgba(0, 0, 0, .12)'"
          :graphBoardColor="'red'"
        />
      </v-col>
    </v-row>
    <v-row class="admin__row-message">
      <v-col cols="12" sm="6" md="6" lg="6">
        <MessageCard :boardColor="'deep-purple lighten-2'" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <MessageCard :boardColor="'cyan lighten-1'" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GraphCard from "@/components/molecules/GraphCard.vue";
import MessageCard from "@/components/molecules/MessageCard.vue";
import cnf from "@/config/config.json";

@Component({
  components: {
    GraphCard,
    MessageCard
  }
})
export default class Admin extends Vue {
  public graphXAxis: object = cnf.graphTimeXAxis;
  public sampleData: object = cnf.graphSampleValue;
  public lineColor: string = cnf.defaultLineColor;
  public sheetColor: string = cnf.defaultSheetColor;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
