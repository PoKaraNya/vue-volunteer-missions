<script setup lang="ts">
import { Circle } from 'vue3-google-map';
import { ref } from 'vue';
import { hotPlaces } from '@/data/hotCenters';
import { supplyCenters } from '@/data/supplyCenters';
import GoogleMapWrapper from '@/components/map/GoogleMapWrapper.vue';

const currentHover = ref<string | null>(null);

function handleMouseOver(index: number) {
  currentHover.value = hotPlaces[index].info.title;
}

function handleMouseOut() {
  currentHover.value = null;
}

function handleClick(index: number) {
  console.log('handleClick');
  console.log(hotPlaces[index]);
}


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
        v-for="({lng, lat}, i) in hotPlaces"
        :key="i"
        :options="{
          center: {lng, lat},
          radius: 15000,
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
        v-for="({lng, lat}, i) in supplyCenters"
        :key="i"
        :options="{
          center: {lng, lat},
          radius: 15000,
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
