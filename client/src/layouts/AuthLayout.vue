<script setup lang="ts">
import Toast from 'primevue/toast';
</script>
<template>
  <main class="h-screen w-screen flex items-center justify-center">
    <div class="bg-zinc-900 p-8 rounded-xl border border-emerald-500">
      <RouterView />
    </div>
  </main>
  <Toast/>
</template>
