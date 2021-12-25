<template>
  <v-app v-if="ideas.length">
    <v-card class="my-6" v-for="(idea, n) in ideas" :key="n">
      <v-row>
        <v-col>
          <v-card-title>
            <span>{{ idea.name }}</span>
          </v-card-title>
          <v-card-subtitle>
            <span>{{ idea.phone }}</span>
          </v-card-subtitle>
          <v-card-text>
            {{ idea.text }}
          </v-card-text>
        </v-col>

        <v-col cols="1">
          <v-card-actions dir="rtl">
            <v-btn icon @click.stop="clear(idea._id, n)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-app>

  <div v-else class="noData">
    <h2>No ideas Suggest</h2>
  </div>
</template>

<script>
export default {
  name: 'IdeasList',
  data() {
    return {
      ideas: [],
    }
  },
  beforeMount() {
    this.$axios.$get('ideas').then((res) => (this.ideas = res))
  },
  methods: {
    clear(id, n) {
      this.$axios
        .$delete('ideas/' + id)
        .then(() => this.ideas.splice(n, 1))
        .catch((err) => console.log(err))
    },
  },
}
</script>
