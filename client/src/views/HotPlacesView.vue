<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AddSupplyCenterForm from '@/components/supply-centers/AddSupplyCenterForm.vue';
import { Button, Column, DataTable, Dialog } from 'primevue';
import { useHotPlaceStore } from '@/stores/hotPlace';
import AddHotPlaceForm from '@/components/hot-places/AddHotPlaceForm.vue';
import { api } from '@/lib/axios';

const store = useHotPlaceStore();

onMounted(() => {
  store.init();
});

const visible = ref<boolean>(false);

async function handleDelete(id: number) {
  await api.delete(`/hot-place/${id}`)
  await store.init()
}
</script>
<template>
  <main class="w-full flex flex-col gap-2 h-full overflow-y-auto">
    <Dialog
      v-model:visible="visible"
      modal
      header="Add Hot Place"
      :style="{ width: '25rem' }"
    >
      <AddHotPlaceForm @hide="visible = false" @update-data="store.init()" />
    </Dialog>

    <h1>
      Hot places
    </h1>
    <DataTable
      v-if="store.hotPlaces"
      :value="store.hotPlaces"
      class="w-full"
      size="large"
    >
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column header="Latitude" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{ slotProps.data.location.latitude }}
          </span>
        </template>
      </Column>
      <Column header="Longitude" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{ slotProps.data.location.longitude }}
          </span>
        </template>
      </Column>
      <Column header="Longitude" bodyClass="text-center">
        <template #body="slotProps">
          <Button @click="handleDelete(slotProps.data.id)">
            <i class="pi pi-trash"/>
          </Button>
        </template>
      </Column>
    </DataTable>

    <Button label="Add" @click="visible = true" class="w-20" />
  </main>
</template>
