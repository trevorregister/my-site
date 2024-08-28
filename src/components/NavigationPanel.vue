<template>
    <v-navigation-drawer>
        <v-list-item 
            height="100px"
            title="Trevor Register" 
            subtitle="EdTech Wizard"
            prepend-avatar="@/assets/me.jpg">
        </v-list-item>
        <v-divider/>
        <v-list-item 
            prepend-icon="mdi-account-box" 
            to="/"
            title="About Me"/>
        <v-list-item 
            prepend-icon="mdi-folder" 
            to="/portfolio"
            title="Portfolio"/>
        <v-list-item 
            prepend-icon="mdi-email" 
            to="/contact" 
            title="Contact"/>
        <v-list-item 
            prepend-icon="mdi-file-document" 
            to="/resume"
            title="Resume"/>
    </v-navigation-drawer>
</template>

<script setup>

</script>

<style >
</style>