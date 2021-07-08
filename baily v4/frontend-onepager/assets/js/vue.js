let vueLinks = new Vue({
  el: '#links',
  data: {
    links: [
      ['steam', 'https://steamcommunity.com/id/ei1'],
      ['github', 'https://github.com/OnSebii'],
      ['discord', 'https://discord.gg/JnVHJwX'],
    ],
  },
  created() {},
  computed: {},
  methods: {
    getLinkAsClass(num) {
      return `fa-${this.links[num][0]}`;
    },
  },
});

let vueCards = new Vue({
  el: '#cards',
  data: {
    cards: [
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
      ['Test1', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'],
    ],
  },
  created() {},
  computed: {},
  methods: {},
});
