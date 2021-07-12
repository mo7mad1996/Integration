<template>
  <v-app app>
    <v-row justify="center" align="center">
      <v-col md="4">
        <LoginForm />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// components
import LoginForm from '~/components/login/form/index'

export default {
  name: 'Login',
  components: { LoginForm },
}
</script>
