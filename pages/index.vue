<template>
  <v-app>
    <Intro />
    <Courses :courses="courses" />
    <Lecturers :lecturers="lecturers" />
    <SuggestForm />
    <FooterComponent />
  </v-app>
</template>

<script>
// components
import Intro from '~/components/home/intro/index'
import Courses from '~/components/home/courses/index'
import Lecturers from '~/components/home/lecturers'
import SuggestForm from '~/components/home/suggestForm/index'
import FooterComponent from '~/components/home/footer/index'

// import XMLHttpRequest from 'xhr2'

export default {
  components: { Intro, Lecturers, Courses, SuggestForm, FooterComponent },
  async asyncData({ $axios }) {
    let courses = [],
      lecturers = []

    await $axios.get('/courses').then(({ data }) => {
      courses = data
    })

    await $axios.get('/lecturers').then(({ data }) => {
      lecturers = data
    })

    return {
      courses,
      lecturers,
    }
  },
  head: () => ({
    title: 'Home',
  }),
  data: () => ({ courses: { length: -1 }, lecturers: { length: -1 } }),
}
</script>
