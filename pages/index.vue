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
import Lecturers from '~/components/home/lecturers'
import Courses from '~/components/home/courses/index'
import SuggestForm from '~/components/home/suggestForm/index'
import FooterComponent from '~/components/home/footer/index'

export default {
  components: { Intro, Lecturers, Courses, SuggestForm, FooterComponent },
  asyncData({ $axios }) {
    /* $axios.$all is not working */
    //  return $axios
    //     .$all([$axios.$get('courses'), $axios.$get('lecturers')])
    //     .then((res) => {
    //       return { courses: res[0], lecturers: res[1] }
    //     })

    let courses

    return $axios.$get('courses').then((c) => {
      courses = c

      return $axios.$get('lecturers').then((lecturers) => {
        return { lecturers, courses }
      })
    })
  },
  head: () => ({
    title: 'Home',
  }),
  data: () => ({ courses: { length: false }, lecturers: { length: false } }),
}
</script>
