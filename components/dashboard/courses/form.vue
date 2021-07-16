<template>
  <v-form @submit.prevent="addCourse" ref="form">
    <v-row class="pa-5" align="center">
      <div class="img-container">
        <div class="img" v-if="imageUrl">
          <v-btn class="close" icon small color="red" @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <img :src="imageUrl" />
        </div>
        <label for="input" v-else>
          <v-icon>mdi-camera</v-icon>
        </label>
        <input
          type="file"
          accept="image/*"
          id="input"
          class="d-none"
          @change="upload"
        />
      </div>

      <v-spacer />
      <v-btn type="submit" :loading="loading">add</v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Course Name" v-model="course.name"></v-text-field>
      </v-col>
      <v-col>
        <v-overflow-btn
          :items="lecturers.map((el) => el.name)"
          label="Lecturer"
          v-model="course.lecturer"
        ></v-overflow-btn>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col>
        <v-text-field
          label="Price"
          v-model="course.price"
          append-icon="mdi-cash"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="descount"
          v-model="course.descount"
          append-icon="mdi-percent-outline"
        ></v-text-field>
      </v-col>
      <v-col>
        {{ +course.price - +course.price * (+course.descount / 100) }}
        L.E
      </v-col>
    </v-row>
    <v-textarea
      label="descriptaion"
      v-model="course.descriptaion"
      outlined
    ></v-textarea>
  </v-form>
</template>

<script>
// vuex
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'CoursesForm',
  data: () => ({
    course: {
      img: null,
      name: '',
      lecturer: '',
      price: '',
      descount: '',
      descriptaion: '',
    },
    loading: false,
    imageUrl: null,
  }),
  computed: mapGetters('lecturers', ['lecturers']),
  methods: {
    ...mapActions('lecturers', ['getLecturers']),
    ...mapMutations('courses', ['appendCourse']),
    upload(e) {
      let files = e.target.files,
        file = files[0].name,
        fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.course.img = files[0]
    },
    close() {
      this.imageUrl = null
      this.course.img = null
    },

    addCourse() {
      this.loading = true
      this.$axios
        .$post('courses', this.course)
        .then((res) => {
          this.appendCourse(res)
          this.$refs.form.reset()
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  beforeMount() {
    this.getLecturers()
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  width: 100px;
  height: 100px;
  border: 2px solid #eee;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 5px;

    .close {
      position: absolute;
    }
  }

  label,
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  label {
    cursor: pointer;

    display: grid;
    place-items: center;
  }
}
</style>
