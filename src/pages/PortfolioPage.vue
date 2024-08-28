<template>
    <v-container>
      <v-row>
        <v-col cols="12">
            <h1>Portfolio</h1>
            <p>Here are some of the projects I have worked on.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-container v-if="!projectCardExpanded">
          <v-col v-for="project in projects" :key="project.id" md="6">
              <portfolio-card 
                @expand-project="handleExpandProject(project)" 
                :project="project"
                :showFullCard="false"
              />
          </v-col>
      </v-container>
      <v-container v-else>
          <v-col>
              <portfolio-card 
                @click="collapseProject" 
                :project="expandedProject"
                :showFullCard="true"
              />
          </v-col>
      </v-container>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import projects from '@/projects.json'
  import PortfolioCard from '@/components/PortfolioCard.vue'
  import { ref } from 'vue'

  const expandedProject = ref({})
  const projectCardExpanded = ref(false)

  const handleExpandProject = (project) => {
      projectCardExpanded.value = true
      expandedProject.value = project
  }

  const collapseProject = () => {
      projectCardExpanded.value = false
  }
  </script>
  