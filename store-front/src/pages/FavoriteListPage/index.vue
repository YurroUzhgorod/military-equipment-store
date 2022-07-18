<template>
  <div>
    <main-master-page>
      <template #content>
        <delivery-info-block />
        <div class="breadcrumbs-container">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </div>
        <addition-info />
        <favorite-list />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import AdditionInfo from "@/components/AdditionInfo";
import FavoriteList from "@/components/FavoriteList";

import MainMasterPage from "@/masterPages/MainMasterPage.vue";

export default {
  name: "FavoriteListPage",

  components: {
    MainMasterPage,
    FavoriteList,
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
          text: "favorite-list",
          disabled: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs-container {
  font-family: georgia;
}
</style>
