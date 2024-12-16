<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { useSupplyCenterStore } from '@/stores/supplyCenter';
import { computed } from 'vue';

const mapStore = useMapStore();
const supplyCenterStore = useSupplyCenterStore();
const current = computed(() => {
  const currentIndex = mapStore.currentSelected?.index;
  return currentIndex !== undefined && supplyCenterStore.supplyCenter[currentIndex];
});
</script>

<template>
  <div class="w-96 p-4 bg-zinc-900 mr-4 rounded-md">
    <div class="flex justify-between">
      <h2>
        {{ $t('supplyCenter.title') }}
      </h2>
      <button @click="mapStore.clearCurrentSelected">
        <i class="pi pi-times" />
      </button>
    </div>
    <div>
      {{ current && current?.name }}
    </div>
    <div v-if="current" class="flex flex-col gap-2">
      {{$t('supplyCenter.products')}}:
      <div v-for="{product, count} of current.products">
        {{ product.name }} | {{$t('supplyCenter.quantity')}}: {{ count }}
        <hr>
        {{product.description}}
      </div>
    </div>
  </div>
</template>
