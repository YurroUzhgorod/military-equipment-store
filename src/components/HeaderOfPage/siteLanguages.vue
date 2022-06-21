<template>
  <div class="site-language-container">
    <div class="languages-image-container">
      <img :src="selectedLanguage" alt="no photo" />
    </div>
    <select v-model="language">
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "siteLanguages",
  data() {
    return {
      language: "ua",
      uaImageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/2560px-Flag_of_Ukraine.svg.png",
      engImageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/800px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
    };
  },
  computed: {
    selectedLanguage() {
      if (this.language === "ua") return this.uaImageSrc;
      return this.engImageSrc;
    },
  },
};
</script>

<style lang="scss" scoped>
.site-language-container {
  display: flex;

  .languages-image-container {
    margin-top: 7px;
  }

  div {
    padding: 0 3px;
  }
  img {
    width: 35px;
  }
}
</style>
