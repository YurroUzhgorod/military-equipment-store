<template>
  <div>
    <main-master-page>
      <template #content>
        <delivery-info-block />

        <addition-info />
        <div class="product-item-info">
          <div class="product-code">
            <span>Kод продукту:</span> {{ product.code }}
          </div>
          <div>{{ product.title }}</div>
          <div>{{ product.manufacturer }}</div>
          <div>{{ product.category }}</div>
          <div>{{ product.sub_category }}</div>
          <div>{{ product.price }}</div>
          <div>{{ product.title }}</div>
          <div><img :src="product.photo" alt="" /></div>
          <div>{{ product.description }}</div>
          <div>{{ product.manufacturer }}</div>
          <button>в корзину</button>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import DeliveryInfoBlock from "@/components/DeliveryInfoBlock";
import AdditionInfo from "@/components/AdditionInfo";
import MainMasterPage from "@/masterPages/MainMasterPage";
import { mapActions } from "vuex";
export default {
  name: "ProductItemInfo",
  components: {
    MainMasterPage,
    DeliveryInfoBlock,
    AdditionInfo,
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

<style lang="scss" scoped>
.product-code {
  margin: 0 10px 0 0;
  text-align: right;
  span {
    text-decoration: underline;
  }
}
</style>
