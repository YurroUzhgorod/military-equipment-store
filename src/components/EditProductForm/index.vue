<template>
  <div class="wrapper">
    <div>
      <label>
        Назва товару
        <input type="text" v-model="product.title" />
      </label>
    </div>

    <div>
      <label>
        Опис товару
        <input type="textarea" v-model="product.description" />
      </label>
    </div>
    <div>
      Виробник
      <select v-model="product.manufacturer">
        <option
          v-for="(manufacturer, index) in manufacturerList"
          :key="index"
          :value="manufacturer"
        >
          {{ manufacturer }}
        </option>
      </select>
    </div>

    <div>
      Виберіть категорію
      <select v-model="product.category">
        <option
          v-for="(value, key, index) in allCategoryAndSubcategory"
          :key="index"
          :value="key"
        >
          {{ key }}
        </option>
      </select>
    </div>

    <div>
      Виберіть суб-категорію
      <select v-model="product.sub_category">
        <option
          v-for="(subcategory, index) in allCategoryAndSubcategory[
            this.product.category
          ]"
          :key="index"
          :value="subcategory"
        >
          {{ subcategory }}
        </option>
      </select>
    </div>

    <div>
      <label>
        Ціна
        <input type="number" v-model="product.price" />
      </label>
    </div>

    <div>
      Статус товару
      <select v-model="product.is_available">
        <option :value="true">В продажі</option>
        <option :value="false">Не в продажі</option>
      </select>
    </div>

    <div>
      <label>
        Фото-картка
        <input type="file" @input="createLogoImage" />
      </label>
      <img id="img" :src="photoSrc" alt="" />
    </div>

    <button @click="onSave">{{ btnLabel }}</button>
  </div>
</template>

<script>
import { manufacturerList, allCategoryAndSubcategory } from "./settings";
import { mapActions } from "vuex";
export default {
  name: "EditUserForm",

  data() {
    return {
      allCategoryAndSubcategory,

      manufacturerList,
      product: {},
      rawPhotoData: null,
    };
  },
  computed: {
    photoSrc() {
      return this.rawPhotoData || this.product.photo;
    },
    receivedProductId() {
      return this.$route.params.id;
    },
    btnLabel() {
      return this.receivedProductId ? "Оновити" : "Додати";
    },
  },

  methods: {
    ...mapActions("products", [
      "getProductById",
      "addProduct",
      "updateProduct",
    ]),

    createLogoImage(event) {
      const file = event.target.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result;
        self.product.photo = e.target.result;
        console.log("self.product.photo");
        console.log(self.product.photo);
      };
      reader.readAsDataURL(file);
    },

    async onSave() {
      if (!this.product.code) this.product.code = new Date().getTime();

      try {
        if (!this.receivedProductId) await this.addProduct(this.product);
        else await this.updateProduct(this.product);
        this.$router.push({
          name: "homePage",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    if (this.receivedProductId) {
      try {
        this.product = await this.getProductById(this.receivedProductId);
      } catch (err) {
        console.log(err);
      }
    }
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

select {
  background-color: rgb(140, 136, 136);
}
</style>
