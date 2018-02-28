<template>
  <v-dialog v-model="visible" max-width="290">
    <v-card style="text-align: center;">
      <v-card-title class="headline" v-if="state === 'success'">Ваш запрос успешно отправлен.</v-card-title>
      <v-card-title class="headline" v-if="state === 'error'">Что-то пошло не так, пропробуйте отправить форму ещё раз.</v-card-title>
      <v-card-actions>
        <v-btn
          v-if="state === 'success'"
          color="success"
          style="margin: 0 auto;"
          @click.native="visible = false"
        ><v-icon>done</v-icon></v-btn>
        <v-btn
          v-if="state === 'error'"
          color="error"
          style="margin: 0 auto;"
          @click.native="visible = false"
        ><v-icon>close</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        state: 'unknown'
      }
    },
    methods: {
      show(state) {
        this.state = state
        this.visible = true
      }
    }
  }
</script>

<style>

</style>
