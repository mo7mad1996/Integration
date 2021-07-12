<template>
  <v-card>
    <v-card-title>Integration</v-card-title>
    <v-card-subtitle>Login</v-card-subtitle>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
      <v-card-text>
        <v-text-field
          v-model="form.username"
          :rules="usernameRules"
          label="User Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.password"
          :rules="passRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn block :disabled="!valid" type="submit" :loading="loading">
          Login
        </v-btn>
      </v-card-actions>

      <v-alert
        :value="error.active"
        type="error"
        dark
        transition="scale-transition"
      >
        {{ error.text }}
      </v-alert>
    </v-form>
  </v-card>
</template>

<script>
// vuex
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'LoginForm',

  data: () => ({
    valid: true,
    usernameRules: [(v) => !!v || 'User Name is required'],
    passRules: [(v) => !!v || 'password is required'],
    loading: false,
    error: { active: false, text: '' },
    form: { username: '', password: '' },
  }),

  methods: {
    ...mapMutations('Login', ['setUser']),
    login() {
      // valdate the form inputs
      this.validate()

      if (this.valid) {
        // start code
        this.loading = true

        this.$axios
          .$get('users?username=' + this.form.username)
          .then((res) => {
            if (res.length) {
              // get the frist user
              if (res[0].password == this.form.password) {
                this.setUser(res[0])
                sessionStorage.setItem('user', JSON.stringify(res[0]))
                this.$router.push('/dashboard')
              } else {
                this.error = {
                  active: true,
                  text: 'the password is Error',
                }
              }
            } else {
              this.error = {
                active: true,
                text: 'No User Name Like ' + this.form.username,
              }
            }
          })
          .catch(
            (err) =>
              (this.error = {
                active: true,
                text: 'Error in connection',
              })
          )
          .finally(() => {
            this.loading = false
            setTimeout(() => {
              this.error.active = false
            }, 3000)
          })
      }
    },
    // valid the form
    validate() {
      this.$refs.form.validate()
    },
  },

  computed: mapGetters('Login', ['user']),

  watch: {
    // when login done
    user() {
      if (this.user.username) {
        this.$router.push('/dashboard')
      }
    },
  },

  beforeMount() {
    // logout
    this.setUser({})
    sessionStorage.removeItem('user')
  },
}
</script>
