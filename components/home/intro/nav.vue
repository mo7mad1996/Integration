<template>
  <header class="header" :class="{ hid }">
    <v-container>
      <div class="v-row">
        <nuxt-link to="/" class="Integration-logo">
          <img
            src="/Integration-logo.png"
            height="50px"
            alt="Integration for Courses logo"
          />

          <div>
            <span>Integration</span>
            <span>for Courses</span>
          </div>
        </nuxt-link>
        <v-spacer />

        <nav :class="{ mobile }">
          <v-btn icon @click="mobile = !mobile" class="navBtn">open</v-btn>
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="#courses">Courses</nuxt-link>
          <nuxt-link to="#lecturers">Lecturers</nuxt-link>
          <nuxt-link to="#suggest">Suggest an edit</nuxt-link>
        </nav>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['top'],
  data: () => ({ hid: true, mobile: true }),
  mounted() {
    onscroll = () => (scrollY > 20 ? (this.hid = false) : (this.hid = true))
  },
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

header.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background: white;
  transition: 0.4s;

  @media (max-width: 570px) {
    align-items: flex-start;
  }

  .Integration-logo {
    padding: 0 10px;
    display: flex;
    align-items: flex-end;

    > div {
      padding: 0 10px;

      span {
        font-weight: bold;
        display: block;
        text-transform: uppercase;

        &:first-of-type {
          color: #2c1e6d;
          font-size: 10px;
        }
        &:last-of-type {
          font-size: 6px;
          color: #ff4769;
        }
      }
    }
  }

  .v-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 570px) {
      align-items: flex-start;
    }

    .navBtn {
      display: none;

      @media (max-width: 570px) {
        display: block;
      }
    }

    nav {
      display: flex;
      gap: 2vw;
      direction: rtl;

      @media (max-width: 570px) {
        flex-direction: column;
        position: relative;
      }

      a {
        color: #07ccb0;

        &.nuxt-link-exact-active {
          color: #2c1e6d;
          font-weight: bold;
        }
      }

      &.mobile a {
        @media (max-width: 570px) {
          display: none;
        }
      }
    }
  }

  &.hid {
    background: transparent;
  }
}
</style>
