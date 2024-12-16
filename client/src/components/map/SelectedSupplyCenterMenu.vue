<script setup lang="ts">
import { useMapStore } from '@/stores/map';
import { useSupplyCenterStore } from '@/stores/supplyCenter';
import { computed, ref } from 'vue';
import { Button, Select } from 'primevue';
import { useMissionsStore } from '@/stores/missions';
import { useI18n } from 'vue-i18n';
import { useHotPlaceStore } from '@/stores/hotPlace';

const mapStore = useMapStore();
const supplyCenterStore = useSupplyCenterStore();
const hotPlaceStore = useHotPlaceStore();
const missionsStore = useMissionsStore();

const selectedHotPlace = ref<null | {name: string, code: string}>(null)
const {t} = useI18n()

const current = computed(() => {
  const currentIndex = mapStore.currentSelected?.index;
  return currentIndex !== undefined ? supplyCenterStore.supplyCenter[currentIndex] : null;
});

function createMission() {
  if (!selectedHotPlace.value?.code || !current?.value?.id) return
  missionsStore.create(
    +current?.value?.id,
    +selectedHotPlace.value?.code,
    'Delivery'
  )
}
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

    <div class="mt-10 space-y-2">
      <hr>
      <h3>{{ $t('supplyCenter.createDeliveryMission') }}</h3>
      <Select
        v-model="selectedHotPlace"
        :options="hotPlaceStore.hotPlaces.map(({id, name}) => ({name, code: id}))"
        class="w-full"
        option-label="name"
        :placeholder="t('supplyCenter.chooseHotPlace')"
      />

      <Button @click="createMission">{{$t('supplyCenter.create')}}</Button>
    </div>
  </div>
</template>
