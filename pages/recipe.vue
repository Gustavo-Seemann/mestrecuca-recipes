<script setup>
  const handleError = () => {
    clearError({
      redirect: "/",
    });
  };
</script>

<template>
    <div>
      <div class="mt-32 flex">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <div class="text-center mx-auto flex flex-col">
              <h1 class="text-5xl text-primary mb-4">
                Sorry, something went wrong
              </h1>
              <button
                class="text-white bg-primary px-10 py-3 rounded mt-4"
                @click="handleError"
              >
                Go Back
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </template>