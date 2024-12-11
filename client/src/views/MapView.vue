<script setup lang="ts">
import { Circle } from 'vue3-google-map';
import { onMounted, ref } from 'vue';
import GoogleMapWrapper from '@/components/map/GoogleMapWrapper.vue';
import { useHotPlaceStore } from '@/stores/hotPlace';
import { useSupplyCenterStore } from '@/stores/supplyCenter';

const hotPlaceStore = useHotPlaceStore()
const supplyCenterStore = useSupplyCenterStore()

const currentHover = ref<string | null>(null);

function handleMouseOver(index: number) {
  currentHover.value = hotPlaceStore.hotPlaces[index].name;
}

function handleMouseOut() {
  currentHover.value = null;
}

function handleClick(index: number) {
  console.log('handleClick');
  console.log(hotPlaceStore.hotPlaces[index]);
}

onMounted(() => {
  hotPlaceStore.init()
  supplyCenterStore.init()
})

</script>

<template>
  <div>
    <GoogleMapWrapper>
      <!--    <Marker-->
      <!--      v-for="({title, lng, lat}, i) in hotPlaces"-->
      <!--      :key="i"-->
      <!--      :options="{ position: {lng, lat}, title }"-->
      <!--    />-->
      <Circle
        v-for="({location}, i) in hotPlaceStore.hotPlaces"
        :key="i"
        :options="{
          center: {lng: location.longitude, lat: location.latitude},
          radius: 12000,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        }"
        @mouseover="handleMouseOver(i)"
        @mouseout="handleMouseOut"
        @click="handleClick(i)"
      />

      <Circle
        v-for="({location}, i) in supplyCenterStore.supplyCenter"
        :key="i"
        :options="{
       center: {lng: location.longitude, lat: location.latitude},
          radius: 12000,
          strokeColor: '#3098ff',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#3098ff',
          fillOpacity: 0.35,
        }"
        @mouseover="handleMouseOver(i)"
        @mouseout="handleMouseOut"
        @click="handleClick(i)"
      />
    </GoogleMapWrapper>

    <div>
      {{ currentHover }}
    </div>
  </div>
</template>
