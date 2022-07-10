<template>
  <div class="product-list-container">
    <div v-if="isEmpty">Немає товарів, які відповідають заданому критерію</div>
    <div v-else>
      <div class="list-container">
        <product-card
          v-for="productItem in getProductList"
          :key="productItem._id"
          :product="productItem"
        />
      </div>
    </div>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductCard from "./ProductCard";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      page: 1,
    };
  },

  computed: {
    ...mapGetters("products", ["getProductList"]),
    isEmpty() {
      return !this.getProductList.length;
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),
  },

  mounted() {
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
