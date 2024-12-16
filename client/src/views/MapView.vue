<script setup lang="ts">
import { Circle } from 'vue3-google-map';
import { onMounted } from 'vue';
import GoogleMapWrapper from '@/components/map/GoogleMapWrapper.vue';
import { useHotPlaceStore } from '@/stores/hotPlace';
import { useSupplyCenterStore } from '@/stores/supplyCenter';
import { useMapStore } from '@/stores/map';
import SelectedHotPlaceMenu from '@/components/map/SelectedHotPlaceMenu.vue';
import SelectedSupplyCenterMenu from '@/components/map/SelectedSupplyCenterMenu.vue';
import { useMissionsStore } from '@/stores/missions';

const hotPlaceStore = useHotPlaceStore();
const supplyCenterStore = useSupplyCenterStore();
const missionsStore = useMissionsStore();
const mapStore = useMapStore();

onMounted(() => {
  hotPlaceStore.init();
  supplyCenterStore.init();
  missionsStore.init();
});

function getCircleOptions(location: { longitude: number; latitude: number }, color: string,
) {
  return {
    center: {
      lng: location.longitude,
      lat: location.latitude,
    },
    radius: 12000,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillOpacity: 0.35,
    strokeColor: color,
    fillColor: color,
  };
}

</script>

<template>
  <div class="flex h-full gap-5">
    <GoogleMapWrapper>
      <Circle
        v-for="({location}, i) in hotPlaceStore.hotPlaces"
        :key="i"
        :options="getCircleOptions(location, '#FF0000')"
        @click="mapStore.setCurrentSelected({index: i, type: 'HOT_PLACE'})"
      />

      <Circle
        v-for="({location}, i) in supplyCenterStore.supplyCenter"
        :key="i"
        :options="getCircleOptions(location, '#3098ff')"
        @click="mapStore.setCurrentSelected({index: i, type: 'SUPPLY_CENTER'})"
      />
    </GoogleMapWrapper>
    <SelectedHotPlaceMenu v-if="mapStore.currentSelected?.type === 'HOT_PLACE'" />
    <SelectedSupplyCenterMenu v-if="mapStore.currentSelected?.type === 'SUPPLY_CENTER'" />
  </div>
</template>
