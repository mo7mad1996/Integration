<template>
  <v-list>
    <v-list-item class="my-4" v-for="(teacher, n) in lecturers" :key="n">
      <!-- <v-list-item class="my-4"> -->
      <v-card width="100%">
        <v-row align="center">
          <v-col>
            <v-card-title>{{ teacher.name }}</v-card-title>
            <v-card-subtitle>{{ teacher.job }}</v-card-subtitle>

            <v-card-text>
              {{ teacher.describe }}
            </v-card-text>

            <v-list>
              <v-list-item v-for="(a, b) in teacher.contact" :key="b">
                <v-list-item-icon>
                  <v-icon> mdi-{{ b }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ teacher.contact[b] }}
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <v-btn
                color="red lighten-2"
                text
                @click.stop="clear(teacher.id, n)"
                :loading="teacher.loading"
              >
                delete
              </v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="6" md="4">
            <v-img
              height="150"
              :src="teacher.img || '/lecturers/avatar.svg'"
            ></v-img>
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
  name: 'List',
  computed: {
    ...mapGetters('lecturers', ['lecturers']),
  },
  mounted() {
    this.getLecturers()
  },
  methods: {
    ...mapActions('lecturers', ['getLecturers', 'delete']),
    clear(id, n) {
      this.delete({ id, n })
    },
  },
}
</script>
