<template>
  <div>
    <main-master-page>
      <template #content>
        <div class="home-link"><router-link to="/"> go Home</router-link></div>
        <product-list />
      </template>
    </main-master-page>
  </div>
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
.home-link {
  width: 70px;
  margin: auto;
}
</style>
