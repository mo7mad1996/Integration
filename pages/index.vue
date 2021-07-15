<template>
  <div>
    <Intro />
    <h1 class="text-center">Home</h1>
    <nuxt-link to="/dashboard">Dashboard</nuxt-link>
    <Courses />
    <Lecturers />
    <FooterComponent />
  </div>
</template>

<script>
// components
import Intro from '~/components/home/intro/index'
import Lecturers from '~/components/home/lecturers'
import Courses from '~/components/home/courses/index'
import FooterComponent from '~/components/home/footer/index'

export default {
  components: { Intro, Lecturers, Courses, FooterComponent },
  head: () => ({
    title: 'Home',
  }),
}
</script>
