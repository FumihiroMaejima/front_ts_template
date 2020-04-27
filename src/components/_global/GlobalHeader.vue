<template>
  <header>
    <v-navigation-drawer app v-model="open" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Side Bar
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-group
            v-for="navList in navLists"
            :key="navList.name"
            :prepend-icon="navList.icon"
            no-action
            :append-icon="navList.lists ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ navList.name }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="list in navList.lists"
              :key="list.name"
              :to="list.link"
            >
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar dark app clipped-left>
      <v-app-bar-nav-icon @click="open = !open"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ headerTitle }}</v-toolbar-title>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import cnf from "@/config/authGlobal.json";

@Component
export default class GlobalHeader extends Vue {
  public accountMenuList: object = cnf.accountMenuList;
  public headerTitle: string = process.env.VUE_APP_HEADER_TITLE;
  public open = false;
  public navigationLists: object = cnf.navigationLists;
}
</script>
