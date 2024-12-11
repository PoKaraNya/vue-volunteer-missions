<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>
<template>
  <main class="h-screen flex flex-col">
    <Header />
    <div class="h-full overflow-y-hidden [&>div]:h-full">
      <RouterView />
    </div>
  </main>
</template>
