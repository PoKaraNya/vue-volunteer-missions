import { defineStore } from 'pinia';
import { ref } from 'vue';

type CurrentSelected = {
  index: number
  type: 'HOT_PLACE' | 'SUPPLY_CENTER'
}

export const useMapStore = defineStore('map', () => {
  const currentSelected = ref<CurrentSelected | null>(null);

  function setCurrentSelected(value: CurrentSelected) {
    currentSelected.value = value;
  }

  function clearCurrentSelected() {
    currentSelected.value = null;
  }

  return { currentSelected, setCurrentSelected, clearCurrentSelected };
});
