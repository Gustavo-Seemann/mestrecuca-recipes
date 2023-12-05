<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <div>
      <NuxtImg src="/logo.png" />
    </div>
    <h1 class="text-9xl">{{ error?.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error?.message }}</p>
    <button
      @click="handleError"
      class="rounded mt-7 text-2xl bg-primary hover:brightness-200 ease-linear transition-all duration-50 px-7 py-4 text-white"
    >
      Go Back
    </button>
  </div>
</template>
