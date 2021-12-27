<template>
  <div>
    <v-list v-if="tickets.length && courses.length">
      <v-list-item class="my-3 ticket" v-for="(ticket, n) in tickets" :key="n">
        <v-card width="100%">
          <v-row>
            <v-col>
              <v-card-title>person details</v-card-title>
              <v-card-text>
                <v-list-item-title>name: {{ ticket.name }}</v-list-item-title>
                <v-list-item-title
                  >phone: {{ ticket.phone }}
                </v-list-item-title>
                <v-list-item-title
                  >Email: {{ ticket.email }}
                </v-list-item-title>
              </v-card-text>
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  <v-card-title>course details</v-card-title>
                  <v-card-text v-if="courses.length">
                    <v-list-item-subtitle>
                      Course Name:
                      {{
                        courses.filter((el) => el._id == ticket.course_id)[0]
                          .name
                      }}
                    </v-list-item-subtitle>
                    <v-list-item-title>
                      Lecturer:
                      {{
                        courses.filter((el) => el._id == ticket.course_id)[0]
                          .lecturer
                      }}
                    </v-list-item-title>
                    <v-list-item-title>
                      Total Price:
                      {{
                        +courses.filter((el) => el._id == ticket.course_id)[0]
                          .price -
                        +courses.filter((el) => el._id == ticket.course_id)[0]
                          .price *
                          (+courses.filter(
                            (el) => el._id == ticket.course_id
                          )[0].descount /
                            100)
                      }}
                    </v-list-item-title>
                  </v-card-text>
                </v-col>
                <v-col>
                  <v-img :src="img_src(ticket.course_id)"></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <div class="clear">
            <v-btn
              icon
              @click="clear(ticket._id, n)"
              :loading="ticket.loading"
              :disabled="ticket.loading"
            >
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-list-item>
    </v-list>

    <div class="noData" v-else><h2>No Tickets...</h2></div>
  </div>
</template>

<script>
// vuex
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Tickets',
  computed: mapGetters('courses', ['courses']),
  data: () => ({ tickets: [] }),
  beforeMount() {
    this.$axios.$get('tickets').then((res) => {
      res.forEach((ticket, n) => {
        console.log('http://localhost:3000/api/courses/' + ticket.course_id)
        this.$axios.$get('courses/' + ticket.course_id).then((course) => {
          if (!course) {
            this.$axios.$delete('tickets/' + ticket._id)
            res.splice(n, 1)
          }

          this.tickets = res.map(
            (el) => (el = Object.assign(el, { loading: false }))
          )
        })
      })
    })
    if (!this.courses.length) {
      this.getCourses()
    }
  },
  methods: {
    ...mapActions('courses', ['getCourses']),

    clear(id, n) {
      this.tickets[n].loading = true

      this.$axios
        .$delete('tickets/' + id)
        .then(() => this.tickets.splice(n, 1))
        .finally(() => (this.tickets[n].loading = false))
    },

    img_src(id) {
      var src = this.courses.filter((el) => el._id == id)[0]
      return src
    },
  },
}
</script>

<style scoped lang="scss">
.ticket {
  position: relative;

  .clear {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
