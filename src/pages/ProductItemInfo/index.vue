<template>
  <div>
    <main-master-page>
      <template #content>
        <delivery-info-block />
        <div>{{ product.title }}</div>
        <div>{{ product.price }}</div>
        <div>{{ product.title }}</div>
        <div><img :src="product.photo" alt="" /></div>
        <div>{{ product.description }}</div>
        <div>{{ product.manufacturer }}</div>
        <button @click="onAddToCart">Додати в корзину</button>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import MainMasterPage from "@/masterPages/MainMasterPage";
import { mapActions } from "vuex";
export default {
  name: "ProductItemInfo",
  components: {
    MainMasterPage,
    DeliveryInfoBlock,
  },
  data() {
    return {
      product: {},
    };
  },
  computed: {
    receivedProductId() {
      return this.$route.params.id;
    },
  },

  methods: {
    ...mapActions("products", ["getProductById"]),
    ...mapActions("cartList", ["addProductItem"]),

    onAddToCart() {
      this.addProductItem(this.product._id);
    },
  },

  async mounted() {
    if (this.receivedProductId)
      try {
        this.product = await this.getProductById(this.receivedProductId);
        console.log("this.product");
        console.log(this.product);
      } catch (err) {
        console.log(err);
      }
  },
};
</script>

<style lang="scss" scoped></style>
