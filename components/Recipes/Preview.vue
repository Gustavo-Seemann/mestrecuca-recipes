<script setup>
const props = defineProps({
  recipe: Object,
});

</script>

<template>
    <div class="flex justify-center pb-10">
        <div class="meal-card bg-white p-4 mx-5 rounded-3xl shadow-lg">
            <div class="relative photo-container rounded-2xl overflow-hidden">
                <NuxtImg v-if="recipe" :src="recipe?.strMealThumb" class="photo max-w-[270px]" />
                <div class="overlay"></div>
                <div class="text-container flex justify-center items-center mb-7">
                    <h1 class="text-xl text-center">{{ recipe?.strMeal || 'Meal' }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(77, 77, 77, 0.664), rgba(255, 0, 0, 0) 100%);
  pointer-events: none;
}

.text-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  z-index: 1;
}

.photo-container:hover {
    .photo {
        transform: scale(1.2);
        transition: ease-out 0.3s;
    }

    .overlay {
        background: linear-gradient(to top, rgba(128, 128, 128, 0.664), rgba(0, 0, 0, 0) 100%);
    }
    cursor: pointer;
}

</style>