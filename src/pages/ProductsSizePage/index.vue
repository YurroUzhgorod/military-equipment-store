<template>
  <div class="sizes-page-container">
    <main-master-page>
      <template #content>
        <delivery-info-block />
        <div class="breadcrumbs-container">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </div>
        <addition-info />
        <div class="content-wrapper">
          <div class="header-page-content">
            <p>Таблиця розмірів</p>
          </div>

          <div class="size-table-image">
            <img
              :src="require('@/assets/images/other/size-table.jpg')"
              alt="no photo"
            />
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

export default {
  name: "ProductsSizePage",
  components: {
    MainMasterPage,
    DeliveryInfoBlock,
    AdditionInfo,
  },
  props: {
    proIdToBack: {
      type: String,
    },
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
          text: "sizes",
          disabled: false,
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
    onAddToCart(id) {
      this.addProductItem(id);
    },

    onBackToProductItem(productId) {
      this.$router.push({
        name: "prodItemInfo",
        params: {
          id: productId,
        },
      });
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

<style lang="scss" scoped>
.content-wrapper {
  font-family: georgia;
  font-size: 20px;

  display: grid;
  grid-template-columns: 1fr;

  .header-page-content {
    padding: 30px 0 20px 0;
    display: flex;
    p {
      margin: auto;
    }
  }
}

.size-table-image {
  padding: 20px 0 20px 0;
  text-align: center;

  display: flex;

  img {
    text-align: center;
    margin: auto;
    width: 700px;
  }
}

// .product-item-info-container {
//   font-family: georgia;
//   .product-item-info {
//     display: grid;
//     grid-template-areas:
//       "photo details"
//       "description description";
//   }
//   .photo-container {
//     grid-area: photo;
//     display: flex;
//     margin: 20px auto;

//     img {
//       width: 500px;
//     }
//   }
//   .item-details {
//     font-size: 18px;

//     margin-top: 20px;
//     grid-area: details;

//     .item-title {
//       margin: 20px 0 20px 0;
//       font-size: 22px;
//       font-weight: 600;
//     }
//     .item-manufacturer {
//       margin: 20px 0 20px 0;

//       span {
//         font-weight: 600;
//       }
//     }
//     .item-price {
//       margin: 20px 0 20px 0;
//       font-size: 25px;

//       font-weight: 600;
//     }
//     .size-table-container {
//       margin: 20px 0 20px 0;

//       display: flex;
//       .size-table-button {
//         width: 200px;
//         height: 70px;
//         background-color: rgb(30, 55, 21);
//         color: white;
//         border-radius: 5px;
//         display: flex;

//         &:hover {
//           cursor: pointer;
//           transform: scale(1.05);
//         }
//         div {
//           margin: auto;
//         }
//       }
//     }
//     .buy-block-wrapper {
//       display: flex;
//       .buy-container {
//         margin: 20px 0 20px 0;
//         display: flex;
//         width: 200px;
//         height: 70px;
//         background-color: rgb(30, 55, 21);
//         color: white;
//         border-radius: 5px;
//         &:hover {
//           cursor: pointer;
//           transform: scale(1.05);
//         }

//         .add-item-to-cart {
//           margin: auto;
//         }
//       }
//     }
//   }
//   .item-description-wrapper {
//     margin: 20px 0 20px 0;

//     grid-area: description;

//     .item-description-title {
//       display: flex;
//       margin: auto;
//       width: 90%;
//       height: 50px;
//       background-color: rgb(119, 119, 83);
//       // color: white;
//       span {
//         margin: auto;

//         font-weight: 600;
//       }
//     }
//     .item-description-text {
//       margin: 20px;
//       text-indent: 50px;
//     }
//   }
// }
</style>
