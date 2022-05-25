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
  name: "SliderCompomemt",
  data: () => ({
    interval: 5000,
    items: [
      {
        src: "https://wallpaperaccess.com/full/751676.jpg",
      },
      {
        src: "https://api.army.mil/e2/c/images/2016/03/02/425570/max1200.jpg",
      },
      {
        src: "https://i.shgcdn.com/465d1a41-83d5-4706-9590-e1b67c2d07f7/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      },
      {
        src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/14990/production/_124786348_nato.jpg",
      },
      {
        src: "https://i.cbc.ca/1.4702940.1528840553!/fileImage/httpImage/canadian-soldiers-participate-in-exercise-the-5th-canadian-division-support-base.JPG",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
