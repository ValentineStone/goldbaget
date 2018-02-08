<template>
  <div style="display: flex;">
    <v-btn block round large color="primary" v-bind="$attrs" @click="$emit('action')">
      {{action}}
    </v-btn>
    <v-btn large icon color="primary" class="elevation-4" @click="$emit('cancel')" style="margin-right: 0;">
      <v-icon>close</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: [
      'action'
    ]
  }
</script>