<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useSupplyCenterStore } from '@/stores/supplyCenter';
import AddSupplyCenterForm from '@/components/supply-centers/AddSupplyCenterForm.vue';
import { DataTable, Dialog, Column, Button } from 'primevue';

const store = useSupplyCenterStore()

onMounted(() => {
  store.init()
})

const visible = ref<boolean>(false)
</script>

<template>
  <main class="w-full flex flex-col gap-2">
    <Dialog
      v-model:visible="visible"
      modal
      header="Add Supply Center"
      :style="{ width: '25rem' }"
    >
      <AddSupplyCenterForm @hide="visible = false" @update-data="store.init()" />
    </Dialog>
    <DataTable
      v-if="store.supplyCenter"
      :value="store.supplyCenter"
      class="w-full"
      size="large"
    >
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column header="Latitude" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{slotProps.data.location.latitude}}
          </span>
        </template>
      </Column>
      <Column header="Longitude" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{slotProps.data.location.longitude}}
          </span>
        </template>
      </Column>
    </DataTable>

    <Button label="Add" @click="visible = true" class="w-20" />
  </main>
</template>
