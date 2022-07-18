<template>
  <main-master-page>
    <template #content>
      <div class="breadcrumbs-container">
        <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      </div>

      <div class="signup-page-wrapper">
        <div class="signup-page-container">
          <h2>Форма реєстрації користувача</h2>

          <div class="name-input">
            <input
              @click="hideErrorMessage"
              type="text"
              v-model="userName"
              name="name"
              placeholder="ім'я..."
            />
          </div>

          <div class="email-input">
            <input
              @click="hideErrorMessage"
              type="email"
              v-model="email"
              name="email"
              placeholder="емейл..."
            />
          </div>
          <div class="password-input">
            <input
              @click="hideErrorMessage"
              type="password"
              v-model="password"
              name="password"
              placeholder="пароль.."
            />
          </div>

          <div class="user-status">
            <div class="select-input-container">
              Виберіть статус:
              <select v-model="userStatus">
                <option :value="true">Адмін</option>
                <option :value="false">Користувач</option>
              </select>
            </div>
            <div v-if="userStatus">
              <p>Введіть секретний код для отримання статусу адміна</p>

              <input type="password" v-model="secretKey" />
            </div>
          </div>
          <div class="error-message" v-if="message">{{ message }}</div>
          <div class="form-group">
            <button @click="submit">ЗАРЕЄСТРУВАТИСЬ</button>
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
  name: "OrderPage",
  components: {
    MainMasterPage,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      secretKey: null,
      message: "",
      userStatus: false,
      items: [
        {
          text: "home",
          disabled: false,
        },
        {
          text: "order-page",
          disabled: false,
        },
      ],
    };
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    hideErrorMessage() {
      this.message = "";
    },

    async submit() {
      try {
        const user = {
          name: this.userName,
          email: this.email,
          secretKey: this.secretKey,
          password: this.password,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/login",
          });
        } else {
          this.message = result;
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs-container {
  font-family: georgia;
}
.signup-page-wrapper {
  padding: 20px 0 70px 0;
  display: flex;

  font-family: georgia;

  .signup-page-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    margin: auto;

    .email-input {
      margin: auto;
    }
    .name-input {
      margin: auto;
    }
    .password-input {
      margin: auto;
    }
    .user-status {
      margin: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;

      select-input-container {
        margin: auto;
      }
    }
    input {
      width: 400px;
      border: 1px solid green;
      margin: 5px;
      padding: 5px;
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
