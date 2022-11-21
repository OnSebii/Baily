<template>
  <v-app>
    <v-app-bar app absolute position="sticky" color="white" class="font">
      <v-spacer></v-spacer>
      <!-- <router-link to="/" class="mx-2 text-decoration-none" active-class="active">Start</router-link>
      <router-link to="" class="mx-2 text-decoration-none" active-class="active">Current Projects</router-link>
      <router-link to="" class="mx-2 text-decoration-none" active-class="active">Other work</router-link>
      <router-link to="/about" class="mx-2 text-decoration-none" active-class="active">About</router-link>
      <router-link to="" class="mx-2 text-decoration-none" active-class="active">Contact</router-link> -->
      <router-link v-for="el of links" :key="el[0].text" class="mx-2 text-decoration-none" active-class="active" :to="el[0].link">{{ el[0].text }}</router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at
          orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
          cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">Copyright © {{ new Date().getFullYear() }} — Sebastian Lang </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: {
        start: [{ text: 'Home', link: '/' }],
        cp: [{ text: 'Current Projects', link: '#' }],
        ow: [{ text: 'Other work', link: '#' }],
        about: [{ text: 'About', link: '/about' }],
        contact: [{ text: 'Contact', link: '#' }],
      },
    };
  },
};
</script>

<style scoped>
.font {
  font-family: louis-george;
}
.active {
  color: blue;
}
</style>
