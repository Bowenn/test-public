<template>
  <div id="app"  @mousedown="mouseDownHandler">
    <!-- <TC /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <img alt="Vue logo" :src="src1">
    <img alt="Vue logo" :src="src2">
    <img alt="Vue logo" :src="src3">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TC from './components/TestComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TC
  },
  data() {
    return {
      src1: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAATlBMVEUAAADYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0c5eN58AAAAGXRSTlMA7ahRKphk+B9bh3SgS9MlNUIYCLCQy92+uFmcCgAAAcFJREFUWMPt1+tygjAQBeBFIlFU7mjz/i9aHWnPIOwlbabtdDi/gFk/E4OwoS8n9+FWU8Lk4Z7MpQMvIYBMBPJkXx/41B0H8uQx81KyoefAqniSr8vjg5JiAbZP6XCXp4NZgpYdB04LDtIqDjwI8kX0591nHoc4qTDGJciRj3PicoK4DoI0iiVEgFjeBRkvNgAXZBctAnREEqmL0gjnE48VGw9QInURIKbMkTEiQJG0iQB9QySTnVUEqJC3zihmABXyzSh6gHyK8MB+bYxtAKmtti6i3rDWNdlEkE4GHZlFfEYeYYQIUgKjRJDJnj0gOTBaBMmA8SJ+MOaSVRRIXIh6uwpzBDgX28t62jPENRLgt/oekABj+x6WhB3V7ZXEkFz/OGiik3pcgEhfnMQ0Wh/+Z/cKRC2mnIwEmCqu6OiHcnBiUCjX4TYvlVu8mqbWv8l1fjT/Z07T3ixoqSOfFHu18BIpntXCHKIf9+sZr3PxyhZmEA3PcIglW3i1iuVc3LOF1SZu4iZu4iZu4v8UT3NxNL9d8+N68t1cHNjCG8SUXUp6MXKHVKiiI9t3+6kt7CqlcOgnsc8LMQ1N6eS64wf4Di/+tKed6TqGAAAAAElFTkSuQmCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      src3: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAMAAADi4EJ+AAAAWlBMVEUAAADYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0f2xgN7AAAAHXRSTlMANAUM69wUTfUfvc2ybqmMd4BiK+TSxlqjl0Q9nHhebh8AAAJpSURBVEjHpZbbeqwgDIXlJAqK51Fnhvd/zb3rUAMEW/y67hR/CMkiWHxLGmGtnTtaxGIM3qVVb9api0aIEmJ5mJ6UlzBZ7KlnOK2wTmKX6Qle3IJUEGdrPemWYXgS1teKaeBlDJeP6AuGIwdtdUh3NtIYpKQRggeTk2C4imkRZIcyVr/WHfLKpTfYWKS+wGLSJHDCMS3qdGnUN/4qnHrEIstAnH0V7c2k6IUVacnZHmqcKdC2UdGwsaAu7xTdegUfzLsbp/P5WUFq0vseaGwl3sjIfcPxsCKW+24ZrVO1s6DEvIRIPD0CL/XegKvjxGF3sZEVGC22g659a+tjeypcOT7Dq4DgDP0sfrzhBB2SSmKLEjloNyzdziH0Z1DodPsoh9NFkPb9mHvOsUnrFvdqrljsl3lKoZCezmtG85FEiVyWkvT8zfSRI3JsSl91BtxcdekF8jHGELj0il6cveFovUJHQBmxmDrs8MnqfkTucrRZ1M+x1uo/sDoHzl6UxObELrdNngbezXiuYpDfcoW78kxu4mB2OEz5qmd00rKFb7uG3aJpE+F3Vsd3irm3+mj/Ejx9278Ezx4RrnDhXkb1Zd7WrZ5is365SozAo0FfQianVyvNyZyteu+7UsGmJGKTt5o5o6db8J5gmg4In3v2GeqisDqGeYxbPZaU1ht6j/H0lTwrxS3WmjwwudqTheM3aCyi8+juolmYLHq9OjJtRvTLDz/86le6/+nI9fzG0ljTVv0AV8/iFz2ba3rMaDjyim/zGhZ5C8zyNf+qaJsogYrc6pjT+Ib/NtGy4qZoSVqj9LI8BmiW/wC3C61XrMmPzQAAAABJRU5ErkJggg==',
      src2: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAATlBMVEUAAADYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0fYN0c5eN58AAAAGXRSTlMA7ahRKphk+B9bh3SgS9MlNUIYCLCQy92+uFmcCgAAAcFJREFUWMPt1+tygjAQBeBFIlFU7mjz/i9aHWnPIOwlbabtdDi/gFk/E4OwoS8n9+FWU8Lk4Z7MpQMvIYBMBPJkXx/41B0H8uQx81KyoefAqniSr8vjg5JiAbZP6XCXp4NZgpYdB04LDtIqDjwI8kX0591nHoc4qTDGJciRj3PicoK4DoI0iiVEgFjeBRkvNgAXZBctAnREEqmL0gjnE48VGw9QInURIKbMkTEiQJG0iQB9QySTnVUEqJC3zihmABXyzSh6gHyK8MB+bYxtAKmtti6i3rDWNdlEkE4GHZlFfEYeYYQIUgKjRJDJnj0gOTBaBMmA8SJ+MOaSVRRIXIh6uwpzBDgX28t62jPENRLgt/oekABj+x6WhB3V7ZXEkFz/OGiik3pcgEhfnMQ0Wh/+Z/cKRC2mnIwEmCqu6OiHcnBiUCjX4TYvlVu8mqbWv8l1fjT/Z07T3ixoqSOfFHu18BIpntXCHKIf9+sZr3PxyhZmEA3PcIglW3i1iuVc3LOF1SZu4iZu4iZu4v8UT3NxNL9d8+N68t1cHNjCG8SUXUp6MXKHVKiiI9t3+6kt7CqlcOgnsc8LMQ1N6eS64wf4Di/+tKed6TqGAAAAAElFTkSuQmCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    };
  },
  methods: {
    mouseDownHandler(e) {
      // console.log(e);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
