<template>
  <div>
    <main-master-page>
      <template #content>
        <delivery-info-block />
        <div class="breadcrumbs-container">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </div>
        <cart-list />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";

import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import CartList from "@/components/CartList";
export default {
  name: "CartPage",

  components: {
    MainMasterPage,
    CartList,
    DeliveryInfoBlock,
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
};
</script>

<style lang="scss" scoped></style>
