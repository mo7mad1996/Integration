<template>
  <div class="intro">
    <client-only>
      <NavBar :top="top" />
    </client-only>

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
  background-image: url('https://wallpaperaccess.com/full/1220750.jpg');
  background-color: #07ccb0;
  background-blend-mode: multiply;
}
</style>
