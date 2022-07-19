<template>
  <main-master-page>
    <template #content>
      <div class="checkout-wrapper">
        <div class="checkout-title"><p>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</p></div>
        <div class="checkout-container">
          <div class="order-data-wrapper">
            <div class="checkout-items-container">
              <order-item-row
                v-for="productItem in getCartList"
                :key="productItem._id"
                :orderItem="productItem"
              />
            </div>
            <div class="personal-info-container">
              <div class="personal-info-container-title">ОСОБИСТІ ДАНІ</div>
              <div class="input-person-data-container">
                <div class="first-name-container">
                  <input type="text" placeholder="iм'я" />
                </div>
                <div class="second-name-container">
                  <input type="text" placeholder="прізвище" />
                </div>
                <div class="phone-container">
                  <input type="tel" placeholder="номер телеону" />
                </div>
                <div class="email-container">
                  <input type="email" placeholder="eмейл" />
                </div>
              </div>
            </div>
            <div class="delivery-info-container">
              <div class="delivery-info-container-title">ДОСТАВКА</div>
              <div class="delivery-way-container">
                <div class="nova-poshta-container">
                  <div class="nova-poshta-btn">
                    <span> НОВА ПОШТА </span>
                  </div>
                  <div class="nova-poshta-city" v-if="1 + 1 === 2">
                    <input type="text" placeholder=" місто" />
                  </div>
                  <div class="nova-poshta-department" v-if="1 + 1 === 2">
                    <input type="number" placeholder=" номер відділення" />
                  </div>
                </div>
                <div class="self-pick-up">
                  <span>САМОВИВІЗ</span>
                </div>
              </div>
            </div>

            <div class="payments-container">
              <div class="payments-info-container-title">OПЛАТА</div>
              <div class="payments-option-container">
                <div class="cash-delivery-container">
                  <div class="btn-after-received">
                    <span> ПРИ ОТРИМАННІ </span>
                  </div>
                </div>
                <div class="payment-by-card">
                  <div class="btn-by-card">
                    <span> БАНКІВСЬКИЙ ПЕРЕКАЗ </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="comment-container">
              <div class="comment-container">
                <div class="comment-container-title">
                  ВАШ КОМЕНТАР ДО ЗАМОВЛЕННЯ
                </div>
              </div>
              <div class="text-area-wrapper">
                <textarea placeholder="  Ваш коментар" />
              </div>
            </div>
          </div>
          <div class="confirm-wrapper">
            <div class="confirm-container">
              <div class="confirm-container-title">РАЗОМ</div>
              <div class="total-sum-container">
                <div>
                  <span> РАЗОМ </span>
                </div>
                <div>
                  <span> {{ getTotalPrice }} грн </span>
                </div>
              </div>
              <div class="confirm-btn"></div>
              <div class="oferta-checkbox"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </main-master-page>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import OrderItemRow from "./OrderItemRow.vue";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "CheckoutPage",
  components: {
    MainMasterPage,
    OrderItemRow,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      secretKey: null,
      message: "",
      userStatus: false,

      items: [
        {
          text: "home",
          disabled: false,
        },
        {
          text: "checkout",
          disabled: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("cartList", ["getCartList", "getTotalPrice"]),
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    hideErrorMessage() {
      this.message = "";
    },

    async submit() {
      try {
        const user = {
          name: this.userName,
          email: this.email,
          secretKey: this.secretKey,
          password: this.password,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.message = "";
          this.$router.push({
            path: "/login",
          });
        } else {
          this.message = result;
        }
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs-container {
  font-family: georgia;
}
.checkout-wrapper {
  margin: 50px;
  font-family: georgia;

  .checkout-title {
    margin: 30px 0 30px 0;
    font-size: 27px;
    font-weight: 800;
  }
  .checkout-container {
    display: flex;
    .order-data-wrapper {
      padding: 10px;
      display: inline-block;
      width: 60%;
      display: flex;
      flex-direction: column;
      .checkout-items-container {
      }
      .personal-info-container {
        .personal-info-container-title {
          font-size: 21px;
          font-weight: 600;
        }
        .input-person-data-container {
          margin: 20px 0 20px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;

          input {
            width: 95%;
            height: 40px;
            background-color: rgb(231, 228, 228);

            border: 1px solid rgb(191, 191, 207);

            padding: 10px;
            margin: 10px 0 10px 0;
          }
          .first-name-container {
          }
          .second-name-container {
          }
          .phone-container {
          }
          .email-container {
          }
        }
      }
      .delivery-info-container {
        display: flex;
        flex-direction: column;

        .delivery-info-container-title {
          font-size: 21px;
          font-weight: 600;
        }

        .delivery-way-container {
          margin: 20px 0 20px 0;
          display: flex;
          .nova-poshta-container {
            margin-right: 20px;
            width: 48%;

            display: flex;
            flex-direction: column;

            .nova-poshta-btn {
              margin: auto;
              display: flex;
              width: 100%;
              height: 40px;
              background-color: rgb(231, 228, 228);

              border: 1px solid rgb(191, 191, 207);

              span {
                margin: auto;
              }
            }
            .nova-poshta-city {
              margin: 10px 10px 10px 0;
              width: 100%;
              input {
                width: 100%;
                height: 40px;
                background-color: rgb(231, 228, 228);
                border: 1px solid rgb(191, 191, 207);
              }
            }
            .nova-poshta-department {
              margin: 0px 10px 10px 0;
              width: 100%;

              input {
                width: 100%;
                height: 40px;
                background-color: rgb(231, 228, 228);
                border: 1px solid rgb(191, 191, 207);
              }
            }
          }
          .self-pick-up {
            // margin: auto;
            display: flex;
            width: 47%;
            height: 40px;
            background-color: rgb(231, 228, 228);

            border: 1px solid rgb(191, 191, 207);

            span {
              margin: auto;
            }
          }
        }
      }
      .payments-container {
        display: flex;
        flex-direction: column;
        .payments-info-container-title {
          font-size: 21px;
          font-weight: 600;
        }

        .payments-option-container {
          margin: 20px 0 20px 0;
          display: flex;
          .cash-delivery-container {
            margin-right: 22px;
            width: 48%;
            height: 40px;
            background-color: rgb(231, 228, 228);

            border: 1px solid rgb(191, 191, 207);
            display: flex;
            .btn-after-received {
              margin: auto;
            }
          }
          .payment-by-card {
            width: 47%;
            height: 40px;
            background-color: rgb(231, 228, 228);
            border: 1px solid rgb(191, 191, 207);
            display: flex;

            .btn-by-card {
              margin: auto;
            }
          }
        }
      }
      .comment-container {
        .comment-container-title {
          margin: 20px 0 20px 0;
          font-size: 21px;
          font-weight: 600;
        }
        .text-area-wrapper {
          textarea {
            background-color: rgb(231, 228, 228);

            border: 1px solid rgb(191, 191, 207);
            width: 98%;
            height: 100px;
          }
        }
      }
    }
    .confirm-wrapper {
      display: flex;
      margin-left: 40px;

      .confirm-container {
        padding: 20px;
        // margin-left: 20px;
        margin: auto;
        display: inline-block;
        width: 400px;
        height: 200px;
        border: 1px solid rgb(191, 191, 207);

        position: fixed;

        .confirm-container-title {
          border-bottom: 1px solid rgb(191, 191, 207);
          font-size: 25px;
          font-weight: 800;
          .total-sum-container {
            display: flex;
            justify-content: space-between;
            div {
            }
          }
          .confirm-btn {
          }
          .oferta-checkbox {
          }
        }
      }
    }
  }
}
</style>
