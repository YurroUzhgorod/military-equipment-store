<template>
  <div class="wrapper">
    <div class="edit-form-container"></div>
    <div>
      <label>
        Product src
        <input type="text" v-model="product.imgSrc" />
      </label>
    </div>

    <!-- <div>
      <img :src="photoSrc" alt="no photo" />
    </div> -->
    <div>
      <label>
        Product title
        <input type="text" v-model="product.title" />
      </label>
    </div>
    <div>
      <label>
        Product type
        <input type="text" v-model="product.type" />
      </label>
    </div>
    <div>
      <label>
        Product price
        <input type="text" v-model="product.price" />
      </label>
    </div>
    <div>
      <label>
        Product color
        <input type="text" v-model="product.color" />
      </label>
    </div>
    <div>
      <button @click="onSave">{{ saveBtnTitle }}</button>
      <button @click="onDelete">{{ delBtnTitle }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditUserForm",

  data() {
    return {
      product: {},
    };
  },

  computed: {
    ...mapGetters("productsList", ["getProductById"]),

    photoSrc() {
      return this.product.imgSrc ?? require("@/assets/logo.svg");
    },
    currentProductId() {
      return this.$route.params.id;
    },
    saveBtnTitle() {
      return this.currentProductId ? "Save" : "Add";
    },
    delBtnTitle() {
      return this.currentProductId ? "Delete" : "Cancel";
    },
  },

  methods: {
    ...mapActions("productsList", [
      "addNewProduct",
      "delProduct",
      "updateProduct",
    ]),

    onSave() {
      if (this.currentProductId) this.updateProduct(this.product);
      else this.addNewProduct(this.product);

      this.$router.push({ name: "allProducts" });
    },
    onDelete() {
      if (this.currentProductId) this.delProduct(this.currentProductId);
      this.$router.push({ name: "allProducts" });
    },
  },

  mounted() {
    if (this.currentProductId)
      this.product = this.getProductById(this.currentProductId);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  .edit-form-container {
    width: 500px;
    border: 2px black colid;
  }
  text-align: center;
  img {
    width: 250px;
  }
}
input {
  border: 1px solid rgb(143, 105, 55);
  font-size: 16px;
  height: 50px;
  width: 480px;
  background-color: antiquewhite;
  margin: 10px;
}
button {
  border: 1px green solid;
  width: 50px;
  margin: 5px;
  &:hover {
    color: red;
  }
}
</style>
