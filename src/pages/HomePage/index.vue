<template>
  <div>
    <main-master-page>
      <template #content>
        <slider-component />
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
  data() {
    return {
      items: [
        {
          text: "Головна",
          disabled: false,
          href: "/",
        },
      ],
    };
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
