<template>
  <Dashboard />
</template>

<script>
// compontns
import Dashboard from '~/components/dashboard/index'

export default {
  layout: 'dashboard',
  head: () => ({
    title: 'DashBoard',
  }),
  components: { Dashboard },
}
</script>
