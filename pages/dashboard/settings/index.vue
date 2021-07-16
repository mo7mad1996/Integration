<template>
  <v-app>
    <v-banner>Settings</v-banner>
    <Settings />
  </v-app>
</template>

<script>
// components
import Settings from '~/components/dashboard/settings/index'

export default {
  layout: 'dashboard',
  components: { Settings },
  head: () => ({ title: 'settings' }),
}
</script>
