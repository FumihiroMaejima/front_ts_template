<template>
  <v-card class="mx-auto mt-5" width="400px">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account-circle"
          label="ユーザ名"
          v-model="name"
        />
        <v-text-field
          v-bind:type="showPassword ? 'text' : 'password'"
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          prepend-icon="mdi-lock"
          @click:append="showPassword = !showPassword"
          label="パスワード"
          v-model="passsword"
        />
        <v-card-actions>
          <v-btn class="info" @click="LoginFunction">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import client from "@/client";
import cnf from "@/config/config.json";

export default {
  name: "Login",
  data() {
    return {
      showPassword: false
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.getters["login/name"];
      },
      set(getName) {
        this.$store.dispatch("login/getNameDataAction", getName);
      }
    },
    passsword: {
      get() {
        return this.$store.getters["login/passsword"];
      },
      set(getPasssword) {
        this.$store.dispatch("login/getPassswordDataAction", getPasssword);
      }
    }
  },
  created() {
    const store = this.$store;
    function getToken() {
      const stringValue = cnf.targetString;
      const randomString = Array.from(
        crypto.getRandomValues(new Uint8Array(32))
      )
        .map(num => stringValue[num % stringValue.length])
        .join("");
      store.dispatch("login/getTokenDataAction", randomString);
    }
    function LoginFunction() {
      client
        .get("/api/users/user")
        .then(response => {
          console.log("axios request: " + JSON.stringify(response.data));
        })
        .catch(error => {
          console.log("axios request error: " + error);
        });
    }
    return [getToken(), LoginFunction()];
  },
  methods: {
    getName() {
      return this.$store.getters["login/name"];
    },
    getPasssword() {
      return this.$store.getters["login/passsword"];
    },
    LoginFunction() {
      client
        .post("/api/login", this.$store.state.login.postData)
        .then(response => {
          console.log(
            "axios post data: " +
              JSON.stringify(this.$store.state.login.postData)
          );
          console.log("axios post request: " + JSON.stringify(response.data));
          this.$router.push("/admin");
        })
        .catch(error => {
          console.log("axios post request error: " + error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
