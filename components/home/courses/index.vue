<template>
  <section id="courses">
    <v-container>
      <h2>courses</h2>
      <div v-if="courses.length">
        <div class="course" v-for="(course, n) in courses" :key="n">
          <!-- course_id -->
          <div class="course_id">
            {{ (n + 1).toString().padStart(2, 0) }}
          </div>

          <!-- course_details -->
          <div class="course_details">
            <div class="basics">
              <h2>{{ course.name }}</h2>
              <h3>{{ course.lecturer }}</h3>
              <p>{{ course.descriptaion }}</p>
            </div>

            <div class="price">
              <v-chip-group>
                <v-chip
                  v-if="+course.descount > 0"
                  textColor="#f3cd00"
                  color="#ff4769"
                  class="del"
                >
                  <del> {{ +course.price }} EGP </del>
                </v-chip>
                <v-chip dark color="#07ccb0" textColor="#2c1e6d">
                  {{ +course.price - +course.price * (+course.descount / 100) }}
                  EGP
                </v-chip>
              </v-chip-group>

              <v-dialog max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">Get ticket</v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-form @submit.prevent="book(course.id, dialog)">
                      <v-toolbar color="primary" dark>
                        <div>
                          Get the ticket for
                          <q>
                            <b>{{ course.name }}</b>
                          </q>
                          course
                        </div>
                      </v-toolbar>
                      <v-card-text>
                        <v-text-field
                          v-for="(a, d) in info"
                          :key="d"
                          :label="d.toUpperCase()"
                          v-model="info[d]"
                        ></v-text-field>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn
                          type="submit"
                          :disabled="!(info.name || info.email || info.phone)"
                          :loading="loading"
                        >
                          send
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </template>
              </v-dialog>
            </div>
          </div>

          <!-- course_image -->
          <div class="course_image">
            <v-img :src="course.img || '/logo.png'" width="100px" />
          </div>
        </div>
      </div>

      <div v-else class="noData">
        <v-btn disabled text loading v-if="loading" class="loading"></v-btn>
        <h2 v-else>No Courses added</h2>
      </div>
    </v-container>
  </section>
</template>

<script>
// vuex
import { mapGetters, mapActions } from 'vuex'

export default {
  // asyncDate() {
  //   let courses = this.$axios.$get('courses')[0]

  //   return { courses }
  // },
  data: () => ({
    loading: true,
    info: {
      name: '',
      email: '',
      phone: '',
    },
  }),

  watch: {
    courses() {
      this.loading = false
    },
  },
  name: 'Courses',
  computed: mapGetters('courses', ['courses']),
  methods: {
    ...mapActions('courses', ['getCourses']),
    book(id, dialog) {
      this.loading = true
      this.$axios
        .$post('tickets', Object.assign({ id: null, course_id: id }, this.info))
        .then(() => (dialog.value = false))
        .finally(() => (this.loading = false))
    },
  },
  beforeMount() {
    this.getCourses()
  },

  head() {
    return {
      meta: [
        {
          content: 'the best courses for civil engineers',
          name: 'description',
        },
        {
          content: 'the best place to get your courses in Egypt',
          name: 'description',
        },
        {
          content: 'the best courses for engineers',
          name: 'description',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.course {
  display: flex;
  position: relative;
  padding: 10px;
  overflow: hidden;

  .course_id {
    width: 15vw;
    min-width: 20px;
    font-size: 2em;
    color: #ff4769;
  }

  .course_details {
    display: flex;
    flex: 1;
    justify-content: space-between;

    .basics {
      height: 100%;

      h2,
      h3,
      p {
        margin: 0;
      }

      h2 {
        font-size: 2em;
        display: inline-block;
        position: relative;
        overflow: hidden;
      }
      h3 {
        font-size: 1.3em;
      }

      p {
        font-size: 0.8em;
        opacity: 0.8;
        margin: 0;
      }
    }

    .price {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: bold;
      direction: rtl;

      .del {
        position: relative;

        &::after {
          position: absolute;
          content: '';
          border-radius: 5px;
          width: 80%;
          height: 4px;
          left: 10px;
          display: block;
          background: #2c1e6d;
          transform: rotate(-10deg);
        }
      }
    }
  }

  &:after,
  &::before {
    content: '';
    position: absolute;
    width: 15vw;
    height: 100%;
    display: block;
    background: #f3cd00;
    pointer-events: none;
    transform: skewX(-30deg);
    transform-origin: top;
    left: 0;
    top: -5px;
    z-index: -1;
    transition: 0.3s;
  }

  &::before {
    top: 0;
    background: #ff4769;
    left: 5px;
    transition: 0.3s;
    transition-delay: 0.3s;
  }

  &:hover {
    &::before,
    &::after {
      transform: skewX(-30deg) translatex(-20px);
    }
  }
}
</style>
