<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { useHotPlaceStore } from '@/stores/hotPlace';
import { computed, ref } from 'vue';
import { useSupplyCenterStore } from '@/stores/supplyCenter';
import { Select, Button } from 'primevue';
import { useI18n } from 'vue-i18n';
import { useMissionsStore } from '@/stores/missions';

const mapStore = useMapStore();
const hotPlaceStore = useHotPlaceStore();
const supplyCenterStore = useSupplyCenterStore();
const missionsStore = useMissionsStore();

const current = computed(() => {
  const currentIndex = mapStore.currentSelected?.index;
  return currentIndex !== undefined ? hotPlaceStore.hotPlaces[currentIndex] : null;
});

const selectedSupplyCenter = ref<{code: string, name: string} | null>(null)
const {t} = useI18n()

function createMission() {
  if (!selectedSupplyCenter.value?.code || !current?.value?.id) return
  missionsStore.create(
    +selectedSupplyCenter.value?.code,
    +current?.value?.id,
    'Resque'
  )
}

</script>

<template>
  <div class="w-96 p-4 bg-zinc-900 mr-4 rounded-md">
    <div class="flex justify-between">
      <h2>
        {{ $t('hotPlace.title') }}
      </h2>
      <button @click="mapStore.clearCurrentSelected">
        <i class="pi pi-times" />
      </button>
    </div>
    <div>
      {{ current && current?.name }}
    </div>

    <div class="mt-10 space-y-2">
      <hr>
      <h3>{{ $t('hotPlace.createResqueMission') }}</h3>
      <Select
        v-model="selectedSupplyCenter"
        :options="supplyCenterStore.supplyCenter.map(({id, name}) => ({name, code: id}))"
        class="w-full"
        option-label="name"
        :placeholder="t('hotPlace.chooseSupplyCenter')"
      />

      <Button @click="createMission">{{$t('hotPlace.create')}}</Button>
    </div>
  </div>
</template>
