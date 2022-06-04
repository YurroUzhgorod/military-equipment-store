<template>
  <div class="wrapper">
    <div class="header-container">
      <slot name="header">
        <header-of-page />
      </slot>
    </div>
    <div class="content-container">
      <slot name="content" class="content-container-slot"> </slot>
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
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
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
