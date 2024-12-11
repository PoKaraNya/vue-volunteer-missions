<script setup lang="ts">
import { GoogleMap } from 'vue3-google-map';

const center = { lat: 49.483158, lng: 35.090178 };
const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>

<template>
  <GoogleMap
    :api-key="googleApiKey"
    style="width: 100%; height: 100%"
    class="h-screen"
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
    <slot />
  </GoogleMap>
</template>
