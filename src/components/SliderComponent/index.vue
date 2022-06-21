<template>
  <v-carousel hide-delimiters cycle :interval="interval">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "SliderComponent",
  data: () => ({
    interval: 5000,
    items: [
      {
        src: "https://wallpaperaccess.com/full/751676.jpg",
      },
      {
        src: "https://miro.medium.com/max/1200/1*3RSOB4O4Ap95BmSFRPBvNw.jpeg",
      },
      {
        src: "https://i.shgcdn.com/465d1a41-83d5-4706-9590-e1b67c2d07f7/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      },
      {
        src: "https://d.newsweek.com/en/full/918076/rtr1ciu3.jpg",
      },
      {
        src: "http://afghanistanacanadianstory.ca/wp-content/uploads/2012/02/cropped-AR2006-P009-0023-header1.jpg",
      },
      {
        src: "https://api.army.mil/e2/c/images/2022/02/15/96128f5f/original.jpg",
      },
      {
        src: require("@/assets/images/slider-img/photo22.png"),
      },
      {
        src: require("@/assets/images/slider-img/slider1.jpeg"),
      },
      {
        src: require("@/assets/images/slider-img/slider2.webp"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
