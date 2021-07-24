<template>
  <v-container>
    <div class="land">
      <div class="left_Group">
        <h1>Integration</h1>
        <h2>for courses</h2>
        <p>
          <b>Integration</b> is the best way to get you courses with the best
          lecturers in 6 <sup>th</sup> Of October City
        </p>
      </div>
      <div class="right_photo">
        <client-only>
          <MyCanvas />
        </client-only>
      </div>
    </div>
  </v-container>
</template>

<script>
import MyCanvas from '~/components/home/intro/myCanvas'

export default {
  name: 'Land',
  components: { MyCanvas },
}
</script>

<style scoped lang="scss">
.land {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;

  .left_Group {
    max-width: 50%;
  }

  .right_photo {
    flex: 1;
  }
}
</style>
