<script setup>
    import { ref } from 'vue';

    const isMobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
</script>

<template>
    <header :class="`${isMobileMenuOpen ? 'fixed' : ''} top-0 z-50 bg-secondary items-center flex flex-col justify-center`">
      <div class="w-full flex items-center justify-center border-b border-solid border-black">
          <div class="container max-w-[900px]">
              <div class="flex items-center justify-between md:justify-center">
                  <div @click="navigateTo('/')"  class="hover:cursor-pointer select-none flex items-center">
                      <NuxtImg src="/logo.png" class="max-h-[90px] md:max-h-[120px]" />
                      <h1 class="text-3xl md:text-4xl" style="font-family:'Ingrid Darling'">MestreCuca</h1>
                    </div>
                    <div class="hidden max-md:flex items-center mr-3">
                        <Icon name="heroicons-solid:magnifying-glass" size="30" class="mr-4" />
                        <Icon
                        v-if="!isMobileMenuOpen"
                        name="solar:hamburger-menu-linear"
                        size="30"
                        @click="toggleMobileMenu"
                        />
                        <Icon v-if=" isMobileMenuOpen" name="heroicons-solid:x" size="30" @click="toggleMobileMenu" />
                    </div>
                  <div class="hidden md:block ml-5 max-w-[400px] w-full">
                      <div class="flex items-center bg-white rounded-3xl p-1 px-3">
                          <input
                              style="font-family:'Inria Serif'; font-weight: 500;"
                              placeholder="Search recipe..."
                              class="w-full outline-none"
                          />
                          <Icon name="heroicons-solid:magnifying-glass" color="grey" class="ml-2" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div v-if="isMobileMenuOpen" class="h-screen w-screen bg-secondary z-50">
            <div class="p-4">
                <NavBarLinks @click="toggleMobileMenu" :isMobileStyle="true" />
            </div>
        </div>
      <div class="hidden md:flex w-full items-center justify-center p-5 border-b border-solid border-black shadow-md">
          <div class="container max-w-[900px]">
              <NavBarLinks :isMobileStyle="false" />
          </div>
      </div>
    </header>
  </template>