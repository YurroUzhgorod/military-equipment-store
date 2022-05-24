<template>
  <v-carousel hide-delimiters >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name:"SliderCompomemt",
    data: () => ({
      
     
        items: [
          {
            src: 'https://wallpaperaccess.com/full/751676.jpg',
          },
          {
            src: 'https://ufpro.com/storage/app/media/Blog/Camouflage%20Patterns/blog-post-camouflage.jpg',
          },
          {
            src: 'https://i.shgcdn.com/465d1a41-83d5-4706-9590-e1b67c2d07f7/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
          },
          {
            src: 'https://www.ghost-hood.com/myfactory/CustomUpload/374O357O340O370O356O369O350O338O352O369O366O326O364O353O327O/KATALOG_ausruestung.png',
          },
          {
            src: 'https://i.cbc.ca/1.4702940.1528840553!/fileImage/httpImage/canadian-soldiers-participate-in-exercise-the-5th-canadian-division-support-base.JPG',
          },
        ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>