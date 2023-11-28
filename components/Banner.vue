<script setup>
import bannerChefVideo from "@/assets/bannerChefVideo.mp4"
</script>

<template>
  <div class="flex items-center justify-center py-10">
    <div class="container max-w-[1000px]">
      <div class="video-container relative overflow-hidden rounded-3xl">
        <video class="w-full h-full rounded-3xl" :src="bannerChefVideo" autoplay loop muted />
        <div class="overlay"></div>
        <div class="text-container flex justify-between p-10 items-center">
            <div>                
                <h1 class="text-5xl font-bold text-white">Cook like a Mestre-cuca</h1>
                <p class="text-3xl text-white font-light">Learn our best recipes.</p>
            </div>
            <Icon name="material-symbols:arrow-right-alt" color="white" class="mt-4" size="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
