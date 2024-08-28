<template>
    <v-card>
        <v-card-title>
            {{ project.title }}
        </v-card-title>
        <v-card-text>
            {{ project.description }}
        </v-card-text>
        <v-card-actions>
            <a :href="project.url" target="blank">
                <v-btn color="primary" text>
                    View
                </v-btn>
            </a>
            <a :href="project.github" target="blank">
                <v-btn color="primary" text>
                    GitHub
                </v-btn>
            </a>
        </v-card-actions>
    </v-card>
</template>
<script setup>
defineProps({
    project: {
        title: String,
        description: String,
        url: String,
        image: String,
        gitHub: String
    }
})

</script>