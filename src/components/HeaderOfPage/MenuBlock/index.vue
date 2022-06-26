<template>
  <div class="menu-block-container">
    <div class="menu-items-container" @mouseleave="onHoverLeave()">
      <div
        class="menu-item"
        :class="{
          'parent-div-for-submenu-is-active': value.submenu === subMenuData,
        }"
        v-for="(value, menuItemId) in menuItems"
        :key="menuItemId"
        @mouseover="onHover(menuItemId)"
        @click="onGoToRoute(menuItemId)"
      >
        <div class="menu-item-title">
          <span>
            {{ value.title }}
          </span>
        </div>
      </div>
      <div class="sub-menu-container">
        <sub-menu-block
          v-if="isSubMenuActive && subMenuData"
          :menu-data="subMenuData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubMenuBlock from "./SubMenuBlock";
import { menuItems } from "../settings.js";
export default {
  name: "MenuBlock",
  components: {
    SubMenuBlock,
  },
  data() {
    return {
      menuItems,
      isSubMenuActive: false,
      subMenuData: null,
    };
  },

  methods: {
    onHover(menuItemId) {
      this.subMenuData = this.menuItems[menuItemId].submenu;
      this.isSubMenuActive = true;
    },

    onHoverLeave() {
      this.isSubMenuActive = false;
      this.subMenuData = null;
    },
    onGoToRoute() {
      this.$router.push({
        name: "allProducts",
      });
    },
  },
};
</script>

<style lang="scss"></style>
