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
  display: inline-block;
  margin: auto;
  width: 95%;
  height: 40px;
  background-color: rgb(189, 106, 66);
  font-family: Georgia;
  font-size: 20px;
  color: white;
  display: flex;
  .text-wrapper {
    display: inline-block;

    margin: auto;
  }
  // span {
  //   margin: 0 auto;
  // }
}
</style>
