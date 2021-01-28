const app = Vue.createApp({
  data() {
    return {
      name: 'Vasil',
      age: 29,
      imageUrl: 'https://store-images.s-microsoft.com/image/apps.21102.13608622719434797.30372fd8-b4bd-41c0-beea-1c2a61e087c1.3b7d228b-ee47-474e-bdb5-1a4fa02d7540?mode=scale&q=90&h=270&w=270&background=%230078D7'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');