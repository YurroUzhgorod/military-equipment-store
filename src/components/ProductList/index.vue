<template>
  <div class="container">
    <div class="list-container">
      <product-card
        v-for="productItem in filteredProductList"
        :key="productItem.id"
        :product="productItem"
        @on-edit="onEdit(productItem.id)"
      />
      <div class="add-new-product-container" @click="onAddNewProduct">
        <div>
          <img :src="require('@/assets/images/addImg.png')" alt="no photo" />
        </div>
        <div>Add new product</div>
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
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      page: 1,
      ProdList: [],
      searchText: null,
    };
  },

  computed: {
    ...mapGetters("productsList", ["getProductList"]),
    filteredProductList() {
      if (this.searchText)
        return this.ProdList.filter((product) =>
          product
            .toLoweCase(this.searchTextRow)
            .includes.toLoweCase(this.searchText)
        );
      else return this.getProductList;
    },
  },
  methods: {
    onEdit(productId) {
      this.$router.push({
        name: "edit",
        params: {
          id: productId,
        },
      });
    },
    onAddNewProduct() {
      this.$router.push({
        name: "edit",
      });
    },
    mounted() {
      this.ProdList = this.getProductList.map((product) => ({
        ...this.getProductList,
        searchTextRow: `${product.title}${product.color}${product.type}`,
      }));
      console.log(this.searchTextRow);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-wrap: wrap;
}
.add-new-product-container {
  width: 150px;
  border: 2px solid green;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  // display: inline-flex;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
  }
}
</style>
