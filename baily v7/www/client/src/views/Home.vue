<template>
  <div>
    <div class="text-center mt-12">
      <h1 class="text-h4 font-weight-bold">Photographer, Fullstack Developer & ...</h1>
      <h2 class="text-subtitle-1 mt-4">Subtitle text for more information</h2>
      <div class="d-flex justify-center mt-12"><v-img max-height="250" max-width="250" src="@/assets/images/placeholder.png"></v-img></div>
    </div>
    <about></about>
    <projects></projects>
  </div>
</template>

<script>
import about from '@/components/About.vue';
import projects from '@/components/Projects.vue';
export default {
  name: 'Home',
  components: {
    about,
    projects,
  },
};
</script>

<style scoped></style>
