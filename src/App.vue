<template>
  <header-of-page />
  <router-view></router-view>
  <footer-of-page />
</template>

<script>
import HeaderOfPage from "@/components/HeaderOfPage";
import FooterOfPage from "@/components/FooterOfPage";

export default {
  name: "App",
  components: { HeaderOfPage, FooterOfPage },
};
</script>

<style>
#app {
}
</style>
s
