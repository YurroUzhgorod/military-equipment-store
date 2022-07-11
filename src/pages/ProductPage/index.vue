<template>
  <main-master-page>
    <template #content>
      <div class="general-delivery-info">
        <div>Відправка усіма кур'єрами</div>
        <div>Безкоштовка доставка</div>
        <div>Повернення до 14 днів</div>
      </div>

      <div class="content-container">
        <div class="filter-block-container">Це блок для фільтрацій</div>
        <div class="product-list-container">
          <product-list />
        </div>
      </div>
    </template>
  </main-master-page>
</template>

<script>
import ProductList from "@/components/ProductList";
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductPage",
  components: {
    MainMasterPage,
    ProductList,
  },
  computed: {
    ...mapGetters(["getProductList"]),
  },
  methods: {
    onAddNewProduct() {
      this.$router.push({
        name: "edit",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-auto-rows: minmax(30 auto);
  // background-color: rgb(208, 208, 187);
  font-family: Georgia;
  .filter-block-container {
    background-color: rgb(183, 171, 171);
  }
}
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

// .home-link {
//   width: 70px;
//   margin: auto;
// }
</style>
