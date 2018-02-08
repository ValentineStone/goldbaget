<template>
  <v-dialog
    :value="visible"
    @input="v => $emit('update:visible', v)"
    max-width="480px"
    :fullscreen="$vuetify.breakpoint.xs"
    :transition="$vuetify.breakpoint.xs ? 'dialog-bottom-transition' : undefined"
    @keydown.esc="$emit('update:visible', false)"
  >
    <v-card style="min-height: 100%;">
      <v-card-text>
        <slot />
        <v-btn
          color="primary"
          class="elevation-2"
          @click="$emit('update:visible', false)"
          style="margin: 0 auto; display: block;"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['visible']
  }
</script>

<style>

</style>
