<template>
  <div>
    <main-master-page>
      <template #content>
        <slider-component/>
        <div class="slider-container">
          <div class="slider">
            <div class="slider-line">
              <img src="@/assets/images/slider-img/slider1.jpeg" alt="" />
              <img src="@/assets/images/slider-img/slider2.webp" alt="" />
              <img src="@/assets/images/slider-img/slider3.jpeg" alt="" />
              
            </div>
          </div>
        </div>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
import SliderComponent from "@/components/SliderComponent";

export default {
  name: "HomePage",
  components: {
    MainMasterPage,
    SliderComponent,
  },
};
</script>

<style lang="scss" scoped>
.slider-line {
  text-align: center;
  img {
    width: 400px;
    height: 250px;
  }
}
</style>
