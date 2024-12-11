<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { useHotPlaceStore } from '@/stores/hotPlace';
import { computed } from 'vue';

const mapStore = useMapStore();
const hotPlaceStore = useHotPlaceStore();
const current = computed(() => {
  const currentIndex = mapStore.currentSelected?.index;
  return currentIndex !== undefined && hotPlaceStore.hotPlaces[currentIndex];
});
</script>

<template>
  <div class="w-96 p-4 bg-zinc-900 mr-4 rounded-md">
    <div class="flex justify-between">
      <h2>
        {{ $t('hotPlace.title')}}
      </h2>
      <button @click="mapStore.clearCurrentSelected">
        {{ $t('supplyCenter.exit')}}
      </button>
    </div>
    <div>
      {{ current && current?.name }}
    </div>
  </div>
</template>
