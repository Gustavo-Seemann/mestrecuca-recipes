<script setup>
</script>

<template>
  <header class="top-0 z-50 bg-secondary items-center flex flex-col justify-center">
    <div class="w-full flex items-center justify-center border-b border-solid border-black">
        <div class="container max-w-[900px]">
            <div class="flex items-center justify-center">
                <div class="flex items-center">
                    <NuxtImg src="/logo.png" class="max-h-[120px]" />
                    <h1 class="text-4xl" style="font-family:'Ingrid Darling'">MestreCuca</h1>
                </div>
                <div class="ml-5 max-w-[400px] w-full">
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
    <div class="w-full flex items-center justify-center p-5 border-b border-solid border-black shadow-md">
        <div class="container max-w-[900px]">
            <NavBarLinks />
        </div>
    </div>
  </header>
</template>
