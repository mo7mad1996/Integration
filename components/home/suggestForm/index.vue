<template>
  <section id="suggest">
    <v-container>
      <h1>Suggest an edit</h1>

      <v-form ref="form" @submit.prevent="submit">
        <v-text-field
          outlined
          label="Name"
          filled
          v-model="form.name"
        ></v-text-field>
        <v-text-field
          outlined
          label="Phone"
          filled
          v-model="form.phone"
        ></v-text-field>
        <v-textarea
          filled
          outlined
          label="Suggest an edit"
          v-model="form.text"
        ></v-textarea>
        <v-btn
          type="submit"
          block
          color="#07ccb0"
          outlined
          filled
          plain
          :loading="loading"
          :disabled="loading || !(form.name && form.phone && form.text)"
          class="py-6"
        >
          Send
        </v-btn>
      </v-form>

      <v-snackbar :color="msg.type" v-model="msg.active" timeout="15000">
        {{ msg.text }}

        <template v-slot:action="{ attrs }">
          <v-btn icon text v-bind="attrs" @click="msg.active = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'SuggestForm',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        text: '',
      },
      loading: false,
      msg: {
        active: false,
        text: '',
        type: '',
      },
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$axios
        .$post('ideas', this.form)
        .then(() => {
          this.msg = {
            active: true,
            text: 'Send! thanks for your Suggest',
            type: 'success',
          }
          this.$refs.form.reset()
        })
        .catch(() => {
          this.msg = {
            active: true,
            text: 'Error in network',
            type: 'error',
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
