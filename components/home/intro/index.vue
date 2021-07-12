<template>
  <div class="intro">
    <NavBar :top="top" />
    <!-- inrto -->
    <div class="land">
      <v-container>
        <div class="left_Group">
          <h1>Integration</h1>
          <h2>for courses</h2>
        </div>
        <div class="right_photo">
          <v-img />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
// components
import NavBar from '~/components/home/intro/nav'

let top = 0

export default {
  name: 'Intro',
  components: { NavBar },
  data() {
    return { top }
  },
  created() {
    // top = scrollY / scrollMaxY
  },
}
</script>

<style scoped lang="scss">
.intro {
  height: 100vh;
  background-image: linear-gradient(31deg, #07ccb0, white);

  .land {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    .left_group {
      flex: 1;
      z-index: 2;
    }
    .right_photo {
      z-index: 1;
      position: absolute;
      inset: 0;
    }
  }
}
</style>
