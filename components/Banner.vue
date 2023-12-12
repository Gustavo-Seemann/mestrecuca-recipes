<script setup>
import bannerChefVideo from "@/assets/bannerChefVideo.mp4"
</script>

<template>
  <div class="banner flex items-center justify-center max-md:pb-10 md:py-10">
    <div class="container max-w-[1000px]">
      <div class="video-container h-[700px] md:h-full relative overflow-hidden lg:rounded-3xl">
        <video class="w-full h-full lg:rounded-3xl" :src="bannerChefVideo" autoplay loop muted style="object-fit: cover;" />
        <div class="overlay"></div>
        <div  @click="navigateTo('/categories/all')" class="text-container group hover:cursor-pointer flex justify-between max-md:p-3 max-md:pb-10 md:p-10 items-center">
            <div>                
                <h1 class="max-md:text-4xl text-5xl font-bold text-white">Cook like a Mestre-cuca</h1>
                <p class="max-md:text-2xl text-3xl text-white font-light">Learn our best recipes.</p>
            </div>
            <Icon name="material-symbols:arrow-right-alt" color="white" class="max-md:ml-3 mt-4 group-hover:animate-bounce" size="50" />
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
