<template>
  <BasicDialog v-model="orderFormShown">
    <v-text-field
      label="Фамилия"
      :rules="required"
    />
    <v-text-field
      label="Имя"
    />
    <v-text-field
      label="Телефон"
    />
    <v-text-field
      label="Email"
    />
    <span slot="submit" v-text="'Заказать Оформление'"/>
  </BasicDialog>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
