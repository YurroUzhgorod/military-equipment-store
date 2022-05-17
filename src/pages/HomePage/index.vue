<template>
  <div>
    <!-- <main-master-page /> -->
    <div class="slider-container">
      <div class="slider">
        <div class="slider-line">
          <img src="@/assets/images/slider-img/slider1.jpeg" alt="" />
          <img src="@/assets/images/slider-img/slider2.webp" alt="" />
          <img src="@/assets/images/slider-img/slider3.jpeg" alt="" />
        </div>
      </div>
      <div>
        <button class="slider-next" @click="onNextImages">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
// import MainMasterPage from "@/master-pages/MainMasterPage";
export default {
  name: "HomePage",
  components: {},
};
</script>

<style lang="scss" scoped></style>
