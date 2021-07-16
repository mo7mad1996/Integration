<template>
  <v-app>
    <Intro />
    <Courses />
    <Lecturers />
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
  head: () => ({
    title: 'Home',
  }),
}
</script>
