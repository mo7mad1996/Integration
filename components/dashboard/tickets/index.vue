<template>
  <v-list>
    <v-list-item class="my-3" v-for="ticket in tickets" :key="ticket.id">
      <v-card width="100%">
        <v-row>
          <v-col>
            <v-card-title>
              <v-list-item-title>name: {{ ticket.name }}</v-list-item-title>
              <v-list-item-title> phone: {{ ticket.phone }} </v-list-item-title>
              <v-list-item-title> Email: {{ ticket.email }} </v-list-item-title>
            </v-card-title>
          </v-col>
          <v-col>
            <v-row>
              <v-col></v-col>
              <v-col><v-img></v-img></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script>
// vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Tickets',
  computed: mapGetters('courses', ['courses']),
  data: () => ({ tickets: [] }),
  beforeMount() {
    this.$axios.$get('tickets').then((res) => (this.tickets = res))
    this.getCourses()
  },
  methods: mapActions('courses', ['getCourses']),
}
</script>
