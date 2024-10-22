<template>
    <a
      :href="props.url"
      :target="'_blank'"
      class="text-teal-500 hover:text-blue-lighten-700 underline transition duration-300 ease-in-out"
      :download="props.download"
    >
      <slot></slot>
    </a>
  </template>
  
  <script setup>
  const props = defineProps({
    url: {
      type: String,
      required: true,
    },
    download: {
      type: String,
      default: ''
    }

  })
    </script>
<style scoped>
a { color: #7FDBFF; }
</style>