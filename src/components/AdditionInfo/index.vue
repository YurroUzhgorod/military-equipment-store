<template>
  <div class="addition-info-container">
    <div class="text-wrapper">
      <span> Нове поступлення товару в цю п'ятницю!! Не пропустіть!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionInfo",
};
</script>

<style lang="scss" scoped>
.addition-info-container {
  width: 100%;
  height: 40px;
  font-family: Georgia;
  font-size: 20px;
  color: white;
  margin: auto;
  text-align: center;
  .text-wrapper {
    background-color: rgb(189, 106, 66);
    display: inline-block;
    width: 95%;
    height: 100%;
  }
  // span {
  //   margin: 0 auto;
  // }
}
</style>
