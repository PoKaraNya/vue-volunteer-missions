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
    <div>
    </div>
    <button @click="handleLogout" v-if="isLoggedIn">
      {{ $t('header.logout') }}
    </button>
    <RouterLink to="/auth/login" v-else>
      {{ $t('header.login') }}
    </RouterLink>
  </nav>
</template>
