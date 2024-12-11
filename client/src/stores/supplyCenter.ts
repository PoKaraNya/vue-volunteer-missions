import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

type SupplyCenter = {
  name: string
  location: {
    latitude: number
    longitude: number
  }
}

export const useSupplyCenterStore = defineStore('supply-center', () => {
  const supplyCenter = ref<SupplyCenter[]>([]);

  async function init() {
    const { data } = await api.get('/supply-center');
    supplyCenter.value = data;
  }

  return { supplyCenter, init };
});
