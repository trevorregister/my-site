<template>
    <v-container>
      <v-row>
        <v-col cols="12">
            <h1>Portfolio</h1>
            <p>Here are some of the projects I have worked on.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="project in projects" :key="project.id" md="6">
            <portfolio-card :project="project"/>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import projects from '@/projects.json'
  import PortfolioCard from '@/components/PortfolioCard.vue'
  </script>
  