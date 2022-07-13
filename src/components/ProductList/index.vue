<template>
  <div class="product-list-container">
    <div class="empty-product-list" v-if="isEmpty && !isThisSaleCategory">
      <h3>Немає товарів, які відповідають заданому критерію</h3>
    </div>
    <div class="empty-product-list" v-if="isThisSaleCategory">
      <h3>
        Розділ пустий. Наступні акційні пропозиції будуть в новорічний період!
      </h3>
    </div>
    <div v-else>
      <div class="list-container">
        <product-card
          v-for="productItem in getProductList"
          :key="productItem._id"
          :product="productItem"
        />
      </div>
    </div>

    <div class="text-center" v-if="!isEmpty">
      <div class="pagination-container">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
        ></v-pagination>
      </div>
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

    isThisSaleCategory() {
      if (this.$route.params.category === "sale") return true;
      else return false;
    },

    isEmpty() {
      return !this.getProductList.length;
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
}

.empty-product-list {
  margin: 50px 0 150px 0;
  text-align: center;
}
.pagination-container {
  margin: 20px 0 0 0;
}
</style>
