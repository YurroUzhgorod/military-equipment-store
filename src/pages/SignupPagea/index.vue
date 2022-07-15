<template>
  <main-master-page>
    <template #content>
      <div class="breadcrumbs-container">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      </div>

      <div class="login-page-wrapper">
        <div class="login-page-container">
          <h2>Введіть свій e-mail і пароль для входу</h2>

          <div class="email-input">
            <input
              @click="hideMessage"
              type="text"
              v-model="email"
              name="email"
              placeholder="емейл..."
            />
          </div>
          <div class="password-input">
            <input
              @click="hideMessage"
              type="password"
              v-model="password"
              name="password"
              placeholder="пароль.."
            />
          </div>
          <div class="error-message" v-if="message">{{ message }}</div>
          <div class="form-group">
            <button @click="submit">ВВІЙТИ</button>
          </div>
        </div>
      </div>
    </template>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage.vue";

import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      email: "",
      password: "",
      message: "",
      items: [
        {
          text: "home",
          disabled: false,
        },
        {
          text: "login",
          disabled: false,
        },
      ],
    };
  },
  computed: {
    isValid() {
      return (
        this.email &&
        this.isCorrectEmail &&
        this.password &&
        this.email.length > 4 &&
        this.email.includes("@")
      );
    },
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),

    hideMessage() {
      this.message = "";
    },

    async submit() {
      if (this.isValid) {
        try {
          const user = { email: this.email, password: this.password };
          const result = await this.login(user);

          if (result === true) {
            this.message = "";

            this.$router.push({ path: "/" });
          } else {
            this.message = "Login error!";
          }
        } catch (err) {
          this.message = err.response.data.error;
        }
      } else {
        this.message =
          "Помилка вводу. Перевірте введені дані! Адреса електронної пошти має не менше 4-x  знаків і містити  симовл - @";
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>

<style lang="scss" scoped>
.login-page-wrapper {
  padding: 20px 0 70px 0;
  display: flex;

  font-family: georgia;

  .login-page-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    margin: auto;

    .email-input {
      margin: auto;
    }
    .password-input {
      margin: auto;
    }
    input {
      width: 400px;
      border: 1px solid green;
      margin: 10px;
      padding: 10px;
      background-color: rgb(246, 246, 246);
    }
    .error-message {
      margin: auto;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      button {
        background-color: rgb(30, 55, 21);
        padding: 10px;
        color: white;
        margin: auto;
      }
    }
    h2 {
      font-size: 25px;
    }
  }
}
</style>
