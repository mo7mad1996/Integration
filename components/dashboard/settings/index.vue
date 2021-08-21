<template>
  <v-form @submit.prevent="edit" ref="form">
    <v-text-field
      label="User Name"
      v-model="username"
      required
      :rules="required"
    ></v-text-field>
    <v-text-field
      type="password"
      label="Old Password"
      :rules="passRules"
      v-model="password"
      required
    ></v-text-field>
    <v-text-field
      :rules="required"
      type="password"
      label="New Password"
      required
      v-model="new_password"
    ></v-text-field>
    <v-text-field
      type="password"
      :rules="r_pass_rules"
      label="ReWrite New Password"
      v-model="r_new_password"
      required
    ></v-text-field>

    <v-btn
      type="submit"
      block
      outlined
      plain
      :loading="loading"
      :disabled="
        loading || !(username && password && new_password && r_new_password)
      "
    >
      edit
    </v-btn>

    <v-snackbar :color="msg.type" v-model="msg.active" timeout="3000">
      {{ msg.text }}

      <template v-slot:action="{ attrs }">
        <v-btn icon text v-bind="attrs" @click="msg.active = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-form>
</template>

<script>
// vuex
import { mapGetters, mapMutations } from 'vuex'
let user = { username: '', password: '', new_password: '' }

export default {
  name: 'Settings',
  computed: mapGetters('Login', ['user']),

  data: () => ({
    username: '',
    password: '',
    passRules: [
      (r) => user.password == r || 'wrong password',
      (v) => !!v || 'enter your password',
    ],
    required: [(v) => !!v || 'Item is required'],
    new_password: '',
    r_new_password: '',
    r_pass_rules: [
      (r) => user.new_password == r || 'not identical password',
      (v) => !!v || 'enter your password',
    ],
    loading: false,
    msg: {
      active: false,
      text: '',
      type: '',
    },
  }),
  mounted() {
    this.username = this.user.username
    user = this.user
  },
  watch: {
    new_password(v) {
      user.new_password = v
    },
  },
  methods: {
    ...mapMutations('Login', ['setUser']),
    edit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$axios
          .$patch('admins/' + this.user.id, {
            username: this.username,
            password: this.new_password,
          })
          .then((res) => {
            this.setUser(res)
            sessionStorage.setItem('user', JSON.stringify(res))
            this.$refs.form.reset()
            this.msg = {
              active: true,
              text: 'the edit done...',
              type: 'success',
            }
          })
          .catch(
            () =>
              (this.msg = {
                active: true,
                text: 'check your network',
                type: 'error',
              })
          )
          .finally(() => (this.loading = false))
      }
    },
  },
}
</script>
