import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

export const useMissionsStore = defineStore('missions', () => {
  const missions = ref([]);

  async function init() {
    const {data} = await api.get('/missions')
    missions.value = data
  }

  async function create(supplyCenterId: number, hotPlaceId: number, type: string) {
    await api.post('/missions', {supplyCenterId, hotPlaceId, type})
    await init()
  }

  return {missions, init, create};
});
