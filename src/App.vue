<template>
  <v-app>
    <v-main>
      <navigation-panel/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import NavigationPanel from '@/components/NavigationPanel.vue'
</script>
