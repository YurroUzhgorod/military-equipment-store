<template>
  <div class="edit-component-wrapper">
    <div class="page-title">
      <span>{{ pageTitle }} </span>
    </div>

    <div class="edit-wrapper">
      <div class="photo-container">
        <img id="img" :src="photoSrc" alt="" />
      </div>

      <div class="edit-container">
        <div class="edit-form-container">
          <div class="product-name">Назва товару</div>
          <input type="text" v-model="product.title" />
        </div>
        <hr />

        <div class="product-name">
          <div class="input-description">Опис товару</div>
          <textarea v-model="product.description" />
        </div>
        <hr />

        <div class="manufacturer-filter-container">
          <div class="manufacturer-filter-title">
            <p>Виберіть виробника</p>
          </div>
          <div class="manufacturer-select-container">
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
        </div>
        <hr />

        <div class="sub-category-filter-container">
          <div class="sub-category-filter-title">
            <p>Виберіть категорію</p>
          </div>
          <div class="sub-category-select-container">
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
        </div>
        <hr />

        <div v-if="this.product.category">
          <dir>Виберіть суб-категорію</dir>
          <select v-model="product.sub_category">
            <option
              v-for="(subcategory, key, index) in allCategoryAndSubcategory[
                this.product.category
              ]"
              :key="index"
              :value="key"
            >
              {{ key }}
            </option>
          </select>
          <hr />
        </div>

        <div>
          <div>Ціна</div>
          <input type="number" v-model="product.price" />
        </div>
        <hr />

        <div>
          <div>Статус товару</div>

          <select v-model="product.is_available">
            <option :value="true">В продажі</option>
            <option :value="false">Не в продажі</option>
          </select>
        </div>
        <hr />

        <div>
          <div>Фото-картка</div>
          <input type="file" id="load-photo-input" @input="createLogoImage" />
        </div>
        <hr />

        <button @click="onSave">{{ btnLabel }}</button>
      </div>
    </div>
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
    pageTitle() {
      return this.receivedProductId ? "Редагуваня товару" : "Додати товар";
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
.edit-component-wrapper {
  margin: 30px;
  font-family: georgia;

  .page-title {
    font-size: 25px;
    display: flex;
    span {
      margin: 15px auto;
    }
  }

  .edit-wrapper {
    display: flex;
    .photo-container {
      width: 30%;
    }

    .edit-container {
      width: 400px;

      .edit-form-container {
      }
    }
  }
  select {
    width: 300px;

    margin: 10px 0 10px 0px;
    border: 1px solid #b1aeae;
    background-color: rgb(232, 228, 228);

    select:hover {
      background: #cde4f7;
      border: 1px solid #41c9ff;
    }
  }
  input {
    width: 300px;
    margin: 10px 0 10px 0px;

    border: 1px #958787 solid;
  }
  textarea {
    width: 400px;
    height: 150px;
    margin: 10px 0 10px 0px;
    border: 1px #958787 solid;
  }
  #load-photo-inputz {
  }
  img {
    width: 300px;
  }
  button {
    margin: 15px 0 0 0;
    width: 200px;
    height: 70px;
    background-color: #b1aeae;
  }
}
</style>
