import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

export const useMissionsStore = defineStore('missions', () => {
  const missions = ref([]);

  async function init() {
    const {data} = await api.get('/missions')
    missions.value = data
  }

  return {missions, init};
});
