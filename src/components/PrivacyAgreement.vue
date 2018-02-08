<template>
  <label>
    <input type="checkbox" style="position: relative; top: .2rem;" v-model="model">
    <small>Нажимая на кнопку "{{$props.for}}", я даю согласие на обработку персональных данных</small>
  </label>
</template>

<script>
  import vmodel from '@/vmodel'
  export default {
    mixins: [vmodel],
    props: ['for']
  }
</script>