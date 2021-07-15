<template>
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
</template>

<script>
export default {
  name: 'Land',
}
</script>

<style scoped lang="scss">
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
</style>
