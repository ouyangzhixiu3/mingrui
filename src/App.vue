<script setup lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-[var(--surface-dark)] text-white">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
