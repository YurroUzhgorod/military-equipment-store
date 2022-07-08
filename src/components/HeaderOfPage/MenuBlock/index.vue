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
        @mouseover="onHover(menuItem)"
        @click="onGoToCategory(value.id)"
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
          @subCategory="findSubcategory"
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
      productsCategory: null,
      productsSubCategory: null,
    };
  },

  methods: {
    onHover(menuItem) {
      this.subMenuData = this.menuItems[menuItem].submenu;
      this.isSubMenuActive = true;
      this.productsCategory = this.menuItems[menuItem].id;
    },

    onHoverLeave() {
      this.isSubMenuActive = false;
      this.subMenuData = null;
    },
    onGoToCategory(category, subCategory) {
      this.$router.push({
        name: "products",
        params: { category, subCategory },
      });
    },

    findSubcategory(subCategoryValue) {
      this.productsSubCategory = subCategoryValue;
    },
  },

  watch: {
    productsSubCategory(newSubCategory) {
      let category = this.productsCategory;

      this.onGoToCategory(category, newSubCategory);
    },
  },
};
</script>

<style lang="scss"></style>
