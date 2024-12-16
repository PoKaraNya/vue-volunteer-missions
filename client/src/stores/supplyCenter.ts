import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

type Product = {
  count: number
  product: {
    id: number
    name: string
    description: number
    price: number
  }
}

type SupplyCenter = {
  id: number
  name: string
  location: {
    latitude: number
    longitude: number
  }
  products: Product[]
}

export const useSupplyCenterStore = defineStore('supply-center', () => {
  const supplyCenter = ref<SupplyCenter[]>([]);

  async function init() {
    const { data } = await api.get('/supply-center');
    supplyCenter.value = data;
  }

  return { supplyCenter, init };
});
