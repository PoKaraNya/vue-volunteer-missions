import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

type HotPlace = {
  id: number
  name: string
  location: {
    latitude: number
    longitude: number
  }
}

export const useHotPlaceStore = defineStore('hot-place', () => {
  const hotPlaces = ref<HotPlace[]>([]);

  async function init() {
    const {data} = await api.get('/hot-place')
    hotPlaces.value = data
  }

  return {hotPlaces, init};
});
