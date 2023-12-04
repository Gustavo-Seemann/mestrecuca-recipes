<script setup>

import useFetchCategoryRecipes from '~/composables/useFetchCategoryRecipes';

const route = useRoute();

const recipes = await useFetchCategoryRecipes(route.params.name);



useHead({
  title: `${route.params.name} - Recipes`,
});

</script>
<template>
    <div class="flex items-center justify-center flex-col mt-10">
        <div>
            <h1 class="text-4xl font-bold text-primary"> {{ route.params.name }} Recipes</h1>
        </div>
        <div class="container flex flex-wrap items-center justify-center mt-5">
            <div v-for="recipe in recipes">
                <RecipesPreview :recipe="recipe" />
            </div>
        </div>
    </div>
</template>