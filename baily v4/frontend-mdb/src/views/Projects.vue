<template>
  <div class="">
    <hr />
    <h2>Projects</h2>
    <div class="text-center mt-2">
      <p>Load <a @click="switchProjects('personal')" class="selected">Personal</a>/<a @click="switchProjects('github')">GitHub</a> Projects</p>
    </div>
    <ShowProjects v-if="activeOne == 'personal'"></ShowProjects>
    <GitHubProjects v-if="activeOne == 'github'"></GitHubProjects>
  </div>
  <!-- TODO: Auswahl zwischen Projekte und Github. Projekte: werden Projekte angezeigt; Github: mit der Github API hole ich mir alle Repos runter und zeige sie an -->
</template>

<script>
import ShowProjects from '@/components/ShowProjects.vue';
import GitHubProjects from '@/components/GitHubProjects.vue';
export default {
  data() {
    return {
      activeOne: 'personal',
    };
  },
  name: 'Projects',
  components: {
    ShowProjects,
    GitHubProjects,
  },
  created() {},
  methods: {
    switchProjects(project) {
      this.activeOne = project;
    },
  },
};
</script>

<style scoped>
hr {
  display: block;
  margin: 50px 0 -15px;
  width: 100%;
  height: 1px;
  border: 0;
  background-color: rgba(0, 0, 0, 0.35);
}
h2 {
  display: inline-block;
  position: relative;
  left: 50%;
  margin: 0;
  padding: 5px 10px;
  border: 1px solid #453986;
  transform: translateX(-50%);
  color: #453986;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-align: center;
  text-transform: uppercase;
  background-color: #fff;
}

.selected {
}
</style>
