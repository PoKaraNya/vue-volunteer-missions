<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Button, Column, DataTable, Dialog } from 'primevue';
import { api } from '@/lib/axios';
import { useProductsStore } from '@/stores/products';
import AddProductsForm from '@/components/products/AddProductsForm.vue';

const store = useProductsStore();

onMounted(() => {
  store.init();
});

const visible = ref<boolean>(false);

async function handleDelete(id: number) {
  await api.delete(`/products/${id}`);
  await store.init();
}
</script>
<template>
  <main class="w-full flex flex-col gap-2">
    <Dialog
      v-model:visible="visible"
      modal
      header="Products"
      :style="{ width: '25rem' }"
    >
      <AddProductsForm @hide="visible = false" @update-data="store.init()" />
    </Dialog>

    <h1>
      Products
    </h1>
    <DataTable
      v-if="store.products"
      :value="store.products"
      class="w-full"
      size="large"
    >
      <Column field="id" header="ID" />
      <Column field="name" header="Name" />
      <Column field="description" header="Description" />
      <Column field="price" header="Price" />
      <Column header="" bodyClass="text-center">
        <template #body="slotProps">
          <Button @click="handleDelete(slotProps.data.id)">
            <i class="pi pi-trash" />
          </Button>
        </template>
      </Column>
    </DataTable>

    <Button label="Add" @click="visible = true" class="w-20" />
  </main>
</template>
