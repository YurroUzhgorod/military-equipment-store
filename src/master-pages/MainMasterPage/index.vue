<template>
  <div class="wrapper">
    <div class="header-container">
      <slot name="header">
        <header-of-page />
      </slot>
    </div>
    <div class="content-container">
      <slot> Немає контенту </slot>
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
.content-container {
  min-height: 400px;
}
</style>
