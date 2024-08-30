<template>
    <v-card rounded="lg">
        <v-card-title>
            {{ project.title }}
        </v-card-title>
        <v-card-subtitle>
            <v-chip v-for="technology in project.technologies" :key="technology"
                variant="outlined"
                size="small"
                class="mr-2"
            >
                {{ technology }}
            </v-chip>
        </v-card-subtitle>
        <v-card-text>
            {{ project.shortDescription }}
        </v-card-text>
        <v-card-text v-if="showFullCard">
            <h2 v-if="project.goals.length > 0">Goals</h2>
             <v-list density="compact">
                <v-list-item v-for="goal in project.goals" :key="goal"
                    prepend-icon="mdi-circle-small"
                    :title="goal" 
                />
             </v-list>
            <h2>Tell me more</h2>
            <div class="text-body-1">{{ project.longDescription }}</div>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="expandProject(project)">
                {{showFullCard ? "Less" : "More"}}
            </v-btn>
            <a v-if="project.url" :href="project.url" target="blank">
                <v-btn color="primary" text>
                    View
                </v-btn>
            </a>
            <a v-if="project.github" :href="project.github" target="blank">
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
        shortDescription: String,
        url: String,
        image: String,
        gitHub: String,
        longDescription: String,
    },
    showFullCard: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['expandProject'])

const expandProject = (project) => {
    emit('expandProject', project)
}

</script>