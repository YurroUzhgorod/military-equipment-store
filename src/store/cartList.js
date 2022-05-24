export default {
  namespaced: true,

  state: () => ({
    catrList: [],
  }),

  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    pizzaList: (state) => state.pizzaList,
    getPizzaById: (state) => (pizzaId) =>
      state.pizzaList.find((item) => item.id === pizzaId),
    cartList: (state) => state.cartList,
    getTotalPrice: (state) =>
      state.cartList.reduce((prevSum, cartItem) => {
        const pizza = state.pizzaList.find(
          (item) => item.id === cartItem.pizzaId
        );
        return prevSum + pizza.price * cartItem.count;
      }, 0),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    incrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      item.count += 1;
    },
    decrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      if (item.count > 1) item.count -= 1;
    },
    deleteCartItemCount(state, cartItemId) {
      state.cartList = state.cartList.filter((item) => item.id !== cartItemId);
    },
    // addProduct(state, productId) {
    //   const product = state.cartList.find((item) => item.pizzaId === productId);
    //   if (pizza) pizza.count++;
    //   else
    //     state.cartList.push({
    //       id: new Date().getTime(),
    //       productId,
    //       count: 1,
    // //     });
    // },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    cartAction({ commit }, payload) {
      switch (payload.type) {
        case "increment":
          commit("incrementCartItemCount", payload.value);
          break;
        case "decrement":
          commit("decrementCartItemCount", payload.value);
          break;
        case "delete":
          commit("deleteCartItemCount", payload.value);
          break;
      }
    },
    addPizza({ commit }, pizzaId) {
      commit("addPizza", pizzaId);
    },
    addPizzza(state, pizzaId) {
      const pizza = state.cartList.find((item) => item.pizzaId === pizzaId);
      if (pizza) pizza.count++;
      else
        state.cartList.push({
          id: new Date().getTime(),
          pizzaId,
          count: 1,
        });
    },
    // updateValue({ commit }, payload) {
    //   commit("increment", payload);
    // },
    // updateMessage({ commit }, newMsg) {
    //   commit("setMessage", newMsg);
    // },
    // updateMyText({ commit, dispatch }, newText) {
    //   commit("setMyText", newText);
    //   dispatch("updateValue", 5);
    // },
  },
};
