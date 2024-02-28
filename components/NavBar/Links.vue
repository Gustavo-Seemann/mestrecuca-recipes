<script setup>
    const props = defineProps({
    isMobileStyle: Boolean,
    });

    const categories = ["Beef", "Chicken", "Dessert", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood"]

    const underlineEffect = `
        after:bg-primary 
        after:absolute 
        after:h-1 
        after:w-0 
        after:bottom-0 
        after:left-0 
        hover:after:w-full 
        after:transition-all 
        after:duration-300 
        cursor-pointer
    `

    const linkEffect = `
        py-1
        underline-offset-4 
        decoration-neutral-500 
        hover:text-primary 
        hover:brightness-200 
        ease-linear 
        transition-all 
        duration-50
    `

</script>

<template>
    <div :class="`${ isMobileStyle ? 'flex-col': 'justify-between items-center'} flex text-md font-bold`">
        <NuxtLink :class="`${linkEffect} ${underlineEffect}`" to="/">Home</NuxtLink>
        <NuxtLink v-for="category in categories" :key="category" :to="`/categories/${category}`" :class="`${linkEffect} ${underlineEffect}`">
            {{ category }}
        </NuxtLink>
        <NuxtLink to="/categories/all" :class="`${linkEffect} ${underlineEffect}`">
            All categories
        </NuxtLink>
    </div>
</template>