<script setup lang="ts">
import { onMounted } from 'vue';
import { Column, DataTable } from 'primevue';
import { useMissionsStore } from '@/stores/missions';

const store = useMissionsStore();

onMounted(() => {
  store.init();
});

</script>
<template>
  <main class="w-full flex flex-col gap-2">
    <h1>
      Missions
    </h1>
    <DataTable
      v-if="store.missions"
      :value="store.missions"
      class="w-full"
      size="large"
    >
      <Column field="id" header="ID" />
      <Column header="Supply center" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{ slotProps.data.supplyCenter.name }}
          </span>
        </template>
      </Column>
      <Column header="Hot place" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{ slotProps.data.hotPlace.name }}
          </span>
        </template>
      </Column>
      <Column field="type" header="Type" />
      <Column field="status" header="Status" />
      <Column header="Created at" bodyClass="text-center">
        <template #body="slotProps">
          <span>
           {{ slotProps.data.createdAt }}
          </span>
        </template>
      </Column>
    </DataTable>
  </main>
</template>
