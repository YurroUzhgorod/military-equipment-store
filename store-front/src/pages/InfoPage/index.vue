<template>
  <div>
    <main-master-page>
      <template #content>
        <component :is="activeComponent"></component>
      </template>
    </main-master-page>
  </div>
</template>

<script>
import MainMasterPage from "@/masterPages/MainMasterPage";

import AboutContent from "@/components/infoPageComponents/AboutContent";
import ContactUsContent from "@/components/infoPageComponents/ContactUsContent";
import PrivatePolicyContent from "@/components/infoPageComponents/PrivatePolicyContent";
import TermsAndConditionsContent from "@/components/infoPageComponents/TermsAndConditionsContent";

export default {
  name: "InfoPage",
  components: {
    MainMasterPage,
    AboutContent,
    ContactUsContent,
    PrivatePolicyContent,
    TermsAndConditionsContent,
  },

  computed: {
    activeComponent() {
      switch (this.currentRouteParams) {
        case "about":
          return AboutContent;
        case "contacts":
          return ContactUsContent;
        case "privacy-policy":
          return PrivatePolicyContent;
        case "terms&condition":
          return TermsAndConditionsContent;
        default:
          return AboutContent;
      }
    },
    currentRouteParams() {
      return this.$route.params.source;
    },
  },
};
</script>

<style lang="scss" scoped></style>
