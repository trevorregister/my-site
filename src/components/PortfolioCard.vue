<template>
    <v-card @click="expandProject(project)">
        <v-card-title>
            {{ project.title }}
        </v-card-title>
        <v-card-text>
            {{ project.description }}
        </v-card-text>
        <v-card-text v-if="showFullCard">
            <h2>Rationale</h2>
            <p>{{ project.rationale }}</p>
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
        gitHub: String,
        rationale: String,
    },
    showFullCard: Boolean
})

const emit = defineEmits(['expandProject'])

const expandProject = (project) => {
    emit('expandProject', project)
}

</script>