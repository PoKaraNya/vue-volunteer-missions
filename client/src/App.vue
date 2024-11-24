<script setup lang="ts">
import { Circle, GoogleMap } from 'vue3-google-map';
import { ref } from 'vue';

const center = { lat: 49.483158, lng: 35.090178 };
const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const supplyCenters = [
  {
    info: {
      title: 'Дніпро',
    },
    lat: 48.44013426398058,
    lng: 35.06835937500001,
  },
  {
    info: {
      title: 'Запоріжжя',
    },
    lat: 47.830674012109434,
    lng: 35.09719848632813,
  },
  {
    info: {
      title: 'Харків',
    },
    lat: 49.93354407050617,
    lng: 36.23840332031251,
  },
  {
    info: {
      title: 'Київ',
    },
    lat: 50.45451208023374,
    lng: 30.524951171875004,
  },
  {
    info: {
      title: 'Кропивницький',
    },
    lat: 48.500227605781035,
    lng: 32.24761962890626,
  },
  {
    info: {
      title: 'Полтава',
    },
    lat: 49.58422936214075,
    lng: 34.54994201660157,
  },
];

const hotPlaces = [
  {
    info: {
      title: 'Глибоке',
    },
    lat: 50.25510793210134,
    lng: 36.42362594604493,
  },
  {
    info: {
      title: 'Вовчанськ',
    },
    lat: 50.2925745952119,
    lng: 36.93646430969239,
  },
  {
    info: {
      title: 'Куп\'янськ',
    },
    lat: 49.71082760568237,
    lng: 37.615985870361335,
  },
  {
    info: {
      title: 'Федорівка',
    },
    lat: 48.765637591532176,
    lng: 38.047456741333015,
  },
  {
    info: {
      title: 'Торецьк',
    },
    lat: 48.39584391092325,
    lng: 37.84905910491944,
  },
  {
    info: {
      title: 'Нікополь',
    },
    lat: 47.570966845786124,
    lng: 34.40505981445313,
  },
  {
    info: {
      title: 'Кам\'янське',
    },
    lat: 47.54203383781293,
    lng: 35.36713600158692,
  },
  {
    info: {
      title: 'Білогір\'я',
    },
    lat: 47.52471580463508,
    lng: 36.00302067997739,
  },
  {
    info: {
      title: 'Червоне',
    },
    lat: 47.654750371489946,
    lng: 36.39324160408951,
  },
  {
    info: {
      title: 'Макіївка',
    },
    lat: 49.22757541544695,
    lng: 37.979822158813484,
  },
  {
    info: {
      title: 'Лисівка',
    },
    lat: 48.22432956012048,
    lng: 37.26553916931153,
  },
  {
    info: {
      title: 'Макарівка',
    },
    lat: 47.77786707536664,
    lng: 36.80282592773438,
  },
];

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
    <GoogleMap
      :api-key="googleApiKey"
      style="width: 100%; height: 700px"
      :center="center"
      :zoom="7"
      :min-zoom="7"
      :max-zoom="10"
      disable-double-click-zoom
      :street-view-control="false"
      :fullscreen-control="false"
      :libraries="['core', 'places', 'routes', 'marker']"
      disable-default-ui
    >
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
    </GoogleMap>

    <div>
      {{ currentHover }}
    </div>
  </div>
</template>
