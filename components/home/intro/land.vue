<template>
  <v-container>
    <div class="land">
      <div class="left_Group">
        <h1>Integration</h1>
        <h2>for courses</h2>
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

  div {
    flex: 1;
  }
}
</style>
