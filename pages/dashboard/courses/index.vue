<template>
  <v-app>
    <v-banner dir="rtl">الكورسات</v-banner>

    <CoursesForm />
    <CoursesList />
  </v-app>
</template>

<script>
// compontnts
import CoursesForm from '~/components/dashboard/courses/form'
import CoursesList from '~/components/dashboard/courses/list'

export default {
  layout: 'dashboard',

  head: () => ({ title: 'courses' }),
  components: { CoursesForm, CoursesList },
}
</script>
