<template>
  <div class="wrapper">
    <div class="header-container">
      <slot name="header">
        <header-of-page />
      </slot>
    </div>
    <div class="content-container">
      <slot name="content">
        <div class="slider-container">
          <div class="slider">
            <div class="slider-line">
              <img src="@/assets/images/slider-img/slider1.jpeg" alt="" />
              <img src="@/assets/images/slider-img/slider2.webp" alt="" />
              <img src="@/assets/images/slider-img/slider3.jpeg" alt="" />
            </div>
          </div>
        </div>
      </slot>
    </div>
    <div class="footer-container">
      <slot name="footer">
        <footer-of-page />
      </slot>
    </div>
  </div>
</template>

<script>
import HeaderOfPage from "@/components/HeaderOfPage";
import FooterOfPage from "@/components/FooterOfPage";

export default {
  name: "MainMasterPage",
  components: {
    HeaderOfPage,
    FooterOfPage,
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 700px;
  height: 400px;
  border: 2px solid black;
  margin: auto;
  .slider-line {
    height: 400px;
    width: 2100px;
    display: flex;
    position: relative;
  }
  img {
    width: 700px;
    height: 400px;
  }
}
</style>
