<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>About Me</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <h2>My Story</h2>
          </v-card-title>
          <v-card-text>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed euismod, tortor nec tincidunt ultrices, mauris mauris ultrices nunc, nec tincidunt justo nunc id nunc. 
                Nulla facilisi. Sed ut mauris auctor, lacinia nunc sed, aliquet nisl. Sed id nunc id nunc tincidunt tincidunt. 
                Nulla facilisi. Sed ut mauris auctor, lacinia nunc sed, aliquet nisl.
              </p>
              <br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed euismod, tortor nec tincidunt ultrices, mauris mauris ultrices nunc, nec tincidunt justo nunc id nunc. 
                Nulla facilisi. Sed ut mauris auctor, lacinia nunc sed, aliquet nisl. Sed id nunc id nunc tincidunt tincidunt. 
                Nulla facilisi. Sed ut mauris auctor, lacinia nunc sed, aliquet nisl.
              </p>
          </v-card-text>
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
  </v-container>
</template>

<script setup>
</script>
