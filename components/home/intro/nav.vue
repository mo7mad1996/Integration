<template>
  <header class="header">
    <v-container>
      <div class="v-row">
        <nuxt-link to="/" class="logo">
          <img src="/logo.png" height="50px" alt="Integration for Courses" />

          <div>
            <span>Integration</span>
            <span>for Courses</span>
          </div>
        </nuxt-link>

        <nav>
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

  .logo {
    padding: 0 10px;
    display: flex;
    align-items: center;
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

    nav {
      display: flex;
      gap: 2vw;

      @media (max-width: 569px) {
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
    }
  }
}
</style>
