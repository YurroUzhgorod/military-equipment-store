import { v4 as uuidv4 } from "uuid";

export default {
  namespaced: true,
  state() {
    return {
      productList: [
        {
          id: "1",
          title: "Штани DPM",
          type: "trouser",
          price: 100,
          imgSrc:
            "https://images.prom.ua/316893867_w640_h640_shtany-bryuki-dpm.jpg",
        },
        {
          id: "2",
          title: "Штани DDPM",
          type: "trouser",
          price: 120,
          imgSrc:
            "https://images.prom.ua/1083892768_w700_h500_bryuki-ddpm-.jpg",
        },
        {
          id: "3",
          title: "Штани MTP",
          type: "trouser",
          price: 100,
          imgSrc:
            "https://patriotshop.com.ua/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/_/m/_mtp_mali_1.jpg",
        },
        {
          id: "4",
          title: "Китель DPM",
          type: "shirt",
          price: 50,
          imgSrc:
            "https://images.prom.ua/434187681_w640_h640_kitel-dpm-dpm.jpg",
        },
        {
          id: "5",
          title: "Китель DDPM",
          type: "shirt",
          price: 55,
          imgSrc: "https://images.prom.ua/1086541939_w640_h640_kitel-ddpm-.jpg",
        },
        {
          id: "6",
          title: "Китель MTP",
          type: "trouser",
          price: 60,
          imgSrc: "https://images.prom.ua/3432607550_kitel-mtp-original.jpg",
        },
        {
          id: "7",
          title: "Китель олива",
          type: "trouser",
          price: 65,
          imgSrc: "https://images.prom.ua/3432440977_kitel-kaz-03.jpg",
        },
        {
          id: "8",
          title: "Черевики олива",
          type: "boots",
          price: 160,
          imgSrc:
            "https://content.rozetka.com.ua/goods/images/big/47007929.jpg",
        },
        {
          id: "9",
          title: "Черевики Lowa ",
          type: "boots",
          price: 65,
          imgSrc:
            "https://content.rozetka.com.ua/goods/images/big/220469120.jpg",
        },
      ],
    };
  },
  // функції, які здійснюють зчитування значень з стейта і які ми можемо використовувати у компонентах
  getters: {
    getProductList: (state) => state.productList,
    // getFilteredProductListt: (state)=>(filterdCaterory)=>
    getProductById: (state) => (productId) =>
      state.productList.find((item) => item.id === productId),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    addProduct(state, productData) {
      //Створюємо новий об"єкт-товар
      const product = {
        id: uuidv4(),
        ...productData,
      };
      state.productList.push(product); //Додаємо новий об"єкт-товар у список
    },
    deleteProduct(state, idToDelete) {
      state.productList = state.productList.filter(
        (item) => item.id !== idToDelete
      );
    },
    setUpdateProduct(state, product) {
      const productIndex = state.productList.findIndex(
        (item) => item.id === product.id
      );
      if (productIndex >= 0)
        state.productList[productIndex] = {
          ...product,
        };
    },
  },

  // розділ, де описуємо функції, які викликаємо у компонентах, якшо хочемо змінити стейт
  actions: {
    addNewProduct({ commit }, product) {
      commit("addProduct", product);
    },
    delProduct({ commit }, IdToDelete) {
      commit("deleteProduct", IdToDelete);
    },
    updateProduct({ commit }, product) {
      commit("setUpdateProduct", product);
    },
  },
};
