<template>
  <div class="__v-img" v-bind="$attrs">
    <img :src="$attrs.src" @click="$emit('click')">
  </div>
</template>

<style>
  .__v-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .__v-img > img {
    max-width: 100%;
  }
</style>
