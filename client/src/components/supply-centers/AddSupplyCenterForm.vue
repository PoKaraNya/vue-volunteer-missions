<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { useToast } from 'primevue/usetoast';
import { AxiosError } from 'axios';
import { api } from '@/lib/axios';

const emits = defineEmits(['hide', 'updateData']);

function handleHide() {
  emits('hide');
}

const authSchema = yup.object({
  name: yup.string().required(),
  latitude: yup.string().required(),
  longitude: yup.string().required(),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(authSchema),
});

const [name] = defineField('name');
const [latitude] = defineField('latitude');
const [longitude] = defineField('longitude');

const toast = useToast();

const onSubmit = handleSubmit(
  async ({ longitude, latitude, name }) => {
    try {
      await api.post('/supply-center', {
        name,
        longitude: +longitude,
        latitude: +latitude,
      });
      emits('updateData');
      emits('hide');
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.add({
          severity: 'error',
          summary: error.response?.data.message,
          life: 2000,
        });
      }
    }
  },
);
</script>

<template>
  <form @submit="onSubmit">
    <div>
      <label class="block mt-5 mb-1" for="name">Name</label>
      <InputText
        v-model="name"
        aria-describedby="name-help"
        type="text"
        :class="{ 'p-invalid': errors.name, 'w-full': true }"
      />
      <small id="name-help" class="block">{{ errors.name }}</small>
    </div>

    <div>
      <label class="block mt-5 mb-1" for="latitude">Latitude</label>
      <InputText
        v-model="latitude"
        aria-describedby="latitude-help"
        type="number"
        :class="{ 'p-invalid': errors.latitude, 'w-full': true }"
      />
      <small id="latitude-help" class="block">{{ errors.latitude }}</small>
    </div>

    <div>
      <label class="block mt-5 mb-1" for="longitude">Longitude</label>
      <InputText
        v-model="longitude"
        aria-describedby="longitude-help"
        type="number"
        class="w-full"
        :class="{ 'p-invalid': errors.longitude }"
      />
      <small id="longitude-help" class="block">{{ errors.longitude }}</small>
    </div>

    <div class="flex gap-2">
      <Button type="button" class="mt-5" @click="handleHide">Cancel</Button>
      <Button type="submit" class="mt-5">Submit</Button>
    </div>
  </form>
</template>
