<template>
  <div>
    <main-master-page>
      <template #content>
        <delivery-info-block />
        <div class="breadcrumbs-container">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </div>
        <addition-info />
        <div class="cart-content-wrapper">
          <div class="cart-content-container">
            <cart-list />
          </div>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import AdditionInfo from "@/components/AdditionInfo";

import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import CartList from "@/components/CartList";
export default {
  name: "CartPage",

  components: {
    MainMasterPage,
    CartList,
    DeliveryInfoBlock,
    AdditionInfo,
  },
  data() {
    return {
      items: [
        {
          text: "home",
          disabled: false,
        },
        {
          text: "cart",
          disabled: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.breadcrumbs-container {
  font-family: georgia;
}
</style>
