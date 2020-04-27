<template>
  <header>
    <v-navigation-drawer dark app v-model="open">
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
            v-for="list in navigationLists"
            :key="list.name"
            :prepend-icon="list.icon"
            no-action
            :append-icon="list.subLists ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subList in list.subLists"
              :key="subList.name"
              :to="subList.link"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subList.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>

        <div>
          <v-btn block href="/">Logout</v-btn>
        </div>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar dark app>
      <v-app-bar-nav-icon @click="open = !open"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ headerTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge color="pink" content="2" overlap
          ><v-icon>mdi-bell</v-icon></v-badge
        >
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-subheader>Account Menu</v-subheader>
          <v-list-item
            v-for="menuList in accountMenuList"
            :key="menuList.name"
            :to="menuList.link"
          >
            <v-icon color="blue-grey lighten-1">{{ menuList.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menuList.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import cnf from "@/config/authGlobal.json";

@Component
export default class AuthGlobalHeader extends Vue {
  public accountMenuList: object = cnf.accountMenuList;
  public headerTitle: string = process.env.VUE_APP_HEADER_TITLE;
  public open = false;
  public navigationLists: object = cnf.navigationLists;
}
</script>
