<template>
  <div class="sub-menu-block-container">
    <div class="links-container">
      <div
        class="column-list-container"
        v-for="column in menuData.columnsMenusSection"
        :key="column.id"
      >
        <div
          column-content-clock
          v-for="columnsListItems in column.listItems"
          :key="columnsListItems.id"
        >
          <div class="" @click="goToroute(columnsListItems.routeId)">
            <span>
              {{ columnsListItems.title }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="image-container">
      <img :src="menuData.imageSection.imgSrc" alt="no photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMenuBlock",

  props: {
    menuData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss"></style>
