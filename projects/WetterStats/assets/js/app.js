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
          url: 'https://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&appid=57a4d6344e2beaea98a2dfe50ca225ab&units=metric',
          method: 'GET',
        });
        this.output = result.data;
      } catch {}
    },
  },
  /*created() {
    this.getData();
  },*/
});
