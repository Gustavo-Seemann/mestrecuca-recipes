<script setup>

import useFetchRecipe from '~/composables/useFetchRecipe';

const route = useRoute();

const recipe = await useFetchRecipe(route.params.id);

useHead({
  title: `${recipe ? recipe.strMeal : 'Recipe'}`,
});
</script>

<template>
  <div>
    <RecipeView :recipe="recipe" />
  </div>
</template>