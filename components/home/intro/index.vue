<template>
  <div class="intro">
    <NavBar :top="top" />
    <!-- inrto -->

    <Land />
  </div>
</template>

<script>
// components
import NavBar from '~/components/home/intro/nav'
import Land from '~/components/home/intro/land'

let top = 0

export default {
  name: 'Intro',
  components: { NavBar, Land },
  data() {
    return { top }
  },
}
</script>

<style scoped>
.intro {
  height: 100vh;
  background-image: linear-gradient(31deg, #07ccb0, white);
}
</style>
