<template>
  <div>
    <main-master-page>
      <template #content>
        <edit-product-form />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import EditProductForm from "@/components/EditProductForm";
import MainMasterPage from "@/masterPages/MainMasterPage.vue";
export default {
  name: "EditPage",
  components: {
    MainMasterPage,
    EditProductForm,
  },
};
</script>

<style lang="scss" scoped></style>
