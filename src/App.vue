<template>
  <div class="d-flex flex-column h-100">
    <TheHeader/>
    <TheMain/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {TheHeader,TheMain}
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';

</style>
