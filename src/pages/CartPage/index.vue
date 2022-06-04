<template>
  <div>
    <main-master-page>
      <template #content>
        <cart-list />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import CartList from "@/components/CartList";
export default {
  name: "CartPage",

  components: {
    MainMasterPage,
    CartList,
  },
};
</script>

<style lang="scss" scoped></style>
