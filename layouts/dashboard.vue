<template>
  <v-app dark v-if="user">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-tooltip right :key="i" v-for="(item, i) in items">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item :to="item.to" v-bind="attrs" v-on="on" router exact>
              <!-- list -->
              <v-list-item-icon>
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </template>
          <span v-text="item.title" />
        </v-tooltip>
      </v-list>

      <!-- Logout -->
      <template v-slot:append>
        <v-list-item router to="/login">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <!-- end list -->
    </v-navigation-drawer>

    <!-- header bar -->
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="toggleMenu" />
      <v-toolbar-title>Integration / {{ user.username }}</v-toolbar-title>
    </v-app-bar>

    <!-- content -->
    <v-main>
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// vuex
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      miniVariant: false,
      drawer: null,
      items: [
        { icon: 'sitemap', title: 'My Site', to: '/' },
        { icon: 'book', title: 'Courses', to: '/dashboard/courses' },
        { icon: 'head-lightbulb', title: 'ideas', to: '/dashboard/idea' },
        { icon: 'ticket', title: 'Tickets', to: '/dashboard/tickets' },
        { icon: 'account-tie', title: 'Lecturers', to: '/dashboard/lecturers' },
        { icon: 'account-cog', title: 'Settings', to: '/dashboard/settings' },
      ],
    }
  },
  methods: {
    ...mapMutations('Login', ['setUser']),
    ...mapActions('Login', ['check']),

    toggleMenu() {
      if (this.drawer) {
        this.miniVariant = !this.miniVariant
      } else {
        this.miniVariant = false
        this.drawer = !this.drawer
      }
    },
  },
  computed: mapGetters('Login', ['user']),
  beforeMount() {
    this.check() // if user in sessrion

    if (!this.user) {
      this.$router.push('/login')
    }
  },
}
</script>
