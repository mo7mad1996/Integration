<template>
  <v-container>
    <v-banner dir="rtl">الافكار</v-banner>
    <v-card class="my-6" v-for="(idea, n) in ideas" :key="n">
      <v-row>
        <v-col>
          <v-card-title>
            <span>{{ idea.name }}</span>
          </v-card-title>
          <v-card-subtitle>
            <span>{{ idea.email }}</span>
          </v-card-subtitle>
          <v-card-text>
            {{ idea.text }}
          </v-card-text>
        </v-col>

        <v-col cols="1">
          <v-card-actions dir="rtl">
            <v-btn icon @click.stop="clear(idea.id, n)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  // middleware: 'isLogin',
  layout: 'dashboard',
  head: () => ({ title: 'ideas' }),
  data() {
    return {
      ideas: [],
    }
  },
  mounted() {
    this.$axios.$get('ideas').then((res) => (this.ideas = res))
  },
  methods: {
    clear(id) {
      this.$axios
        .$delete('ideas/' + id)
        .then(() => this.ideas.splice(id - 1, 1))
        .catch((err) => console.log(err))
    },
  },
}
</script>
