<script setup lang="ts">
import { useRouter } from 'vue-router';

const isLoggedIn = !!localStorage.getItem('token');

const router = useRouter();

function handleLogout() {
  localStorage.removeItem('token');
  router.push('/auth/login');
}

</script>
<template>
  <nav class="flex justify-between p-4">
    <div class="flex gap-8">
      <RouterLink to="/">
        {{ $t('header.map') }}
      </RouterLink>
      <RouterLink to="/supply-centers">
        {{ $t('header.supplyCenters') }}
      </RouterLink>
      <RouterLink to="/hot-places">
        {{ $t('header.hotPlaces') }}
      </RouterLink>
      <RouterLink to="/products">
        {{ $t('header.products') }}
      </RouterLink>
      <RouterLink to="/missions">
        {{ $t('header.missions') }}
      </RouterLink>
    </div>
    <button @click="handleLogout" v-if="isLoggedIn">
      {{ $t('header.logout') }}
    </button>
    <RouterLink to="/auth/login" v-else>
      {{ $t('header.login') }}
    </RouterLink>
  </nav>
</template>
