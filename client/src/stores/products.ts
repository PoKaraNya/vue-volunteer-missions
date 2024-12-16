import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

type HotPlace = {
  id: number
  name: string
  description?: string
  price: number
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<HotPlace[]>([]);

  async function init() {
    const {data} = await api.get('/products')
    products.value = data
  }

  return {products, init};
});
