<template>
  <div class="delivery-info-block">
    <div class="general-delivery-info">
      <div>Відправка усіма кур'єрами</div>
      <div>Безкоштовка доставка</div>
      <div>Повернення до 14 днів</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryInfoBlock",
};
</script>

<style lang="scss" scoped>
.general-delivery-info {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px 15px 10px 15px;
  margin: 0 0 10px 0;
  font-size: 18px;
  font-family: Georgia;
  border-bottom: 1px black solid;
}
</style>
