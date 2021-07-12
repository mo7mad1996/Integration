<template>
  <v-app>
    <v-banner dir="rtl">الحجز</v-banner>
    <Tickets />
  </v-app>
</template>

<script>
// components
import Tickets from '~/components/dashboard/tickets/index'

export default {
  layout: 'dashboard',
  head: () => ({
    title: 'tickets',
  }),
  components: { Tickets },
}
</script>
