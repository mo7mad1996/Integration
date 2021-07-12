<template>
  <div>
    <Intro />
    <h1 class="text-center">Home</h1>
    <nuxt-link to="/dashboard">Dashboard</nuxt-link>
    <Courses />
    <Lecturers />
  </div>
</template>

<script>
// components
import Intro from '~/components/home/intro/index'
import Lecturers from '~/components/home/lecturers'
import Courses from '~/components/home/courses/index'

export default {
  components: { Intro, Lecturers, Courses },
  head: () => ({
    title: 'Home',
  }),
}
</script>
