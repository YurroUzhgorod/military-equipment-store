export default {
  products: {
    readList: `${process.env.VUE_APP_API_URL}/products`,
    readProdInclude: `${process.env.VUE_APP_API_URL}/products/title/include`,
    add: `${process.env.VUE_APP_API_URL}/products`,
    update: `${process.env.VUE_APP_API_URL}/products`,
    getProductById: (id) => `${process.env.VUE_APP_API_URL}/products/${id}`,
    delete: `${process.env.VUE_APP_API_URL}/products`,
  },
  user: {
    usersList: `${process.env.VUE_APP_API_URL}/users`,
    signup: `${process.env.VUE_APP_API_URL}/users/signup`,
    login: `${process.env.VUE_APP_API_URL}/users/login`,
  },
  email: {
    sendOrderForm: `${process.env.VUE_APP_API_URL}/emails/checkout`,
    sendCallBack: `${process.env.VUE_APP_API_URL}/emails/callback`,
  },
};
