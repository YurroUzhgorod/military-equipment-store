<template>
  <div class="menu-block-container">
    <div class="menu-items-container" @mouseleave="onHoverLeave()">
      <div
        class="menu-item"
        :class="{
          'parent-menu-is-active': value.submenu === subMenuData,
        }"
        v-for="(value, menuItem) in menuItems"
        :key="menuItem"
        @mouseover="onHover(menuItem, value.id)"
        @click="onGoToProductCategory(value.id)"
      >
        <div class="menu-item-title">
          <span>
            {{ value.title }}
          </span>
        </div>
      </div>
      <div class="sub-menu-container">
        <sub-menu-block
          v-if="isSubMenuActive && subMenuData.columnsMenusSection"
          :menu-data="subMenuData"
          @subCategory="onGoToProductSubCategory"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubMenuBlock from "./SubMenuBlock";
import { menuItems } from "../settings.js";

import { mapActions } from "vuex";
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
      lastOnHoverCategory: null,
    };
  },

  methods: {
    ...mapActions("products", ["loadProducts"]),

    onHover(menuItem, onHoverCategoryName) {
      this.lastOnHoverCategory = onHoverCategoryName;

      this.subMenuData = this.menuItems[menuItem].submenu;
      this.isSubMenuActive = true;
      this.productsCategory = this.menuItems[menuItem].id;
    },

    onHoverLeave() {
      this.isSubMenuActive = false;
      this.subMenuData = null;
    },

    async onGoToProductSubCategory(subCategory) {
      console.log(subCategory);
      const category = this.lastOnHoverCategory;
      this.$router.push({
        name: "products",
        params: { category, subCategory: subCategory },
      });
      await this.loadProducts({ subCategory });
    },

    async onGoToProductCategory(category) {
      this.$router.push({
        name: "products",
        params: { category },
      });
      await this.loadProducts({ category });
    },
  },
};
</script>

<style lang="scss"></style>
