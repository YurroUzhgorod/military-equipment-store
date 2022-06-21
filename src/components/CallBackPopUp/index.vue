<template>
  <div class="callback-pop-up-container">
    <div class="phone-image" @click="goToCallBackForm()">
      <img
        :src="require('@/assets/images/general-icons/phone-icon.png')"
        alt=""
      />
    </div>
    <div class="pop-up-on" v-if="isFormPopUpActive">
      <div class="close-pop-up">
        <v-icon @click="closeCallBackForm()">mdi-close-circle-outline</v-icon>
      </div>
      <div>
        <h3>Вкажіть свої дані і ми перезвонимо Вам!</h3>
        <form action="/#" method="post">
          <div class="input-container">
            <input type="text" name="user-name" placeholder="Ваше ім'я" />
          </div>
          <div class="input-container">
            <input
              type="number"
              name="user-number"
              value="380"
              min="0"
              placeholder="Ваш номер телефону"
            />
          </div>
          <div class="input-container">
            <div class="btn">
              <button type="submit" value="submit" @click="sendForm()">
                Підтвердити
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="success-pop-up" v-if="isSuccessPopUpActive">
      <div>
        <p>Дані прийняті! Ми зв'яжемось з Вами за першої можливості!</p>
      </div>
      <div><button @click="closeSuccessPopUp()">Закрити</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallBackPopUp",
  data() {
    return {
      isFormPopUpActive: false,
      isSuccessPopUpActive: false,
    };
  },
  methods: {
    goToCallBackForm() {
      this.isFormPopUpActive = true;
    },
    closeCallBackForm() {
      this.isFormPopUpActive = false;
    },
    sendForm() {
      this.isFormPopUpActive = false;
      this.isSuccessPopUpActive = true;
    },
    closeSuccessPopUp() {
      this.isSuccessPopUpActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.callback-pop-up-container {
  font-family: Georgia;

  border-radius: 20px;

  display: flex;
  .phone-image {
    width: 30px;
    margin: auto;
  }
  img {
    width: 100%;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
  .pop-up-on {
    border: 1px solid rgb(94, 129, 75);

    display: inline-block;
    text-align: center;
    width: 450px;
    height: 450px;

    position: absolute;
    position: fixed;

    background-color: rgb(217, 217, 214);
    box-shadow: 0px 0px 10px 1px black;

    z-index: 4;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    div {
      margin: 10px 10px 10px 10px;
    }
    input {
      border: 1px solid rgb(118, 119, 43);
      font-size: 20px;
      height: 50px;
      width: 380px;

      margin: 0px 0px 100px 0px auto;
    }
    button {
      background-color: rgb(190, 106, 66);
      font-size: 20px;
      height: 50px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  .close-pop-up {
    text-align: right;
    &:hover {
      cursor: pointer;
    }
  }
  .success-pop-up {
    padding: 30px;
    border: 1px solid rgb(94, 129, 75);
    font-size: 20px;

    display: inline-block;
    text-align: center;
    width: 450px;
    height: 450px;

    position: absolute;
    position: fixed;
    z-index: 4;

    background-color: rgb(217, 217, 214);
    box-shadow: 0px 0px 10px 1px black;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    div {
      button {
        background-color: rgb(190, 106, 66);
        font-size: 20px;
        height: 50px;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
  }
}
</style>
