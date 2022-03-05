<template>
  <div class="home">
    <phone></phone>
    <icon></icon>
  </div>
</template>

<script>
import icon from '@/components/icon.vue';
import phone from '@/components/phone.vue';

export default {
  name: 'Home',
  components: {
    icon,
    phone,
  },
};
</script>
