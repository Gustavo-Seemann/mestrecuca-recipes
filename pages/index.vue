<template>
    <div class="flex flex-col items-center justify-center">
        <Banner />
        <div class="container max-w-[1000px]">
            <p class="text-2xl ml-3 font-bold text-primary">Try something new and delicious</p>
            <div class="md:flex items-center justify-center mt-2">
                <RecipesFeatured />
                <RecipesFeatured />
                <RecipesFeatured />
            </div>
            <div class="mb-16">
                <h2 class="text-2xl ml-3 font-bold text-primary mb-3">Most famous categories</h2>
                <FamousCategories />
            </div>
            <div>
                <div class="flex justify-between mb-5">
                    <h2 class="text-2xl ml-3 font-bold text-primary mb-3">Categories</h2>
                    <button @click="navigateTo('/categories/all')" class="max-md:hidden small px-5 bg-primary text-base text-white rounded-lg hover:brightness-150 ease-linear transition-all duration-50">See all categories...</button>
                </div>
                <CategoriesCarrousel />
                <div class="hidden max-md:flex items-center justify-center mt-10">
                    <button @click="navigateTo('/categories/all')" class="small px-5 py-3 w-full mx-4 bg-primary text-base text-white rounded-lg hover:brightness-150 ease-linear transition-all duration-50">See all categories...</button>
                </div>
                
            </div>
        </div>
    </div>
</template>