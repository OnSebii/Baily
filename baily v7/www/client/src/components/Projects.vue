<template>
  <div class="red pt-16">
    <div class="about text-center">
      <v-container>
        <h2>My Recent Work</h2>
        <v-row>
          <v-col cols="12" sm="4">
            <card></card>
          </v-col>
          <v-col cols="12" sm="4">
            <card></card>
          </v-col>
          <v-col cols="12" sm="4">
            <card></card>
          </v-col>
          <v-col cols="12" sm="4">
            <card></card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import card from '@/components/Card.vue';
export default {
  name: 'Projects',
  components: {
    card,
  },
};
</script>

<style scoped></style>
