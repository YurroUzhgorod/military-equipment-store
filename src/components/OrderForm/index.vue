<template>
  <div class="order-form-container">
    <h3>Вкажіть свої дані і ми перезвонимо Вам!</h3>
    <form action="/#" method="post">
      <div class="input-container">
        <label>
          Ваше ім'я
          <br />
          <input type="text" name="user-name" />
        </label>
      </div>
      <div class="input-container">
        <label>
          Електронна пошта
          <br />
          <input type="email" name="user-email" />
        </label>
      </div>

      <div class="input-container">
        <label>
          Номер телефону
          <br />

          <input
            type="number"
            name="user-number"
            value="380"
            min="0"
            placeholder="Ваш номер телефону"
          />
        </label>
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
</template>

<script>
export default {
  name: "OrderForm",
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

  .form-pop-up-wrapper {
    position: fixed;
    z-index: 6;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
  }
  .pop-up-on {
    border: 1px solid rgb(94, 129, 75);

    display: inline-block;
    text-align: center;
    width: 550px;
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
      margin: 20px 10px 10px 10px;
    }
    input {
      border: 1px solid rgb(118, 119, 43);
      font-size: 20px;
      height: 50px;
      width: 380px;
      &:focus {
        outline: 0;
        outline-offset: 0;
      }

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

  .success-pop-up-wrapper {
    position: fixed;
    z-index: 6;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;

    .success-pop-up {
      padding: 30px;
      border: 1px solid rgb(94, 129, 75);
      font-size: 20px;

      display: inline-block;
      text-align: center;
      width: 550px;
      height: 400px;

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
}
</style>
