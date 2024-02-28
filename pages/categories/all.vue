<script setup>

import useFetchCategories from '~/composables/useFetchCategories';

const categories = await useFetchCategories();



useHead({
  title: 'Categories',
});

</script>
<template>
    <div class="flex items-center justify-center flex-col mt-10">
        <div>
            <h1 class="text-4xl font-bold text-primary"> Categories</h1>
        </div>
        <div class="container flex flex-wrap items-center justify-center mt-5">
            <div v-for="category in categories">
                <CategoriesPreview @click="navigateTo(`/categories/${category?.strCategory}`);"  :category="category" />
            </div>
        </div>
    </div>
</template>