import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '@/lib/axios';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);

  async function init() {
    const {data} = await api.get('/products')
    products.value = data
  }

  return {products, init};
});
