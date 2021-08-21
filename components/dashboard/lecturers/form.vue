<template>
  <v-form @submit.prevent="submit" ref="form">
    <v-container>
      <v-row align="center">
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
            ref="file"
            class="d-none"
            @change="upload"
          />
        </div>

        <v-spacer></v-spacer>
        <v-btn type="submit" class="ma-4" :loading="loading">
          Add
          <v-icon right dark> mdi-plus </v-icon>
        </v-btn>
      </v-row>

      <v-row>
        <v-col cols="4">
          <v-text-field
            label="name"
            required
            v-model="person.name"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="job" v-model="person.job"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            label="Describe"
            v-model="person.describe"
          ></v-text-field>
        </v-col>
        <v-col cols="3" v-for="(c, n) of person.contact" :key="n">
          <v-text-field
            :label="n == 'earth' ? 'Site' : n"
            :append-icon="'mdi-' + n"
            v-model="person.contact[n]"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// vuex
import { mapActions } from 'vuex'

let person = {
  name: '',
  job: '',
  describe: '',
  img: null,
  file: {},
  contact: {
    facebook: '',
    twitter: '',
    linkedin: '',
    earth: '',
  },
}

export default {
  name: 'LecturersForm',
  data() {
    return {
      person: Object.assign({}, person),
      imageUrl: '',
      loading: false,
    }
  },
  methods: {
    ...mapActions('lecturers', ['getLecturers']),
    addImg(e) {
      let files = this.$refs.file.files,
        blob = new Blob(files, files[0]),
        url = window.URL.createObjectURL(blob)
      this.person.img = url
      this.person.file = files[0]
    },
    submit() {
      this.addImg()
      this.loading = true
      this.$axios
        .$post('lecturers', this.person)
        .then(() => {
          this.getLecturers()
        })
        .finally(() => {
          this.loading = false
          this.$refs.form.reset()
        })
    },
    upload(e) {
      let files = e.target.files,
        file = files[0].name,
        fileReader = new FileReader()

      fileReader.readAsDataURL(files[0])

      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      this.person.img = files[0]
    },
    close() {
      this.imageUrl = null
      this.person.img = null || '/lecturers/avatar.svg'
    },
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
