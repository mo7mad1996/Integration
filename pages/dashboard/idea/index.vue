<template>
  <v-container>
    <v-banner dir="rtl">الافكار</v-banner>

    <IdeasList />
  </v-container>
</template>

<script>
// components
import IdeasList from '~/components/dashboard/ideas/list'

export default {
  // middleware: 'isLogin',
  layout: 'dashboard',
  head: () => ({ title: 'ideas' }),
  components: { IdeasList },
}
</script>
