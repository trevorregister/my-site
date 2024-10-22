<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <h2>My Story</h2>
          </v-card-title>
          <v-card-text>
            <p>
              I have a B.S. in Physics from the Georgia Institute of Technology and a MA in Teaching Physics from Kennesaw State University as part of the <hyper-link :url="links.noyce">Robert Noyce Scholarship Program.</hyper-link> 
              I taught high school physics, including AP, for 7 years. I regularly attended American Association of Physics Teachers conferences as well as the Physics Education Research Conferences (PERC). 
              I presented on a diagram I created on <hyper-link :url="links.kvl">aiding conceptual understanding of Kirchoff’s Voltage Law</hyper-link> at PERC 2015. 
              I was also published in the October 2017 issue of The Physics Teacher on <hyper-link :url="links.article">replacing traditional textbook problems with lab experiences</hyper-link>. 
              I was a Reader for AP Physics 1 in 2018 and 2019. 
              I’m also a lifetime member of the <hyper-link :url="links.amta">American Modeling Teachers Association</hyper-link>, who’s <hyper-link :url="links.modeling">Modeling Instruction</hyper-link> principles form the backbone of my science education philosophy.
            </p>
            <br>
            <p>
              I am currently employed at <hyper-link :url="links.pivot">Pivot Interactives</hyper-link> as the Senior Support Operations Manager. This role has afforded me the opportunity to hone my skills in web development and technical support. 
              My pedagogical expertise combined with my technical skills make me a valuable asset to any EdTech team. This website is a testament to the web development skills I've developed.
              Check out my resume <hyper-link :url="pdfLink" :download="'TrevorRegisterResume.pdf'">here</hyper-link>.
            </p>
          </v-card-text>
          <v-card-actions>
            <hyper-link :url="links.linkedIn" target="_blank"><v-icon size="50">mdi-linkedin</v-icon></hyper-link>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-img 
          src="@/assets/me.jpg" 
          height="300px" 
          width="300px"
          rounded="circle"
          />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <h2>Continuing my carreer in EdTech</h2>
          </v-card-title>
          <v-card-text>
            <p>
                My experience as a teacher and web development skills make me a unique asset to any EdTech team:
              <v-list>
                <v-list-item prepend-icon="mdi-circle-small">Full-stack Web Development</v-list-item>
                <v-list-item prepend-icon="mdi-circle-small">QA Engineering</v-list-item>
                <v-list-item prepend-icon="mdi-circle-small">Support Engineering</v-list-item>
                <v-list-item prepend-icon="mdi-circle-small">Curriculum Development</v-list-item>
                <v-list-item prepend-icon="mdi-circle-small">Instructional Design</v-list-item>
                <v-list-item prepend-icon="mdi-circle-small">Product Development</v-list-item>
              </v-list>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import HyperLink from '@/components/HyperLink.vue'
import { links } from '@/utils/links'
const pdfLink = ref(new URL('@/assets/resume.pdf', import.meta.url).href)

</script>
