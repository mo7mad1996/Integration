<template>
  <v-list>
    <v-list-item class="mt-5" v-for="(course, n) in courses" :key="course._id">
      <v-card width="100%">
        <v-row align="center">
          <v-col>
            <v-card-title>
              <v-list-item-title>{{ course.name }}</v-list-item-title>
            </v-card-title>
            <v-card-subtitle>
              <v-list-item-content>{{ course.lecturer }}</v-list-item-content>
            </v-card-subtitle>
            <v-card-text>
              {{ course.descriptaion }}
              <div class="pa-4">
                <del v-if="+course.descount > 0">{{ course.price }}</del>
                <v-chip>
                  {{ +course.price - +course.price * (+course.descount / 100) }}
                  EGP
                </v-chip>
              </div>
            </v-card-text>
            <v-divider class="mx-3" />
            <v-card-actions>
              <v-btn @click="remove(course._id, n)" text color="red lighten-2"
                >delete</v-btn
              >
            </v-card-actions>
          </v-col>
          <v-col cols="6" class="pa-5" md="3">
            <v-img :src="course.img"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script>
// vuex
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CoursesList',

  computed: mapGetters('courses', ['courses']),
  methods: {
    ...mapActions('courses', ['getCourses', 'deleteCourse']),
    remove(id, n) {
      this.deleteCourse({ id, n })
    },
  },
  mounted() {
    this.getCourses()
  },
}
</script>
