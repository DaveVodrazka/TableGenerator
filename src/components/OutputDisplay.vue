<template>
  <div class="outer">
    <div class="inner">
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  name: 'OutputDisplay'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  margin: 20px 5px;
  width: calc(100% - 10px);
}
.inner {
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px #ccc;
  background: #42b983;
  box-sizing: border-box;
}
p {
  width: 100%;
  display: block;
  background: white;
}
</style>
