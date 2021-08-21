<template></template>
<script>
export default {
  mounted() {
    this.$axios.$post(
      'https://users-c25e.restdb.io/rest/',
      {
        username: 'admin',
        password: 'admin',
      },
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    )
  },
}
</script>
