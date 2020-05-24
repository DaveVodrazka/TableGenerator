<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  padding: 20px;
  background: #42b983;
  display: flex;
  align-content: center;
}
header h1 {
  color: white;
}
@media screen and (max-width: 600px) {
  header h1 {
    font-size: 6vw;
  }
}
</style>
