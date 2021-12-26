<template>
  <v-container>
    <div class="land">
      <div class="left_Group">
        <h1>Integration</h1>
        <h2>for courses</h2>
        <p>
          <b>Integration</b> is the best way to get you courses with the best
          lecturers in 6 <sup>th</sup> Of October City.
        </p>
      </div>
      <div class="right_photo">
        <client-only>
          <!-- <MyCanvas /> -->
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;

  .left_Group {
    max-width: 50%;

    h1 {
      font-size: 10vw;
      line-height: 0.4em;
    }
    h2 {
      font-weight: normal;
      font-size: 7vw;
    }
    p {
      font-size: max(2vw, 14px);
    }
  }
  .right_photo {
    flex: 1;
    height: 100vh;
  }

  @media (max-width: 820px) {
    display: block;

    .left_Group {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      max-width: 100%;
    }
  }
}
</style>
