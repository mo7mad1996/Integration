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

import XMLHttpRequest from 'xhr2'

export default {
  components: { Intro, Lecturers, Courses, SuggestForm, FooterComponent },
  mounted() {
    console.clear()
    let XHR = new XMLHttpRequest()
    XHR.open('GET', '/api', true)
    XHR.onreadystatechange = () => {
      if (XHR.readyState == 4 && XHR.statusText == 'OK') {
        let { lecturers, courses } = JSON.parse(XHR.response)
        this.lecturers = lecturers
        this.courses = courses
      }
    }
    XHR.send()
  },
  head: () => ({
    title: 'Home',
  }),
  data: () => ({ courses: { length: -1 }, lecturers: { length: -1 } }),
}
</script>
