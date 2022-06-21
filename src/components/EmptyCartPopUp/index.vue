<template>
  <div class="container">
    <p><strong> Корзина пуста </strong></p>

    <div>
      <button @click="$emit('changeVisible')">
        <v-icon>mdi-close-circle-outline</v-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyCartPopUp",
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px;
  text-align: center;

  p {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
}
</style>
