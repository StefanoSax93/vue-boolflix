<template>
  <div class="d-flex flex-column h-100">
    <TheHeader/>
    <LoaderPage/>
    <TheMain/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import LoaderPage from './components/LoaderPage.vue';

export default {
  name: 'App',
  components: { TheHeader, TheMain, LoaderPage }
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';

</style>
