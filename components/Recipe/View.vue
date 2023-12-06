<script setup>

const props = defineProps({
  recipe: Object,
});

const capitalizeFirstLetter =  (value) => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const getFlag = (area) => {

    const areaToFlag = {
        'British': 'gp',
        'American': 'us',
        'French': 'fr',
        'Canadian': 'ca',
        'Jamaican': 'jm',
        'Chinese': 'cn',
        'Dutch': 'nl',
        'Egyptian': 'eg',
        'Greek': 'gr',
        'Indian': 'in',
        'Irish': 'ie',
        'Italian': 'it',
        'Japanese': 'jp',
        'Kenyan': 'kn',
        'Malaysian': 'my',
        'Mexican': 'mx',
        'Moroccan': 'ma',
        'Croatian': 'hr',
        'Norwegian': 'no',
        'Portuguese': 'pt',
        'Russian': 'ru',
        'Argentine': 'ar',
        'Spanish': 'es',
        'Slovak': 'sk',
        'Thai': 'th',
        'Saudi Arab': 'sa',
        'Vietnamese': 'vn',
        'Turkish': 'tr',
        'Syrian': 'sy',
        'Algerian': 'dz',
        'Tunisian': 'tn',
        'Polish': 'pl',
        'Filipino': 'ph'
    };
    const flag = areaToFlag[area] || null;

    let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/2560px-Flag_of_the_United_Nations.svg.png'

    if (flag) {
        url = `https://www.themealdb.com/images/icons/flags/big/64/${flag}.png`
    }

    return url
}

const getYouTubeEmbedLink = (youtubeLink) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = youtubeLink.match(regex);
  const videoId = match && match[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : null;
}
</script>

<template>
  <div class="flex flex-col items-center justify-center py-10">
    <div class="container max-w-[1000px]">
        <div class="flex justify-between items-center mb-3">
            <div class="max-w-[70%] break-words">
                <h1 class="text-4xl font-bold text-primary"> {{ recipe.strMeal }} </h1>
            </div>
            <NuxtImg :src="getFlag(recipe.strArea)" class="w-[64px]"/>
        </div>
        <iframe
          width="100%"
          height="500"
          :src="getYouTubeEmbedLink(recipe.strYoutube)"
          frameborder="0"
          allowfullscreen
        ></iframe>
      <div>
        <h2 class="text-2xl font-bold text-primary mt-7 mb-3">Instructions</h2>
        <p class="text-lg"> {{ recipe.strInstructions }} </p>
      </div>
      <div class="flex justify-between mb-10">
        <div>
          <h2 class="text-2xl font-bold text-primary mt-7 mb-3">Ingredients</h2>
          <div v-for="i in 20" :key="i" class="text-lg">
            <li v-if="recipe['strIngredient' + i]">{{ capitalizeFirstLetter(recipe['strIngredient' + i]) }} - {{ recipe['strMeasure' + i] }}</li>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center mr-5">
          <NuxtImg :src="recipe.strMealThumb" class="max-w-[400px] rounded-xl mt-10 shadow-lg"/>
          <p class="italic text-sm">{{ recipe.strMeal }}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(22, 22, 22, 0.815) 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
}

.text-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  z-index: 1;
}
</style>
