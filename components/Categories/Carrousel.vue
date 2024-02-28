<template>
    <div class="container flex items-center">
        <div class="prevButton hover:cursor-pointer" @click="prevSlide"><Icon name="material-symbols:arrow-left-alt" color="#5B0000" size="50" /></div>
      <Swiper
        v-if="isClient"
        class="flex items-center justify-center"
        id="mySlider"
        :slides-per-view="isMobile? 1 : 5"
        :navigation="{ nextEl: '.nextButton', prevEl: '.prevButton' }"
        :modules="modules"
      >
        <SwiperSlide v-for="category in categories">
          <div class="flex flex-col justify-center items-center">
            <div @click="navigateTo(`/categories/${category.strCategory}`)" class="hover:cursor-pointer image-container w-[150px] h-[150px] rounded-full bg-white border-4 border-white overflow-hidden shadow-md hover:shadow-lg mb-3">
              <img :src="category.strCategoryThumb" alt="Imagem da Categoria" style="height: 100%; object-fit: cover;">
            </div>
            <h1>{{ category.strCategory }}</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="nextButton hover:cursor-pointer" @click="nextSlide"><Icon name="material-symbols:arrow-right-alt" color="#5B0000" size="50" /></div>
    </div>
  </template>
  
  <script setup>
  import useFetchCategories from '~~/composables/useFetchCategories';
  import { ref } from 'vue';
  import { Swiper, SwiperSlide} from 'swiper/vue';
  import { Navigation } from 'swiper/modules';
  
  import 'swiper/css';
  import 'swiper/css/navigation';
  
  const categories = await useFetchCategories();
  const modules = ref([Navigation]);

  const isMobile = computed(() => {
    if (window) {
      return window?.innerWidth < 640
    }
    return false
  });
  const isClient = ref(false);

  onMounted(() => {
    isClient.value = true;
  });
  </script>
  
  <style scoped>
  /* .swiper-button-prev,
  .swiper-button-next {
    width: 50px;
    background-repeat: no-repeat;
    &:after {
      content: 'a';
    }
  } */
  
  /* Ajuste a posição das flechas conforme necessário */
  </style>
  