<script setup>

import pastaVideo from "@/assets/pastaVideo.mp4"
import beefVideo from "@/assets/beefVideo.mp4"
import dessertVideo from "@/assets/dessertVideo.mp4"

const playVideo = (video) => {
    const videoElement = document.getElementById(video);
    videoElement.play();
};

const pauseVideo = (video) => {
    const videoElement = document.getElementById(video);
    videoElement.pause()
};

</script>

<template>
    <div class="container md:max-w-[1000px] md:max-h-[600px]">
        <div class="md:flex items-center justify-center relative">
            <div  @click="navigateTo(`/categories/Beef`)" @touchstart="playVideo('beefVideo')" @touchend="pauseVideo('beefVideo')" @mouseover="playVideo('beefVideo')" @mouseleave="pauseVideo('beefVideo')" class="beef-container h-full relative lg:rounded-l-3xl overflow-hidden">
                <video id="beefVideo" :src="beefVideo" class="pointer-events-none w-full max-h-[700px]" muted loop style="object-fit: cover;"/>
                <div class="overlay"></div>
                <div class="text-container p-7 flex items-center justify-between">
                    <div>
                        <p class="font-light text-2xl">Recipes</p>
                        <h2 class=" text-3xl">BEEF</h2>
                    </div>
                    <Icon name="material-symbols:arrow-right-alt" color="white" size="50" />
                </div>
            </div>
            <div @click="navigateTo(`/categories/Dessert`)" @touchstart="playVideo('dessertVideo')" @touchend="pauseVideo('dessertVideo')" @mouseover="playVideo('dessertVideo')" @mouseleave="pauseVideo('dessertVideo')" class="dessert-container h-full relative">
                <video id="dessertVideo" :src="dessertVideo" class="pointer-events-none w-full max-h-[700px]" muted loop style="object-fit: cover;"/>
                <div class="overlay"></div>
                <div class="text-container p-7 flex items-center justify-between">
                    <div>
                        <p class="font-light text-2xl">Recipes</p>
                        <h2 class=" text-3xl">DESSERT</h2>
                    </div>
                    <Icon name="material-symbols:arrow-right-alt" color="white" size="50" />

                </div>
            </div>
            <div  @click="navigateTo(`/categories/Pasta`)" @touchstart="playVideo('pastaVideo')" @touchend="pauseVideo('pastaVideo')" @mouseover="playVideo('pastaVideo')" @mouseleave="pauseVideo('pastaVideo')" class="pasta-container h-full lg:rounded-r-3xl overflow-hidden relative">
                <video id="pastaVideo" :src="pastaVideo" class="pointer-events-none w-full max-h-[700px]" muted loop style="object-fit: cover;"/>
                <div class="overlay"></div>
                <div class="text-container p-7 flex items-center justify-between">
                    <div>
                        <p class="font-light text-2xl">Recipes</p>
                        <h2 class=" text-3xl">PASTA</h2>
                    </div>
                    <Icon name="material-symbols:arrow-right-alt" color="white" size="50" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(22, 22, 22, 0.63) 0%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
}

.text-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  z-index: 1;
}

.beef-container:hover, .dessert-container:hover, .pasta-container:hover {

    .overlay {
        background: linear-gradient(to top, rgba(128, 128, 128, 0.664), rgba(0, 0, 0, 0) 100%);
    }
    cursor: pointer;


}
</style>