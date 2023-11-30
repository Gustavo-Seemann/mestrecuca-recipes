<template>
    <div class="flex flex-col items-center justify-center">
        <Banner />
        <div class="container max-w-[1000px]">
            <p class="text-2xl ml-3 font-bold text-primary">Try something new and delicious</p>
            <div class="flex items-center justify-center mt-2">
                <FeaturedRecipes />
                <FeaturedRecipes />
                <FeaturedRecipes />
            </div>
            <div class="mb-10">
                <h2 class="text-2xl ml-3 font-bold text-primary mb-3">Most famous categories</h2>
                <FamousCategories />
            </div>
        </div>
    </div>
</template>