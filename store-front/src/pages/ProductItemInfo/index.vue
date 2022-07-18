<template>
  <div class="product-item-info-container">
    <main-master-page>
      <template #content>
        <delivery-info-block />
        <div class="breadcrumbs-container">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </div>
        <addition-info />

        <div class="product-item-info">
          <div class="photo-container">
            <img :src="product.photo" alt="" />
          </div>

          <div class="item-details">
            <div class="product-code">
              <span> Код продукту: {{ product.code }} </span>
            </div>
            <div class="item-title">{{ product.title }}</div>
            <div class="size-table-container">
              <div class="size-table-button" @click="onGoToProductSizePage">
                <div>TАБЛИЦЯ РОЗМІРІВ</div>
              </div>
            </div>

            <div class="item-manufacturer">
              Виробник:
              <span> "{{ product.manufacturer }}" </span>
            </div>

            <div class="item-price">
              <span> {{ product.price }} грн </span>
            </div>
            <div class="buy-block-wrapper">
              <div class="buy-container" @click="onAddToCart(product)">
                <div class="add-item-to-cart" v-if="product.is_available">
                  В КОРЗИНУ
                </div>
                <div class="add-item-to-cart" v-else>Товар очікується</div>
              </div>
            </div>
          </div>
          <div class="item-description-wrapper">
            <div class="item-description-title"><span>ОПИС ТОВАРУ</span></div>
            <div class="item-description-text">{{ product.description }}</div>
          </div>
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
      items: [
        {
          text: "home",
          disabled: false,
        },
        {
          text: "products",
          disabled: false,
        },
        {
          text: "product-item",
          disabled: true,
        },
      ],
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

    onGoToProductSizePage() {
      this.$router.push({ name: "productsSize" });
    },

    onAddToCart(product) {
      this.addProductItem(product);
    },
  },

  async mounted() {
    if (this.receivedProductId)
      try {
        this.product = await this.getProductById(this.receivedProductId);
      } catch (err) {
        console.log(err);
      }
  },
};
</script>

<style lang="scss" scoped>
.product-item-info-container {
  font-family: georgia;
  .product-item-info {
    display: grid;
    grid-template-areas:
      "photo details"
      "description description";
  }
  .photo-container {
    grid-area: photo;
    display: flex;
    margin: 20px auto;

    img {
      width: 500px;
    }
  }
  .item-details {
    font-size: 18px;

    margin-top: 20px;
    grid-area: details;

    .item-title {
      margin: 20px 0 20px 0;
      font-size: 22px;
      font-weight: 600;
    }
    .item-manufacturer {
      margin: 20px 0 20px 0;

      span {
        font-weight: 600;
      }
    }
    .item-price {
      margin: 20px 0 20px 0;
      font-size: 25px;

      font-weight: 600;
    }
    .size-table-container {
      margin: 20px 0 20px 0;

      display: flex;
      .size-table-button {
        width: 200px;
        height: 70px;
        background-color: rgb(30, 55, 21);
        color: white;
        border-radius: 5px;
        display: flex;

        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }
        div {
          margin: auto;
        }
      }
    }
    .buy-block-wrapper {
      display: flex;
      .buy-container {
        margin: 20px 0 20px 0;
        display: flex;
        width: 200px;
        height: 70px;
        background-color: rgb(30, 55, 21);
        color: white;
        border-radius: 5px;
        &:hover {
          cursor: pointer;
          transform: scale(1.05);
        }

        .add-item-to-cart {
          margin: auto;
        }
      }
    }
  }
  .item-description-wrapper {
    margin: 20px 0 20px 0;

    grid-area: description;

    .item-description-title {
      display: flex;
      margin: auto;
      width: 90%;
      height: 50px;
      background-color: rgb(119, 119, 83);
      // color: white;
      span {
        margin: auto;

        font-weight: 600;
      }
    }
    .item-description-text {
      margin: 20px;
      text-indent: 50px;
    }
  }
}
</style>
