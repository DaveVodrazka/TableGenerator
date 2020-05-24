<template>
  <button v-on:click="test" id="create-button">CREATE TABLE</button>
</template>

<script>
import generateTable from '../utils/generateTable';

export default {
  name: 'Button',
  methods: {
    test: () => {
      generateTable();
      const button = document.getElementById('create-button');
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 200);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: auto;
  padding: 20px;
  background: #42b983;
  display: block;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px #ccc;
  transition: all ease-in .2s;
}
button:focus {
  outline: 0;
}
.clicked {
  box-shadow: none;
  transform: translate(2px, 2px);
  pointer-events: none;
}
</style>
