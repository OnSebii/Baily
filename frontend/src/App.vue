<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
export default {
  name: 'NavbarPage',
  components: {
    navbar,
  },
  data() {},
  methods: {},
};
</script>

<style></style>
