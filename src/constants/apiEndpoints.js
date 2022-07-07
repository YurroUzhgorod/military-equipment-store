export default {
  products: {
    readList: `${process.env.VUE_APP_API_URL}/products`,
    add: `${process.env.VUE_APP_API_URL}/products`,
    update: `${process.env.VUE_APP_API_URL}/products`,
    getProductById: (id) => `${process.env.VUE_APP_API_URL}/products/${id}`,
    delete: `${process.env.VUE_APP_API_URL}/products`,
  },
};
