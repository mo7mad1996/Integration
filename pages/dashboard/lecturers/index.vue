<template>
  <v-app>
    <v-banner>المحاضرين</v-banner>
    <LecturersForm />
    <List />
  </v-app>
</template>

<script>
// components
import LecturersForm from '~/components/dashboard/lecturers/form'
import List from '~/components/dashboard/lecturers/list'

export default {
  layout: 'dashboard',
  head: () => ({ title: 'lecturers' }),
  components: {
    LecturersForm,
    List,
  },
}
</script>
