<template>
  <section id="lecturers">
    <v-container>
      <h2>lecturers</h2>
      <v-app class="lecturers">
        <v-row justify="center">
          <v-col
            cols="6"
            md="3"
            v-for="lecturer in lecturers"
            :key="lecturer.id"
          >
            <div class="card">
              <div class="img-container">
                <img :src="lecturer.img || '/lecturers/avatar.svg'" />
              </div>

              <div class="info">
                <div class="links">
                  <v-row>
                    <div v-for="(m, n) in lecturer.contact" :key="n">
                      <v-btn small icon link :href="m" target="_blank" v-if="m">
                        <v-icon link :to="m">mdi-{{ n }}</v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </div>

                <h3>{{ lecturer.name }}</h3>
                <small>{{ lecturer.job }}</small>
                <div class="contact"></div>
                <p>
                  {{
                    lecturer.describe.length > 73
                      ? lecturer.describe.slice(0, 70) + '...'
                      : lecturer.describe
                  }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-app>
    </v-container>
  </section>
</template>

<script>
// vuex
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Lecturers',
  beforeMount() {
    this.getLecturers()
  },
  computed: mapGetters('lecturers', ['lecturers']),
  methods: mapActions('lecturers', ['getLecturers']),
}
</script>

<style scoped lang="scss">
section {
  .lecturers {
    gap: 10px;
    margin: 10px 0;

    .card {
      box-shadow: 4px 2px 10px rgb(199, 193, 193);
      width: 240px;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      border-radius: 5px;
      overflow: hidden;
      margin: auto;

      .img-container {
        overflow: hidden;
        height: 200px;
        left: -80px;
        width: 380px;
        position: relative;
        background: #989898;

        &,
        &::after {
          border-radius: 0 0 100% 60%;
        }
        &::after {
          position: absolute;
          inset: 0;
          transform: rotate(-15px);
          content: '';
          box-shadow: inset -20px -2px 0 #ff4769;
          box-sizing: border-box;
        }

        img {
          width: 200px;
          height: 200px;
          margin: 0 100px;
          object-fit: cover;
        }

        &::before {
          content: '';
          width: 100px;
          height: 100%;
          position: absolute;
          top: 0;
          display: block;
          background-image: linear-gradient(
            to right,
            transparent,
            #fff4,
            transparent
          );
          transform: skewX(30deg);
          left: -200px;
        }
      }
      &:hover .img-container::before {
        transition: 1s;
        left: 120%;
      }

      .info {
        background: none !important;
        padding: 10px;

        .links {
          padding: 10px;
          i {
            font-size: 18px;
          }
        }

        small {
          font-size: 10px;
          color: #5e5e5e;
          line-height: 10px;
        }

        p {
          font-size: 14px;
          color: #444;
        }
      }
    }
  }
}
</style>
