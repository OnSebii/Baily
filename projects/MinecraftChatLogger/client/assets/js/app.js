let vue = new Vue({
  el: '#app',
  data: {
    cityName: 'Vienna',
    output: '',
    units: 'metric',
  },
  methods: {
    async getData() {
      try {
        let result = await axios({
          url: '',
          method: 'GET',
        });
      } catch {}
    },
  },
});
