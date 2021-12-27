<template>
  <section id="lecturers">
    <v-container>
      <h1>lecturers</h1>
      <v-row class="lecturers" v-if="lecturers.length">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="lecturer in lecturers"
          :key="lecturer.id"
        >
          <div class="card">
            <div class="img-container">
              <img
                :src="lecturer.img || '/lecturers/avatar.svg'"
                :alt="lecturer.name"
              />
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
                {{ lecturer.describe }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div v-else class="noData">
        <v-btn
          disabled
          text
          loading
          v-if="+lecturers.length < 0"
          class="loading"
        ></v-btn>
        <h2 v-else>No Lecturers added</h2>
      </div>
    </v-container>
  </section>
</template>

<script>
// vuex

export default {
  name: 'Lecturers',
  props: ['lecturers'],
  data: () => {
    return {
      lecturers: [],
    }
  },
  mounted() {
    this.$axios
      .$get('lecturers')
      .then((lecturers) => {
        this.lecturers = lecturers
      })
      .catch((err) => {
        if (err) {
          throw err
        }
      })
  },
}
</script>

<style scoped lang="scss">
section {
  .lecturers {
    gap: 10px;
    margin: 10px 0;
    justify-content: center;

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
      transition: 0.3s;
      background: white;

      &:hover {
        box-shadow: 0px 0px 0px rgb(199, 193, 193);
        transform: translate(4px, 2px);
        border: 2px solid #eee;
      }

      .img-container {
        overflow: hidden;
        height: 200px;
        width: 170%;
        transform: translateX(-85px);
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
          display: block;
          width: 240px;
          margin: auto;
          height: 100%;
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
          margin: 0;
        }
      }
    }
  }
}
</style>
