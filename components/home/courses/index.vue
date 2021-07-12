<template>
  <section id="courses">
    <v-container>
      <h2>courses</h2>
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
                <v-btn v-bind="attrs" v-on="on"> Get ticket </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-form @submit.prevent="book(course.id, dialog)">
                    <v-toolbar color="primary" dark>
                      <div>
                        Get the ticket for
                        <q
                          ><b>{{ course.name }}</b></q
                        >
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
                        text
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
    loading: false,
    info: {
      name: '',
      email: '',
      phone: '',
    },
  }),
  name: 'Courses',
  computed: mapGetters('courses', ['courses']),
  methods: {
    ...mapActions('courses', ['getCourses']),
    book(id, dialog) {
      this.loading = true
      this.$axios
        .$post(
          'tickets',
          Object.assign({ id: nullx, course_id: id }, this.info)
        )
        .then(() => (dialog.value = false))
        .finally(() => (this.loading = false))
    },
  },
  beforeMount() {
    this.getCourses()
  },
}
</script>

<style scoped lang="scss">
.course {
  display: flex;
  margin-bottom: 20px;

  .course_id {
    width: 15vw;
    min-width: 20px;
  }

  .course_details {
    display: flex;
    flex: 1;
    gap: 10px;
    align-items: flex-end;

    .basics {
      height: 100%;

      h2,
      h3,
      p {
        margin: 0;
      }

      h2 {
        font-size: 1.2em;
      }
      h3 {
        font-size: 0.9em;
      }

      p {
        font-size: 0.8em;
        opacity: 0.8;
      }
    }

    .price {
      font-weight: bold;

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
}
</style>
