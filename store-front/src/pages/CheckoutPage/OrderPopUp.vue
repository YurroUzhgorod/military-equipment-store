<template>
  <div class="callback-pop-up-container">
    <div class="success-pop-up-wrapper">
      <div class="success-pop-up">
        <div>
          <p>
            Замовлення №{{ orderNumber }} прийняте в обробку. Деталі замовлення
            відпралені на Вашу електронну пошту. Очікуйте звінка менеджера
          </p>
        </div>
        <div><button @click="$emit('closePopUp')">>Закрити</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallBackPopUp",
  data() {
    return {
      orderNumber: new Date().getTime(),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.callback-pop-up-container {
  font-family: Georgia;

  display: flex;
  .success-pop-up-wrapper {
    margin: auto;
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
